# Deploy Firestore Security Rules

## Overview

Firestore security rules control who can read and write data in your database. The updated rules include protection for the new `verifiedDomains` collection.

## Current Rules

The `firestore.rules` file contains:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - users can only access their own document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Forms collection - users can only access their own forms
    match /forms/{formId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
      
      // Submissions - allow public write (for form submissions), owner read
      match /submissions/{submissionId} {
        allow read: if request.auth != null && get(/databases/$(database)/documents/forms/$(formId)).data.userId == request.auth.uid;
        allow create: if true; // Public can submit forms
      }
    }
    
    // Verified domains - users can only access their own domains
    match /verifiedDomains/{domainId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
  }
}
```

## Security Features

### Users Collection
- ✅ Users can only read/write their own user document
- ❌ Cannot access other users' data

### Forms Collection
- ✅ Users can only read/write their own forms
- ✅ Must be authenticated to create forms
- ✅ Form ownership verified on creation

### Submissions Subcollection
- ✅ Public can create submissions (for form submissions)
- ✅ Only form owner can read submissions
- ❌ Public cannot read submissions

### Verified Domains Collection (NEW)
- ✅ Users can only read/write their own verified domains
- ✅ Must be authenticated to create domains
- ✅ Domain ownership verified on creation
- ❌ Cannot access other users' domains

## Deployment Steps

### Option 1: Using Firebase CLI (Recommended)

1. **Install Firebase CLI** (if not already installed):
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Deploy rules**:
```bash
firebase deploy --only firestore:rules
```

This will read the `firestore.rules` file and update your Firestore security rules.

### Option 2: Manual Update via Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `fastsubmit-b3d16`
3. Navigate to **Firestore Database** → **Rules** tab
4. Copy the contents of `firestore.rules`
5. Paste into the editor
6. Click **Publish**

## Testing Rules

### Test in Firebase Console

1. Go to Firestore Database → Rules tab
2. Click **Rules Playground**
3. Test different scenarios:

**Test 1: User can read own domain**
- Location: `/verifiedDomains/domain123`
- Auth: Authenticated as user123
- Read: Should succeed if `userId == user123`

**Test 2: User cannot read other's domain**
- Location: `/verifiedDomains/domain456`
- Auth: Authenticated as user123
- Read: Should fail if `userId != user123`

**Test 3: Public can submit forms**
- Location: `/forms/form123/submissions/sub123`
- Auth: Unauthenticated
- Create: Should succeed

### Test in Application

1. **Create a domain** - Should succeed when authenticated
2. **List domains** - Should only show your domains
3. **Try accessing another user's domain** - Should fail
4. **Submit a form** - Should work without authentication
5. **Read submissions** - Should only work for form owner

## Verification

After deploying rules:

1. Check deployment status:
```bash
firebase firestore:rules
```

2. Verify in Firebase Console:
   - Go to Firestore Database → Rules
   - Check "Last updated" timestamp
   - Ensure no syntax errors

## Troubleshooting

### Deployment Failed
- Check syntax in `firestore.rules`
- Ensure you're logged in: `firebase login`
- Verify project ID in `.firebaserc`

### Permission Denied Errors
- Check that rules are deployed
- Verify user authentication status
- Check that `userId` field exists in documents
- Review Firebase Console logs

### Rules Not Taking Effect
- Wait 1-2 minutes for propagation
- Clear browser cache
- Check Firebase Console for rule version

## Security Best Practices

✅ **Always authenticate users** - Never allow unauthenticated writes except for form submissions
✅ **Validate ownership** - Check `userId` matches `request.auth.uid`
✅ **Use resource.data** - Access existing document data
✅ **Use request.resource.data** - Access incoming document data
✅ **Test thoroughly** - Use Rules Playground before deploying

## Deploy Both Rules and Indexes

To deploy everything at once:

```bash
firebase deploy --only firestore
```

This deploys both rules and indexes.

## Next Steps

After deploying rules:
1. Test domain verification feature
2. Monitor Firebase Console for security issues
3. Review audit logs regularly
4. Update rules as features evolve
