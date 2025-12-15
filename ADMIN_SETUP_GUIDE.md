# FastSubmit Admin Dashboard Setup Guide

## Overview

This guide covers the complete setup and usage of the FastSubmit admin dashboard with real GA4 analytics integration, Firebase authentication, and comprehensive admin management features.

## Features

### 🔐 Admin Authentication
- Secure Firebase-based authentication
- Role-based access control (RBAC)
- Session management with timeout
- IP whitelisting support
- Failed login attempt protection
- Two-factor authentication ready

### 📊 Real-time Analytics (GA4 Integration)
- Live user tracking
- Page view analytics
- Traffic source analysis
- Device breakdown
- Geographic data
- Custom reporting capabilities
- Real-time data updates

### 👥 User Management
- View all users
- User activity tracking
- Account management
- Permission controls

### 📝 Forms Management
- Form creation and editing
- Submission tracking
- Form analytics
- Bulk operations

### ⚙️ System Settings
- Configuration management
- Feature toggles
- System monitoring

### 🛡️ Security Panel
- Security logs
- Access monitoring
- Threat detection
- Admin activity logs

## Setup Instructions

### 1. Install Dependencies

The required dependencies are already installed:
- `googleapis` - Google APIs client
- `@google-analytics/data` - GA4 Data API
- `bcryptjs` - Password hashing
- `firebase-admin` - Firebase Admin SDK

### 2. Environment Configuration

Your `.env.local` file should include:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
FIREBASE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}

# GA4 Configuration
GA4_PROPERTY_ID=properties/your_property_id
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Create Your First Admin

Run the admin creation script:

```bash
npm run create-admin
```

Follow the prompts to create your first admin user:
- Enter admin email
- Set a secure password (min 8 characters)
- Provide display name

The script will:
- Create Firebase Auth user
- Set admin custom claims
- Store admin data in Firestore
- Log the creation activity

### 4. GA4 Property ID Setup

To get your GA4 Property ID:

1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property
3. Go to Admin → Property Settings
4. Copy the Property ID (format: `123456789`)
5. Update your `.env.local`:
   ```env
   GA4_PROPERTY_ID=properties/123456789
   ```

### 5. Firebase Service Account Permissions

Ensure your Firebase service account has these permissions:
- Firebase Authentication Admin
- Cloud Firestore User
- Google Analytics Data API access

To grant GA4 access:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Navigate to IAM & Admin → Service Accounts
3. Find your Firebase service account
4. Add the role: "Google Analytics Data API User"

## Usage

### Accessing the Admin Panel

1. Navigate to `/admin` on your website
2. Login with your admin credentials
3. The dashboard will load with real-time data

### Dashboard Sections

#### Overview
- Key metrics summary
- Real-time user activity
- Quick stats and trends

#### Analytics Panel
- **Real-time Data**: Live user tracking
- **Overview Stats**: Users, page views, bounce rate, session duration
- **Top Pages**: Most visited pages with view counts
- **Traffic Sources**: Where your visitors come from
- **Device Breakdown**: Desktop, mobile, tablet usage
- **Time Range Selection**: 1 day, 7 days, 30 days, 90 days

#### User Management
- View all registered users
- User activity and engagement
- Account status management

#### Forms Management
- All forms overview
- Submission statistics
- Form performance metrics

#### System Settings
- Configuration options
- Feature toggles
- System health monitoring

#### Security Panel
- Admin activity logs
- Login attempts tracking
- Security alerts
- IP access logs

### API Endpoints

The admin system provides these API endpoints:

#### Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/verify` - Token verification

#### Analytics
- `GET /api/admin/analytics/overview` - Overview metrics
- `GET /api/admin/analytics/pages` - Top pages data
- `GET /api/admin/analytics/traffic-sources` - Traffic sources
- `GET /api/admin/analytics/devices` - Device breakdown
- `GET /api/admin/analytics/realtime` - Real-time data

All analytics endpoints support query parameters:
- `startDate` - Start date (GA4 format: 'YYYY-MM-DD' or 'NdaysAgo')
- `endDate` - End date (GA4 format: 'YYYY-MM-DD' or 'today')
- `limit` - Number of results (for paginated endpoints)

### Security Features

#### Admin Account Security
- Passwords are hashed with bcrypt (12 rounds)
- Failed login attempts are tracked
- Accounts lock after 5 failed attempts (30 min lockout)
- IP whitelisting support
- Session timeout configuration

#### Activity Logging
All admin actions are logged with:
- Admin ID and email
- Action performed
- Timestamp
- IP address
- User agent
- Additional details

#### Permission System
Granular permissions include:
- `users.read`, `users.write`, `users.delete`
- `forms.read`, `forms.write`, `forms.delete`
- `analytics.read`
- `settings.read`, `settings.write`
- `security.read`, `security.write`

## Troubleshooting

### Common Issues

#### 1. GA4 Data Not Loading
- Verify GA4_PROPERTY_ID is correct
- Check Firebase service account has GA4 permissions
- Ensure property has data (may take 24-48 hours for new setups)

#### 2. Authentication Errors
- Verify Firebase service account key is valid
- Check admin user exists in Firestore
- Ensure custom claims are set correctly

#### 3. Permission Denied
- Verify admin has required permissions
- Check IP whitelist configuration
- Ensure account is not locked

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

### Logs Location

Admin activity logs are stored in Firestore:
- Collection: `admin_logs`
- Admin data: `admins` collection

## Advanced Configuration

### Custom Permissions

Add custom permissions by modifying the admin creation script:

```javascript
permissions: [
  'users.read',
  'custom.permission',
  // Add your custom permissions
]
```

### IP Whitelisting

Configure IP restrictions in the admin document:

```javascript
ipWhitelist: ['192.168.1.1', '10.0.0.1']
```

### Session Timeout

Adjust session timeout (in seconds):

```javascript
sessionTimeout: 3600 // 1 hour
```

### Two-Factor Authentication

The system is ready for 2FA implementation. Set:

```javascript
twoFactorEnabled: true
```

## Monitoring and Maintenance

### Regular Tasks

1. **Review Admin Logs**: Check for suspicious activity
2. **Update Permissions**: Adjust as needed
3. **Monitor Performance**: Check API response times
4. **Security Audits**: Regular security reviews

### Backup Considerations

- Firebase handles data backup automatically
- Consider exporting admin logs periodically
- Keep service account keys secure

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review Firebase and GA4 documentation
3. Check admin activity logs for errors
4. Verify environment configuration

## Security Best Practices

1. **Strong Passwords**: Enforce minimum 12 characters
2. **Regular Rotation**: Change admin passwords regularly
3. **Principle of Least Privilege**: Grant minimal required permissions
4. **Monitor Access**: Review admin logs regularly
5. **Secure Environment**: Keep service account keys secure
6. **HTTPS Only**: Always use HTTPS in production
7. **IP Restrictions**: Use IP whitelisting when possible

This admin dashboard provides enterprise-level security and analytics capabilities for your FastSubmit application.