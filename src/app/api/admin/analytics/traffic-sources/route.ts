import { NextRequest, NextResponse } from 'next/server';
import { ga4Analytics } from '@/lib/ga4-api';
import { verifyAdminAuth } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request);
    if (!authResult.success) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate') || '7daysAgo';
    const endDate = searchParams.get('endDate') || 'today';

    const data = await ga4Analytics.getTrafficSources(startDate, endDate);
    
    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Analytics traffic sources API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch traffic sources data',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}