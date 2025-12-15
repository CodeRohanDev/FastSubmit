import { NextRequest, NextResponse } from 'next/server';
import { loginAdmin } from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Get client IP and user agent
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const result = await loginAdmin(email, password, clientIP, userAgent);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      admin: {
        uid: result.admin?.uid,
        email: result.admin?.email,
        displayName: result.admin?.displayName,
        role: result.admin?.role,
        permissions: result.admin?.permissions
      },
      customToken: result.customToken
    });
  } catch (error) {
    console.error('Admin login API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}