# Deploy Firestore Indexes

## Indexes Required

The following Firestore indexes are required for the application to work properly:

1. **Forms collection** - Query forms by userId and sort by createdAt
2. **VerifiedDomains collection** - Query domains by userId and verified status
3. **VerifiedDomains collection** - Query domains by userId and domain name

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

3. **Deploy indexes**:
```bash
firebase deploy --only firestore:indexes
```

This will read the `firestore.indexes.json` file and create all required indexes.

### Option 2: Manual Creation via Firebase Console

If you prefer to create indexes manually:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `fastsubmit-b3d16`
3. Navigate to **Firestore Database** → **Indexes** tab
4. Click **Create Index** for each of the following:

#### Index 1: Forms by User and Date
- **Collection ID**: `forms`
- **Fields to index**:
  - `userId` - Ascending
  - `createdAt` - Descending
- **Query scope**: Collection

#### Index 2: Verified Domains by User and Status
- **Collection ID**: `verifiedDomains`
- **Fields to index**:
  - `userId` - Ascending
  - `verified` - Ascending
- **Query scope**: Collection

#### Index 3: Verified Domains by User and Domain
- **Collection ID**: `verifiedDomains`
- **Fields to index**:
  - `userId` - Ascending
  - `domain` - Ascending
- **Query scope**: Collection

### Option 3: Wait for Auto-Creation

When you first run queries that need these indexes, Firestore will show an error with a link to auto-create the index. Click the link and wait for the index to build (usually takes a few minutes).

## Verification

After deploying indexes, verify they're active:

1. Go to Firebase Console → Firestore Database → Indexes
2. Check that all indexes show status: **Enabled**
3. If status is "Building", wait a few minutes

## Index Status

You can check index status with:
```bash
firebase firestore:indexes
```

## Troubleshooting

### Index Build Failed
- Check that field names match exactly (case-sensitive)
- Ensure collection names are correct
- Try deleting and recreating the index

### Query Still Fails
- Wait for index to finish building (can take 5-10 minutes)
- Clear browser cache and retry
- Check Firebase Console for index status

### Permission Denied
- Ensure you're logged in: `firebase login`
- Check you have admin access to the project
- Verify project ID is correct in `.firebaserc`

## Current Index Configuration

The `firestore.indexes.json` file contains:

```json
{
  "indexes": [
    {
      "collectionGroup": "forms",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "userId", "order": "ASCENDING" },
        { "fieldPath": "createdAt", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "verifiedDomains",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "userId", "order": "ASCENDING" },
        { "fieldPath": "verified", "order": "ASCENDING" }
      ]
    },
    {
      "collectionGroup": "verifiedDomains",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "userId", "order": "ASCENDING" },
        { "fieldPath": "domain", "order": "ASCENDING" }
      ]
    }
  ],
  "fieldOverrides": []
}
```

## Next Steps

After deploying indexes:
1. Deploy Firestore security rules: `firebase deploy --only firestore:rules`
2. Test domain verification feature
3. Monitor index usage in Firebase Console
