import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { sendNotificationDigest } from '@/lib/email'
import { FieldValue } from 'firebase-admin/firestore'

// Verify cron secret to prevent unauthorized access
function verifyCronSecret(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  if (!cronSecret) {
    console.warn('CRON_SECRET not configured')
    return false
  }

  return authHeader === `Bearer ${cronSecret}`
}

export async function GET(request: NextRequest) {
  // Verify this is a legitimate cron request
  if (!verifyCronSecret(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const now = new Date()
    let emailsSent = 0
    let usersProcessed = 0

    // Get all users
    const usersSnapshot = await adminDb.collection('users').get()

    for (const userDoc of usersSnapshot.docs) {
      const userId = userDoc.id
      const userData = userDoc.data()

      // Get notification settings for this user
      const settingsDoc = await adminDb
        .collection('users')
        .doc(userId)
        .collection('settings')
        .doc('notifications')
        .get()

      // Skip if notifications not enabled
      if (!settingsDoc.exists || !settingsDoc.data()?.emailNotifications) {
        continue
      }

      const settings = settingsDoc.data()!

      usersProcessed++

      // Get all forms for this user
      const formsSnapshot = await adminDb
        .collection('forms')
        .where('userId', '==', userId)
        .get()

      if (formsSnapshot.empty) {
        continue
      }

      const formSubmissions: { formId: string; formName: string; submissionCount: number; submissionIds: string[] }[] = []

      // For each form, get unnotified submissions
      for (const formDoc of formsSnapshot.docs) {
        const formData = formDoc.data()
        if (formData.deleted) continue

        // Get all submissions and filter unnotified ones
        const allSubmissionsSnapshot = await adminDb
          .collection('forms')
          .doc(formDoc.id)
          .collection('submissions')
          .get()

        const unnotifiedSubmissions = allSubmissionsSnapshot.docs.filter((doc) => {
          const data = doc.data()
          return !data.notifiedAt && !data.deleted
        })

        if (unnotifiedSubmissions.length > 0) {
          formSubmissions.push({
            formId: formDoc.id,
            formName: formData.name || 'Untitled Form',
            submissionCount: unnotifiedSubmissions.length,
            submissionIds: unnotifiedSubmissions.map((d) => d.id),
          })
        }
      }

      // Skip if no new submissions
      if (formSubmissions.length === 0) {
        continue
      }

      // Send notification email
      const notificationEmail = settings.notificationEmail || userData.email
      if (!notificationEmail) {
        console.warn(`No email for user ${userId}`)
        continue
      }

      const result = await sendNotificationDigest({
        to: notificationEmail,
        userName: userData.displayName || userData.name,
        submissions: formSubmissions.map((f) => ({
          formId: f.formId,
          formName: f.formName,
          submissionCount: f.submissionCount,
        })),
      })

      if (result.success) {
        emailsSent++

        // Mark submissions as notified using batch
        const batch = adminDb.batch()
        const notifiedAt = FieldValue.serverTimestamp()

        for (const form of formSubmissions) {
          for (const subId of form.submissionIds) {
            const subRef = adminDb
              .collection('forms')
              .doc(form.formId)
              .collection('submissions')
              .doc(subId)
            batch.update(subRef, { notifiedAt })
          }
        }

        // Update lastNotifiedAt
        const settingsRef = adminDb
          .collection('users')
          .doc(userId)
          .collection('settings')
          .doc('notifications')
        batch.update(settingsRef, { lastNotifiedAt: FieldValue.serverTimestamp() })

        await batch.commit()
      } else {
        console.error(`Failed to send notification to ${notificationEmail}:`, result.error)
      }
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${usersProcessed} users, sent ${emailsSent} emails`,
      timestamp: now.toISOString(),
    })
  } catch (error) {
    console.error('Cron notification error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
