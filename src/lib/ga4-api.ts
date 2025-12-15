import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { google } from 'googleapis';

// Initialize GA4 Data API client
let analyticsDataClient: BetaAnalyticsDataClient | null = null;

function getAnalyticsClient() {
  if (!analyticsDataClient) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');
    
    analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: serviceAccount.client_email,
        private_key: serviceAccount.private_key,
        project_id: serviceAccount.project_id,
      },
    });
  }
  
  return analyticsDataClient;
}

// GA4 Property ID - you'll need to get this from your GA4 property
const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || 'properties/123456789';

export interface AnalyticsOverview {
  totalUsers: number;
  totalSessions: number;
  pageViews: number;
  bounceRate: number;
  avgSessionDuration: number;
  newUsers: number;
  returningUsers: number;
}

export interface TopPage {
  pagePath: string;
  pageTitle: string;
  screenPageViews: number;
  uniquePageViews: number;
  avgTimeOnPage: number;
  bounceRate: number;
}

export interface TrafficSource {
  source: string;
  medium: string;
  users: number;
  sessions: number;
  percentage: number;
}

export interface DeviceData {
  deviceCategory: string;
  users: number;
  sessions: number;
  percentage: number;
}

export interface GeographicData {
  country: string;
  city: string;
  users: number;
  sessions: number;
}

export interface RealtimeData {
  activeUsers: number;
  screenPageViews: number;
  eventCount: number;
  conversions: number;
}

export class GA4Analytics {
  private client: BetaAnalyticsDataClient;
  private propertyId: string;

  constructor() {
    this.client = getAnalyticsClient();
    this.propertyId = GA4_PROPERTY_ID;
  }

  async getOverviewData(startDate: string = '7daysAgo', endDate: string = 'today'): Promise<AnalyticsOverview> {
    try {
      const [response] = await this.client.runReport({
        property: this.propertyId,
        dateRanges: [{ startDate, endDate }],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'bounceRate' },
          { name: 'averageSessionDuration' },
          { name: 'newUsers' },
        ],
      });

      const row = response.rows?.[0];
      if (!row?.metricValues) {
        throw new Error('No data returned from GA4 API');
      }

      const metrics = row.metricValues;
      const totalUsers = parseInt(metrics[0]?.value || '0');
      const newUsers = parseInt(metrics[5]?.value || '0');

