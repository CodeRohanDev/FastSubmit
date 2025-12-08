# Firestore Indexes Setup Guide

## Required Indexes

Your FastSubmit application requires the following Firestore indexes to function properly:

### 1. Forms Collection Index
- **Collection**: `forms`
- **Fields**: 
  - `userId` (Ascending)
  - `createdAt` (Descending)

### 2. Submissions Collection Index
- **Collection**: `submissions`
- **Fields**:
  - `submittedAt` (Descending)

---

## Option 1: Create Indexes via Firebase Console (Recommended)

### Method A: Direct Links

Click these links to create the indexes automatically:

**Forms Index:**
```
https://console.firebase.google.com/project/fastsubmit-b3d16/firestore/indexes?create_composite=Clhwcm9qZWN0cy9mYXN0c3VibWl0LWIzZDE2L2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9mb3Jtcy9pbmRleGVzL18QARoKCgZ1c2VySWQQARoNCgljcmVhdGVkQXQQAhoMCghfX25hbWVfXxAC
```

**Submissions Index:**
```
https://console.firebase.google.com/project/fastsubmit-b3d16/firestore/indexes?create_composite=CmBwcm9qZWN0cy9mYXN0c3VibWl0LWIzZDE2L2RhdGFiYXNlcy8oZGVmYXVsdCkvY29sbGVjdGlvbkdyb3Vwcy9zdWJtaXNzaW9ucy9pbmRleGVzL18QARoRCg1zdWJtaXR0ZWRBdBABGgwKCF9fbmFtZV9fEAI
```

### Method B: Manual Creation

1. Go to [Firebase Console](https://console.firebase.google.com/project/fastsubmit-b3d16/firestore/indexes)

2. Click **"Create Index"**

3. **For Forms Index:**
   - Collection ID: `forms`
   - Add field: `userId` → Ascending
   - Add field: `createdAt` → Descending
   - Query scope: Collection
   - Click **"Create"**

4. **For Submissions Index:**
   - Collection ID: `submissions`
   - Add field: `submittedAt` → Descending
   - Query scope: Collection
   - Click **"Create"**

---

## Option 2: Deploy via Firebase CLI

If you have Firebase CLI installed:

```bash
# Install Firebase CLI (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy indexes
firebase deploy --only firestore:indexes
```

The indexes are already defined in `firestore.indexes.json` in your project root.

---

## Option 3: Wait for Auto-Creation

When you run queries that require these indexes, Firestore will show an error message with a direct link to create the required index. Simply click the link in the error message.

---

## Verify Indexes

After creating the indexes:

1. Go to [Firestore Indexes](https://console.firebase.google.com/project/fastsubmit-b3d16/firestore/indexes)
2. Wait for the status to change from "Building" to "Enabled" (usually takes 1-5 minutes)
3. Once enabled, your application will work without any query errors

---

## Why These Indexes Are Needed

- **Forms Index**: Allows efficient querying of forms by user with sorting by creation date
- **Submissions Index**: Enables fast retrieval of submissions sorted by submission time

Without these indexes, Firestore queries will fail with an error message.
