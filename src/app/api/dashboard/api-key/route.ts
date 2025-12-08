import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth-helpers'
import { getUserApiKey, createUserApiKey, regenerateUserApiKey } from '@/lib/user-api-key'

// GET /api/dashboard/api-key - Get user's API key
export async function GET(request: NextRequest) {
  try {
    const session = await verifySession(request)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.uid
    let apiKey = await getUserApiKey(userId)

    // If user doesn't have an API key, create one
    if (!apiKey) {
      apiKey = await createUserApiKey(userId)
    }

    return NextResponse.json({
      success: true,
      apiKey,
    })
  } catch (error) {
    console.error('Error getting API key:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/dashboard/api-key/regenerate - Regenerate user's API key
export async function POST(request: NextRequest) {
  try {
    const session = await verifySession(request)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.uid
    const newApiKey = await regenerateUserApiKey(userId)

    return NextResponse.json({
      success: true,
      apiKey: newApiKey,
      message: 'API key regenerated successfully. Update your applications with the new key.',
    })
  } catch (error) {
    console.error('Error regenerating API key:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
