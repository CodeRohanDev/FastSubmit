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
    const limit = parseInt(searchParams.get('limit') || '10');

    const data = await ga4Analytics.getTopPages(startDate, endDate, limit);
    
    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Analytics pages API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch top pages data',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}