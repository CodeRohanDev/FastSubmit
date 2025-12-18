#!/usr/bin/env node

const admin = require('firebase-admin');

// Test Firebase Admin SDK setup
async function testSetup() {
  try {
    console.log('🧪 Testing FastSubmit Admin Setup\n');

    // Test 1: Firebase Admin SDK initialization
    console.log('1. Testing Firebase Admin SDK...');
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY || '{}');
    
    if (!serviceAccount.project_id) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY not found or invalid');
    }

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        projectId: serviceAccount.project_id
      });
    }
    console.log('✅ Firebase Admin SDK initialized successfully');

    // Test 2: Firestore connection
    console.log('\n2. Testing Firestore connection...');
    const db = admin.firestore();
    await db.collection('test').doc('connection').set({ 
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      test: true 
    });
    await db.collection('test').doc('connection').delete();
    console.log('✅ Firestore connection successful');

    // Test 3: Check for existing admins
    console.log('\n3. Checking for existing admins...');
    const adminsSnapshot = await db.collection('admins').limit(5).get();
    console.log(`✅ Found ${adminsSnapshot.size} admin(s) in database`);

    if (adminsSnapshot.size > 0) {
      console.log('\nExisting admins:');
      adminsSnapshot.forEach(doc => {
        const data = doc.data();
        console.log(`  - ${data.email} (${data.role}) - Active: ${data.isActive}`);
      });
    }

    // Test 4: Environment variables
    console.log('\n4. Checking environment variables...');
    const requiredEnvVars = [
      'NEXT_PUBLIC_FIREBASE_API_KEY',
      'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
      'NEXT_PUBLIC_GA_MEASUREMENT_ID',
      'GA4_PROPERTY_ID'
    ];

    let envIssues = 0;
    requiredEnvVars.forEach(envVar => {
      if (process.env[envVar]) {
        console.log(`✅ ${envVar}: Set`);
      } else {
        console.log(`❌ ${envVar}: Missing`);
        envIssues++;
      }
    });

    if (envIssues === 0) {
      console.log('✅ All required environment variables are set');
    } else {
      console.log(`⚠️  ${envIssues} environment variable(s) missing`);
    }

    // Test 5: GA4 Property ID format
    console.log('\n5. Validating GA4 configuration...');
    const ga4PropertyId = process.env.GA4_PROPERTY_ID;
    if (ga4PropertyId && ga4PropertyId.startsWith('properties/')) {
      console.log('✅ GA4_PROPERTY_ID format is correct');
    } else {
      console.log('⚠️  GA4_PROPERTY_ID should be in format: properties/123456789');
    }

    console.log('\n🎉 Admin setup test completed!');
    console.log('\nNext steps:');
    console.log('1. Run "npm run create-admin" to create your first admin');
    console.log('2. Navigate to /admin to access the dashboard');
    console.log('3. Verify GA4 data is loading in the analytics panel');

  } catch (error) {
    console.error('\n❌ Setup test failed:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Verify FIREBASE_SERVICE_ACCOUNT_KEY is set correctly');
    console.log('2. Check Firebase project permissions');
    console.log('3. Ensure Firestore is enabled in your Firebase project');
    process.exit(1);
  }
}

// Handle script execution
if (require.main === module) {
  testSetup().then(() => {
    process.exit(0);
  }).catch((error) => {
    console.error('Test script failed:', error);
    process.exit(1);
  });
}

module.exports = { testSetup };