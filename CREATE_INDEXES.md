# 🔥 Create Firestore Index - Quick Setup

## ✅ Only ONE Index Needed

You only need to create the **Forms** composite index. The submissions index is not needed because Firestore automatically indexes single fields.

---

## 📋 Create the Forms Index

### Option 1: Via Firebase Console (Easiest)

1. **Go to**: https://console.firebase.google.com/project/fastsubmit-b3d16/firestore/indexes

2. **Click "Create Index"**

3. **Fill in the form:**
   - **Collection ID**: `forms`
   - **Fields to index**:
     - Field 1: `userId` → **Ascending**
     - Field 2: `createdAt` → **Descending**
   - **Query scope**: `Collection`

4. **Click "Create"**

5. **Wait 1-5 minutes** for the index to build (status will change from "Building" to "Enabled")

---

## Option 2: Via Firebase CLI

If you have Firebase CLI installed:

```bash
# Install Firebase CLI (if not installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Deploy the index
firebase deploy --only firestore:indexes
```

---

## ✨ That's It!

Once the index shows **"Enabled"** status, your FastSubmit dashboard will work perfectly!

**Note**: You do NOT need to create a submissions index - single field indexes are automatic in Firestore.
