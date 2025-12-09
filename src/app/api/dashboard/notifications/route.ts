import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth-helpers'
import { adminDb } from '@/lib/firebase-admin'
import { NotificationSettings } from '@/types'
import { sendNotificationOptInEmail, sendNotificationOptOutEmail } from '@/lib/email'

// GET /api/dashboard/notifications - Get notification settings
export async function GET(request: NextRequest) {
  try {
    const session = await verifySession(request)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.uid
    const settingsDoc = await adminDb
      .collection('users')
      .doc(userId)
      .collection('settings')
      .doc('notifications')
      .get()

    if (!settingsDoc.exists) {
      // Return default settings (1440 minutes = 24 hours)
      return NextResponse.json({
        success: true,
        settings: {
          emailNotifications: false,
          notificationInterval: 1440,
          lastNotifiedAt: null,
          notificationEmail: session.email || '',
        } as NotificationSettings,
      })
    }

    const data = settingsDoc.data()!
    return NextResponse.json({
      success: true,
      settings: {
        emailNotifications: data.emailNotifications ?? false,
        notificationInterval: data.notificationInterval ?? 1440,
        lastNotifiedAt: data.lastNotifiedAt?.toDate() ?? null,
        notificationEmail: data.notificationEmail || session.email || '',
      } as NotificationSettings,
    })
  } catch (error) {
    console.error('Error getting notification settings:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/dashboard/notifications - Update notification settings
export async function POST(request: NextRequest) {
  try {
    const session = await verifySession(request)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.uid
    const body = await request.json()

    const { emailNotifications, notificationInterval, notificationEmail } = body

    // Validate interval (in minutes, min 1 minute, max 1440 = 24 hours)
    if (notificationInterval && (notificationInterval < 1 || notificationInterval > 1440)) {
      return NextResponse.json({ error: 'Invalid notification interval' }, { status: 400 })
    }

    // Get existing settings to preserve lastNotifiedAt and check for changes
    const existingDoc = await adminDb
      .collection('users')
      .doc(userId)
      .collection('settings')
      .doc('notifications')
      .get()
    const existingData = existingDoc.exists ? existingDoc.data()! : {}
    const wasEnabled = existingData.emailNotifications ?? false
    const newEnabled = emailNotifications ?? existingData.emailNotifications ?? false

    const finalEmail = notificationEmail || existingData.notificationEmail || session.email || ''
    const finalInterval = notificationInterval ?? existingData.notificationInterval ?? 1440

    await adminDb
      .collection('users')
      .doc(userId)
      .collection('settings')
      .doc('notifications')
      .set({
        emailNotifications: newEnabled,
        notificationInterval: finalInterval,
        notificationEmail: finalEmail,
        lastNotifiedAt: existingData.lastNotifiedAt ?? null,
        updatedAt: new Date(),
      })

    // Send opt-in/opt-out confirmation email if status changed
    if (wasEnabled !== newEnabled && finalEmail) {
      // Get user data for name
      const userDoc = await adminDb.collection('users').doc(userId).get()
      const userData = userDoc.exists ? userDoc.data() : {}
      const userName = userData?.displayName || userData?.name || undefined

      if (newEnabled) {
        // User opted in
        await sendNotificationOptInEmail({
          to: finalEmail,
          userName,
        })
      } else {
        // User opted out
        await sendNotificationOptOutEmail({
          to: finalEmail,
          userName,
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Notification settings updated',
    })
  } catch (error) {
    console.error('Error updating notification settings:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
