import { NextRequest, NextResponse } from 'next/server';
import { ga4Analytics } from '@/lib/ga4-api';
import { verifyAdminAuth } from '@/lib/admin-auth';

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication
    const authResult = await verifyAdminAuth(request);
    if (!authResult.success) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate') || '7daysAgo';
    const endDate = searchParams.get('endDate') || 'today';

    const data = await ga4Analytics.getOverviewData(startDate, endDate);
    
    return NextResponse.json({
      success: true,
      data,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Analytics overview API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch analytics data',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const authResult = await verifyAdminAuth(request);
    if (!authResult.success) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { startDate, endDate, metrics, dimensions } = body;

    if (metrics && dimensions) {
      // Custom report
      const data = await ga4Analytics.getCustomReport(
        dimensions,
        metrics,
        startDate || '7daysAgo',
        endDate || 'today'
      );
      
      return NextResponse.json({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      });
    } else {
      // Standard overview
      const data = await ga4Analytics.getOverviewData(
        startDate || '7daysAgo',
        endDate || 'today'
      );
      
      return NextResponse.json({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('Analytics overview POST API error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch analytics data',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}