      return {
        totalUsers,
        totalSessions: parseInt(metrics[1]?.value || '0'),
        pageViews: parseInt(metrics[2]?.value || '0'),
        bounceRate: parseFloat(metrics[3]?.value || '0'),
        avgSessionDuration: parseFloat(metrics[4]?.value || '0'),
        newUsers,
        returningUsers: totalUsers - newUsers,
      };
    } catch (error) {
      console.error('Error fetching GA4 overview data:', error);
      throw error;
    }
  }

  async getTopPages(startDate: string = '7daysAgo', endDate: string = 'today', limit: number = 10): Promise<TopPage[]> {
    try {
      const [response] = await this.client.runReport({
        property: this.propertyId,
        dateRanges: [{ startDate, endDate }],
        dimensions: [
          { name: 'pagePath' },
          { name: 'pageTitle' },
        ],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'averageTimeOnPage' },
          { name: 'bounceRate' },
        ],
        orderBys: [
          {
            metric: { metricName: 'screenPageViews' },
            desc: true,
          },
        ],
        limit,
      });

      return response.rows?.map(row => ({
        pagePath: row.dimensionValues?.[0]?.value || '',
        pageTitle: row.dimensionValues?.[1]?.value || '',
        screenPageViews: parseInt(row.metricValues?.[0]?.value || '0'),
        uniquePageViews: parseInt(row.metricValues?.[0]?.value || '0'), // GA4 doesn't have unique page views
        avgTimeOnPage: parseFloat(row.metricValues?.[1]?.value || '0'),
        bounceRate: parseFloat(row.metricValues?.[2]?.value || '0'),
      })) || [];
    } catch (error) {
      console.error('Error fetching GA4 top pages:', error);
      throw error;
    }
  }

  async getTrafficSources(startDate: string = '7daysAgo', endDate: string = 'today'): Promise<TrafficSource[]> {
    try {
      const [response] = await this.client.runReport({
        property: this.propertyId,
        dateRanges: [{ startDate, endDate }],
        dimensions: [
          { name: 'sessionSource' },
          { name: 'sessionMedium' },
        ],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
        ],
        orderBys: [
          {
            metric: { metricName: 'totalUsers' },
            desc: true,
          },
        ],
        limit: 10,
      });

      const totalUsers = response.rows?.reduce((sum, row) => 
        sum + parseInt(row.metricValues?.[0]?.value || '0'), 0) || 1;

      return response.rows?.map(row => {
        const users = parseInt(row.metricValues?.[0]?.value || '0');
        return {
          source: row.dimensionValues?.[0]?.value || 'Unknown',
          medium: row.dimensionValues?.[1]?.value || 'Unknown',
          users,
          sessions: parseInt(row.metricValues?.[1]?.value || '0'),
          percentage: (users / totalUsers) * 100,
        };
      }) || [];
    } catch (error) {
      console.error('Error fetching GA4 traffic sources:', error);
      throw error;
    }
  }

  async getDeviceData(startDate: string = '7daysAgo', endDate: string = 'today'): Promise<DeviceData[]> {
    try {
      const [response] = await this.client.runReport({
        property: this.propertyId,
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
        ],
        orderBys: [
          {
            metric: { metricName: 'totalUsers' },
            desc: true,
          },
        ],
      });

      const totalUsers = response.rows?.reduce((sum, row) => 
        sum + parseInt(row.metricValues?.[0]?.value || '0'), 0) || 1;

      return response.rows?.map(row => {
        const users = parseInt(row.metricValues?.[0]?.value || '0');
        return {
          deviceCategory: row.dimensionValues?.[0]?.value || 'Unknown',
          users,
          sessions: parseInt(row.metricValues?.[1]?.value || '0'),
          percentage: (users / totalUsers) * 100,
        };
      }) || [];
    } catch (error) {
      console.error('Error fetching GA4 device data:', error);
      throw error;
    }
  }

  async getGeographicData(startDate: string = '7daysAgo', endDate: string = 'today', limit: number = 10): Promise<GeographicData[]> {
    try {
      const [response] = await this.client.runReport({
        property: this.propertyId,
        dateRanges: [{ startDate, endDate }],
        dimensions: [
          { name: 'country' },
          { name: 'city' },
        ],
        metrics: [
          { name: 'totalUsers' },
          { name: 'sessions' },
        ],
        orderBys: [
          {
            metric: { metricName: 'totalUsers' },
            desc: true,
          },
        ],
        limit,
      });

      return response.rows?.map(row => ({
        country: row.dimensionValues?.[0]?.value || 'Unknown',
        city: row.dimensionValues?.[1]?.value || 'Unknown',
        users: parseInt(row.metricValues?.[0]?.value || '0'),
        sessions: parseInt(row.metricValues?.[1]?.value || '0'),
      })) || [];
    } catch (error) {
      console.error('Error fetching GA4 geographic data:', error);
      throw error;
    }
  }

  async getRealtimeData(): Promise<RealtimeData> {
    try {
      const [response] = await this.client.runRealtimeReport({
        property: this.propertyId,
        metrics: [
          { name: 'activeUsers' },
          { name: 'screenPageViews' },
          { name: 'eventCount' },
        ],
      });

      const row = response.rows?.[0];
      if (!row?.metricValues) {
        return {
          activeUsers: 0,
          screenPageViews: 0,
          eventCount: 0,
          conversions: 0,
        };
      }

      return {
        activeUsers: parseInt(row.metricValues[0]?.value || '0'),
        screenPageViews: parseInt(row.metricValues[1]?.value || '0'),
        eventCount: parseInt(row.metricValues[2]?.value || '0'),
        conversions: 0, // Would need conversion events configured
      };
    } catch (error) {
      console.error('Error fetching GA4 realtime data:', error);
      throw error;
    }
  }

  async getCustomReport(
    dimensions: string[],
    metrics: string[],
    startDate: string = '7daysAgo',
    endDate: string = 'today',
    filters?: any[],
    orderBy?: any[],
    limit?: number
  ) {
    try {
      const request: any = {
        property: this.propertyId,
        dateRanges: [{ startDate, endDate }],
        dimensions: dimensions.map(name => ({ name })),
        metrics: metrics.map(name => ({ name })),
      };

      if (filters) request.dimensionFilter = filters;
      if (orderBy) request.orderBys = orderBy;
      if (limit) request.limit = limit;

      const [response] = await this.client.runReport(request);
      return response;
    } catch (error) {
      console.error('Error fetching GA4 custom report:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const ga4Analytics = new GA4Analytics();