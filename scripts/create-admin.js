#!/usr/bin/env node

const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const readline = require('readline');

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id
  });
}

const db = admin.firestore();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function createAdmin() {
  try {
    console.log('🔧 FastSubmit Admin Creation Tool\n');
    
    const email = await question('Enter admin email: ');
    const password = await question('Enter admin password (min 8 characters): ');
    const displayName = await question('Enter admin display name: ');
    
    // Validate inputs
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }
    
    if (!password || password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }
    
    if (!displayName || displayName.trim().length === 0) {
      throw new Error('Display name is required');
    }
    
    console.log('\n🔄 Creating admin user...');
    
    // Check if admin already exists
    const existingAdmin = await db.collection('admins').where('email', '==', email).get();
    if (!existingAdmin.empty) {
      throw new Error('Admin with this email already exists');
    }
    
    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create Firebase Auth user
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: displayName,
      emailVerified: true
    });
    
    // Set custom claims for admin role
    await admin.auth().setCustomUserClaims(userRecord.uid, {
      admin: true,
      role: 'super_admin',
      permissions: [
        'users.read',
        'users.write',
        'users.delete',
        'forms.read',
        'forms.write',
        'forms.delete',
        'analytics.read',
        'settings.read',
        'settings.write',
        'security.read',
        'security.write'
      ]
    });
    
    // Store admin data in Firestore
    const adminData = {
      uid: userRecord.uid,
      email: email,
      displayName: displayName,
      hashedPassword: hashedPassword,
      role: 'super_admin',
      permissions: [
        'users.read',
        'users.write', 
        'users.delete',
        'forms.read',
        'forms.write',
        'forms.delete',
        'analytics.read',
        'settings.read',
        'settings.write',
        'security.read',
        'security.write'
      ],
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      lastLogin: null,
      isActive: true,
      loginAttempts: 0,
      lockedUntil: null,
      twoFactorEnabled: false,
      sessionTimeout: 3600, // 1 hour in seconds
      ipWhitelist: [],
      createdBy: 'system',
      metadata: {
        userAgent: 'Admin Creation Script',
        ipAddress: 'localhost',
        source: 'cli'
      }
    };
    
    await db.collection('admins').doc(userRecord.uid).set(adminData);
    
    // Create admin activity log
    await db.collection('admin_logs').add({
      adminId: userRecord.uid,
      action: 'admin_created',
      details: {
        email: email,
        displayName: displayName,
        createdBy: 'system'
      },
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      ipAddress: 'localhost',
      userAgent: 'Admin Creation Script'
    });
    
    console.log('\n✅ Admin user created successfully!');
    console.log(`📧 Email: ${email}`);
    console.log(`👤 Display Name: ${displayName}`);
    console.log(`🆔 UID: ${userRecord.uid}`);
    console.log(`🔑 Role: super_admin`);
    console.log('\n🔐 Admin can now login at: /admin/login');
    console.log('\n⚠️  Important Security Notes:');
    console.log('- Change the default password after first login');
    console.log('- Enable two-factor authentication');
    console.log('- Configure IP whitelist if needed');
    console.log('- Review and adjust permissions as needed');
    
  } catch (error) {
    console.error('\n❌ Error creating admin:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Handle script execution
if (require.main === module) {
  createAdmin().then(() => {
    process.exit(0);
  }).catch((error) => {
    console.error('Script failed:', error);
    process.exit(1);
  });
}

module.exports = { createAdmin };