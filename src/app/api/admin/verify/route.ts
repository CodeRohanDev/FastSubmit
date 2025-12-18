import { NextRequest, NextResponse } from 'next/server';
import { verifyAdminAuth } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request);
    
    if (!authResult.success) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    return NextResponse.json({
      success: true,
      admin: {
        uid: authResult.admin?.uid,
        email: authResult.admin?.email,
        displayName: authResult.admin?.displayName,
        role: authResult.admin?.role,
        permissions: authResult.admin?.permissions
      }
    });
  } catch (error) {
    console.error('Admin verification error:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 401 });
  }
}