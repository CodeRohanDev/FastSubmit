import { NextRequest } from 'next/server';
import admin from 'firebase-admin';
import bcrypt from 'bcryptjs';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id
  });
}

const db = admin.firestore();

export interface AdminUser {
  uid?: string; // Firebase Auth UID (optional for simple admins)
  id?: string;  // Simple admin ID
  email: string;
  displayName: string;
  role: string;
  permissions: string[];
  isActive: boolean;
  lastLogin: Date | null;
  loginAttempts: number;
  lockedUntil: Date | null;
  twoFactorEnabled: boolean;
  sessionTimeout: number;
  ipWhitelist: string[];
  hashedPassword?: string;
}

export interface AuthResult {
  success: boolean;
  admin?: AdminUser;
  error?: string;
  customToken?: string;
}

export async function verifyAdminAuth(request: NextRequest): Promise<AuthResult> {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { success: false, error: 'No authorization token provided' };
    }

    const token = authHeader.substring(7);
    
    // Verify Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Check if user has admin claims
    if (!decodedToken.admin) {
      return { success: false, error: 'Insufficient permissions' };
    }

    // Get admin data from Firestore
    const adminDoc = await db.collection('admins').doc(decodedToken.uid).get();
    if (!adminDoc.exists) {
      return { success: false, error: 'Admin user not found' };
    }

    const adminData = adminDoc.data() as AdminUser;
    
    // Check if admin is active
    if (!adminData.isActive) {
      return { success: false, error: 'Admin account is disabled' };
    }

    // Check if account is locked
    if (adminData.lockedUntil && adminData.lockedUntil > new Date()) {
      return { success: false, error: 'Admin account is temporarily locked' };
    }

    // Check IP whitelist if configured
    const clientIP = request.headers.get('x-forwarded-for') || 
                    request.headers.get('x-real-ip') || 
                    'unknown';
    
    if (adminData.ipWhitelist && adminData.ipWhitelist.length > 0) {
      if (!adminData.ipWhitelist.includes(clientIP)) {
        return { success: false, error: 'IP address not whitelisted' };
      }
    }

    return { success: true, admin: adminData };
  } catch (error) {
    console.error('Admin auth verification error:', error);
    return { success: false, error: 'Authentication failed' };
  }
}

export async function loginAdmin(email: string, password: string, ipAddress: string, userAgent: string): Promise<AuthResult> {
  try {
    // Get admin by email
    const adminQuery = await db.collection('admins').where('email', '==', email).get();
    if (adminQuery.empty) {
      return { success: false, error: 'Invalid credentials' };
    }

    const adminDoc = adminQuery.docs[0];
    const adminData = adminDoc.data() as AdminUser;

    // Check if account is active
    if (!adminData.isActive) {
      return { success: false, error: 'Account is disabled' };
    }

    // Check if account is locked
    if (adminData.lockedUntil && adminData.lockedUntil > new Date()) {
      return { success: false, error: 'Account is temporarily locked' };
    }

    // Check login attempts
    if (adminData.loginAttempts >= 5) {
      // Lock account for 30 minutes
      const lockUntil = new Date(Date.now() + 30 * 60 * 1000);
      await adminDoc.ref.update({
        lockedUntil: lockUntil,
        loginAttempts: admin.firestore.FieldValue.increment(1)
      });
      return { success: false, error: 'Too many failed attempts. Account locked for 30 minutes.' };
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, adminData.hashedPassword || '');
    if (!isValidPassword) {
      // Increment login attempts
      await adminDoc.ref.update({
        loginAttempts: admin.firestore.FieldValue.increment(1)
      });
      return { success: false, error: 'Invalid credentials' };
    }

    // Check IP whitelist
    if (adminData.ipWhitelist && adminData.ipWhitelist.length > 0) {
      if (!adminData.ipWhitelist.includes(ipAddress)) {
        return { success: false, error: 'IP address not whitelisted' };
      }
    }

    // Create Firebase custom token (use uid if available, otherwise use id)
    const adminIdentifier = adminData.uid || adminData.id;
    if (!adminIdentifier) {
      return { success: false, error: 'Admin identifier not found' };
    }
    
    const customToken = await admin.auth().createCustomToken(adminIdentifier, {
      admin: true,
      role: adminData.role,
      permissions: adminData.permissions
    });

    // Update last login and reset login attempts
    await adminDoc.ref.update({
      lastLogin: admin.firestore.FieldValue.serverTimestamp(),
      loginAttempts: 0,
      lockedUntil: null
    });

    // Log admin activity
    await db.collection('admin_logs').add({
      adminId: adminData.uid || adminData.id,
      action: 'login',
      details: {
        email: adminData.email,
        ipAddress,
        userAgent
      },
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      ipAddress,
      userAgent
    });

    return { 
      success: true, 
      admin: adminData,
      customToken 
    };
  } catch (error) {
    console.error('Admin login error:', error);
    return { success: false, error: 'Login failed' };
  }
}

export async function logAdminActivity(
  adminId: string,
  action: string,
  details: any,
  ipAddress: string,
  userAgent: string
) {
  try {
    await db.collection('admin_logs').add({
      adminId,
      action,
      details,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      ipAddress,
      userAgent
    });
  } catch (error) {
    console.error('Error logging admin activity:', error);
  }
}

export async function hasPermission(adminId: string, permission: string): Promise<boolean> {
  try {
    const adminDoc = await db.collection('admins').doc(adminId).get();
    if (!adminDoc.exists) return false;

    const adminData = adminDoc.data() as AdminUser;
    return adminData.permissions.includes(permission) || adminData.role === 'super_admin';
  } catch (error) {
    console.error('Error checking admin permission:', error);
    return false;
  }
}