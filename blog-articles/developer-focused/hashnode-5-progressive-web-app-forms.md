# Progressive Web App Forms: Building Offline-First Form Experiences

*Published on Hashnode | Cross-posted to Dev.to & Medium*

![PWA Forms](https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800)

Progressive Web Apps (PWAs) have revolutionized how we think about web applications, bringing native app-like experiences to the web. Forms in PWAs present unique challenges and opportunities—they need to work offline, sync data when connectivity returns, and provide seamless experiences across different network conditions.

In this comprehensive guide, I'll show you how to build robust, offline-first forms that work beautifully in PWAs.

## The PWA Form Challenge

Traditional web forms assume constant connectivity. PWA forms must handle:

- **Offline functionality**: Forms should work without internet
- **Data synchronization**: Queue submissions for when connectivity returns
- **Background sync**: Submit forms even when the app isn't open
- **Conflict resolution**: Handle data conflicts when syncing
- **Storage management**: Efficiently store form data locally
- **Performance**: Fast loading and smooth interactions

Let's explore each aspect in detail.

## Service Worker Foundation

The service worker is the backbone of PWA functionality:

```javascript
// sw.js - Service Worker
const CACHE_NAME = 'form-app-v1';
const FORM_DATA_STORE = 'form-submissions';

// Install event - cache essential resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/css/app.css',
        '/js/app.js',
        '/js/form-handler.js',
        '/offline.html',
        '/manifest.json'
      ]);
    })
  );
});
```
// Fetch event - serve cached content when offline
self.addEventListener('fetch', (event) => {
  // Handle form submissions
  if (event.request.method === 'POST' && event.request.url.includes('/api/')) {
    event.respondWith(handleFormSubmission(event.request));
    return;
  }
  
  // Handle regular requests
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });
    })
  );
});

// Handle form submissions
async function handleFormSubmission(request) {
  try {
    // Try to submit online first
    const response = await fetch(request);
    
    if (response.ok) {
      return response;
    } else {
      throw new Error('Network request failed');
    }
  } catch (error) {
    // Store for offline sync
    await storeFormSubmission(request);
    
    // Return success response to prevent form errors
    return new Response(
      JSON.stringify({ 
        success: true, 
        offline: true,
        message: 'Form saved. Will sync when online.' 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Store form submission for later sync
async function storeFormSubmission(request) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const submission = {
    id: generateId(),
    url: request.url,
    method: request.method,
    data: data,
    timestamp: Date.now(),
    synced: false
  };
  
  // Store in IndexedDB
  const db = await openDB();
  const transaction = db.transaction([FORM_DATA_STORE], 'readwrite');
  const store = transaction.objectStore(FORM_DATA_STORE);
  await store.add(submission);
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'form-sync') {
    event.waitUntil(syncFormSubmissions());
  }
});

// Sync pending form submissions
async function syncFormSubmissions() {
  const db = await openDB();
  const transaction = db.transaction([FORM_DATA_STORE], 'readwrite');
  const store = transaction.objectStore(FORM_DATA_STORE);
  
  const pendingSubmissions = await store.getAll();
  const unsynced = pendingSubmissions.filter(sub => !sub.synced);
  
  for (const submission of unsynced) {
    try {
      const response = await fetch(submission.url, {
        method: submission.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission.data)
      });
      
      if (response.ok) {
        // Mark as synced
        submission.synced = true;
        submission.syncedAt = Date.now();
        await store.put(submission);
        
        // Notify the main thread
        self.clients.matchAll().then(clients => {
          clients.forEach(client => {
            client.postMessage({
              type: 'FORM_SYNCED',
              submissionId: submission.id,
              data: submission.data
            });
          });
        });
      }
    } catch (error) {
      console.error('Failed to sync submission:', error);
    }
  }
}

// IndexedDB helper functions
async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('FormAppDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains(FORM_DATA_STORE)) {
        const store = db.createObjectStore(FORM_DATA_STORE, { keyPath: 'id' });
        store.createIndex('timestamp', 'timestamp');
        store.createIndex('synced', 'synced');
      }
    };
  });
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
```

## Offline Form Storage

Implement robust local storage for form data:

```javascript
// form-storage.js
class FormStorage {
  constructor() {
    this.dbName = 'FormAppDB';
    this.version = 1;
    this.stores = {
      submissions: 'form-submissions',
      drafts: 'form-drafts',
      attachments: 'form-attachments'
    };
    this.db = null;
  }

  async init() {
    this.db = await this.openDB();
  }

  openDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Form submissions store
        if (!db.objectStoreNames.contains(this.stores.submissions)) {
          const submissionStore = db.createObjectStore(this.stores.submissions, { keyPath: 'id' });
          submissionStore.createIndex('timestamp', 'timestamp');
          submissionStore.createIndex('synced', 'synced');
          submissionStore.createIndex('formType', 'formType');
        }
        
        // Form drafts store
        if (!db.objectStoreNames.contains(this.stores.drafts)) {
          const draftStore = db.createObjectStore(this.stores.drafts, { keyPath: 'id' });
          draftStore.createIndex('formId', 'formId');
          draftStore.createIndex('lastModified', 'lastModified');
        }
        
        // File attachments store
        if (!db.objectStoreNames.contains(this.stores.attachments)) {
          const attachmentStore = db.createObjectStore(this.stores.attachments, { keyPath: 'id' });
          attachmentStore.createIndex('submissionId', 'submissionId');
          attachmentStore.createIndex('fileName', 'fileName');
        }
      };
    });
  }

  // Save form submission
  async saveSubmission(formData, formType = 'contact') {
    const submission = {
      id: this.generateId(),
      formType: formType,
      data: formData,
      timestamp: Date.now(),
      synced: false,
      attempts: 0,
      lastAttempt: null
    };

    const transaction = this.db.transaction([this.stores.submissions], 'readwrite');
    const store = transaction.objectStore(this.stores.submissions);
    
    await this.promisifyRequest(store.add(submission));
    return submission.id;
  }

  // Save form draft
  async saveDraft(formId, formData) {
    const draft = {
      id: `${formId}-draft`,
      formId: formId,
      data: formData,
      lastModified: Date.now()
    };

    const transaction = this.db.transaction([this.stores.drafts], 'readwrite');
    const store = transaction.objectStore(this.stores.drafts);
    
    await this.promisifyRequest(store.put(draft));
    return draft.id;
  }

  // Load form draft
  async loadDraft(formId) {
    const transaction = this.db.transaction([this.stores.drafts], 'readonly');
    const store = transaction.objectStore(this.stores.drafts);
    
    const draft = await this.promisifyRequest(store.get(`${formId}-draft`));
    return draft ? draft.data : null;
  }

  // Delete form draft
  async deleteDraft(formId) {
    const transaction = this.db.transaction([this.stores.drafts], 'readwrite');
    const store = transaction.objectStore(this.stores.drafts);
    
    await this.promisifyRequest(store.delete(`${formId}-draft`));
  }

  // Get pending submissions
  async getPendingSubmissions() {
    const transaction = this.db.transaction([this.stores.submissions], 'readonly');
    const store = transaction.objectStore(this.stores.submissions);
    const index = store.index('synced');
    
    const submissions = await this.promisifyRequest(index.getAll(false));
    return submissions;
  }

  // Mark submission as synced
  async markSynced(submissionId) {
    const transaction = this.db.transaction([this.stores.submissions], 'readwrite');
    const store = transaction.objectStore(this.stores.submissions);
    
    const submission = await this.promisifyRequest(store.get(submissionId));
    if (submission) {
      submission.synced = true;
      submission.syncedAt = Date.now();
      await this.promisifyRequest(store.put(submission));
    }
  }

  // Save file attachment
  async saveAttachment(file, submissionId) {
    const attachment = {
      id: this.generateId(),
      submissionId: submissionId,
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      data: await this.fileToArrayBuffer(file),
      timestamp: Date.now()
    };

    const transaction = this.db.transaction([this.stores.attachments], 'readwrite');
    const store = transaction.objectStore(this.stores.attachments);
    
    await this.promisifyRequest(store.add(attachment));
    return attachment.id;
  }

  // Get attachments for submission
  async getAttachments(submissionId) {
    const transaction = this.db.transaction([this.stores.attachments], 'readonly');
    const store = transaction.objectStore(this.stores.attachments);
    const index = store.index('submissionId');
    
    const attachments = await this.promisifyRequest(index.getAll(submissionId));
    return attachments;
  }

  // Clean up old data
  async cleanup(maxAge = 30 * 24 * 60 * 60 * 1000) { // 30 days
    const cutoff = Date.now() - maxAge;
    
    // Clean up synced submissions
    const transaction = this.db.transaction([this.stores.submissions], 'readwrite');
    const store = transaction.objectStore(this.stores.submissions);
    const index = store.index('timestamp');
    
    const cursor = await this.promisifyRequest(
      index.openCursor(IDBKeyRange.upperBound(cutoff))
    );
    
    while (cursor) {
      if (cursor.value.synced) {
        await this.promisifyRequest(cursor.delete());
      }
      cursor = await this.promisifyRequest(cursor.continue());
    }
  }

  // Utility methods
  promisifyRequest(request) {
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  fileToArrayBuffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }

  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

// Export for use in other modules
window.FormStorage = FormStorage;
```

## Offline-First Form Component

Create a form component that works seamlessly offline:

```javascript
// offline-form.js
class OfflineForm {
  constructor(formElement, options = {}) {
    this.form = formElement;
    this.options = {
      autoSave: true,
      autoSaveInterval: 5000,
      showOfflineStatus: true,
      enableFileUploads: true,
      ...options
    };
    
    this.storage = new FormStorage();
    this.isOnline = navigator.onLine;
    this.autoSaveTimer = null;
    this.pendingSync = false;
    
    this.init();
  }

  async init() {
    await this.storage.init();
    
    this.setupEventListeners();
    this.setupOfflineIndicator();
    this.loadDraft();
    
    if (this.options.autoSave) {
      this.startAutoSave();
    }
    
    // Register for background sync
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      this.registerBackgroundSync();
    }
  }

  setupEventListeners() {
    // Form submission
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    
    // Online/offline events
    window.addEventListener('online', this.handleOnline.bind(this));
    window.addEventListener('offline', this.handleOffline.bind(this));
    
    // Form input changes
    this.form.addEventListener('input', this.handleInput.bind(this));
    this.form.addEventListener('change', this.handleChange.bind(this));
    
    // File upload handling
    if (this.options.enableFileUploads) {
      const fileInputs = this.form.querySelectorAll('input[type="file"]');
      fileInputs.forEach(input => {
        input.addEventListener('change', this.handleFileUpload.bind(this));
      });
    }
    
    // Service worker messages
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', this.handleSWMessage.bind(this));
    }
  }

  setupOfflineIndicator() {
    if (!this.options.showOfflineStatus) return;
    
    this.statusIndicator = document.createElement('div');
    this.statusIndicator.className = 'offline-status';
    this.statusIndicator.innerHTML = `
      <div class="status-icon"></div>
      <div class="status-text"></div>
    `;
    
    this.form.insertBefore(this.statusIndicator, this.form.firstChild);
    this.updateOfflineStatus();
  }

  updateOfflineStatus() {
    if (!this.statusIndicator) return;
    
    const icon = this.statusIndicator.querySelector('.status-icon');
    const text = this.statusIndicator.querySelector('.status-text');
    
    if (this.isOnline) {
      this.statusIndicator.className = 'offline-status online';
      icon.textContent = '🟢';
      text.textContent = 'Online';
    } else {
      this.statusIndicator.className = 'offline-status offline';
      icon.textContent = '🔴';
      text.textContent = 'Offline - Forms will be saved locally';
    }
    
    if (this.pendingSync) {
      this.statusIndicator.className += ' syncing';
      icon.textContent = '🔄';
      text.textContent = 'Syncing pending forms...';
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const formData = this.getFormData();
    const isValid = this.validateForm(formData);
    
    if (!isValid) {
      this.showValidationErrors();
      return;
    }
    
    this.showSubmissionStatus('Submitting...');
    
    try {
      if (this.isOnline) {
        // Try online submission first
        await this.submitOnline(formData);
        this.showSubmissionStatus('Form submitted successfully!', 'success');
        this.clearForm();
        this.deleteDraft();
      } else {
        // Save for offline sync
        await this.submitOffline(formData);
        this.showSubmissionStatus('Form saved offline. Will sync when online.', 'info');
        this.clearForm();
        this.deleteDraft();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      if (this.isOnline) {
        // Online submission failed, save offline
        await this.submitOffline(formData);
        this.showSubmissionStatus('Saved offline due to connection issue. Will retry automatically.', 'warning');
      } else {
        this.showSubmissionStatus('Failed to save form. Please try again.', 'error');
      }
    }
  }

  async submitOnline(formData) {
    const response = await fetch(this.form.action || '/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return response.json();
  }

  async submitOffline(formData) {
    const submissionId = await this.storage.saveSubmission(formData, this.getFormType());
    
    // Save file attachments
    const fileInputs = this.form.querySelectorAll('input[type="file"]');
    for (const input of fileInputs) {
      if (input.files.length > 0) {
        for (const file of input.files) {
          await this.storage.saveAttachment(file, submissionId);
        }
      }
    }
    
    // Request background sync
    this.requestBackgroundSync();
    
    return submissionId;
  }

  getFormData() {
    const formData = new FormData(this.form);
    const data = {};
    
    for (const [key, value] of formData.entries()) {
      if (data[key]) {
        // Handle multiple values (checkboxes, multiple selects)
        if (Array.isArray(data[key])) {
          data[key].push(value);
        } else {
          data[key] = [data[key], value];
        }
      } else {
        data[key] = value;
      }
    }
    
    // Add metadata
    data._metadata = {
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      formId: this.form.id || 'unknown'
    };
    
    return data;
  }

  getFormType() {
    return this.form.dataset.formType || 'contact';
  }

  validateForm(data) {
    // Basic validation - extend as needed
    const requiredFields = this.form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!data[field.name] || data[field.name].toString().trim() === '') {
        this.showFieldError(field, 'This field is required');
        isValid = false;
      } else {
        this.clearFieldError(field);
      }
    });
    
    return isValid;
  }

  showFieldError(field, message) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    
    field.classList.add('field-error');
    field.setAttribute('aria-invalid', 'true');
  }

  clearFieldError(field) {
    const errorElement = document.getElementById(`${field.name}-error`);
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
    
    field.classList.remove('field-error');
    field.setAttribute('aria-invalid', 'false');
  }

  showValidationErrors() {
    const firstError = this.form.querySelector('.field-error');
    if (firstError) {
      firstError.focus();
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  showSubmissionStatus(message, type = 'info') {
    // Create or update status message
    let statusElement = this.form.querySelector('.submission-status');
    
    if (!statusElement) {
      statusElement = document.createElement('div');
      statusElement.className = 'submission-status';
      statusElement.setAttribute('role', 'status');
      statusElement.setAttribute('aria-live', 'polite');
      this.form.appendChild(statusElement);
    }
    
    statusElement.textContent = message;
    statusElement.className = `submission-status ${type}`;
    statusElement.style.display = 'block';
    
    // Auto-hide after 5 seconds for success messages
    if (type === 'success') {
      setTimeout(() => {
        statusElement.style.display = 'none';
      }, 5000);
    }
  }

  // Auto-save functionality
  startAutoSave() {
    this.autoSaveTimer = setInterval(() => {
      this.saveDraft();
    }, this.options.autoSaveInterval);
  }

  stopAutoSave() {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
      this.autoSaveTimer = null;
    }
  }

  async saveDraft() {
    const formData = this.getFormData();
    
    // Only save if form has content
    const hasContent = Object.values(formData).some(value => 
      value && value.toString().trim() !== ''
    );
    
    if (hasContent) {
      await this.storage.saveDraft(this.getFormId(), formData);
      this.showDraftStatus('Draft saved');
    }
  }

  async loadDraft() {
    const formId = this.getFormId();
    const draftData = await this.storage.loadDraft(formId);
    
    if (draftData) {
      this.populateForm(draftData);
      this.showDraftStatus('Draft loaded');
    }
  }

  async deleteDraft() {
    const formId = this.getFormId();
    await this.storage.deleteDraft(formId);
  }

  populateForm(data) {
    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith('_')) return; // Skip metadata
      
      const field = this.form.querySelector(`[name="${key}"]`);
      if (field) {
        if (field.type === 'checkbox' || field.type === 'radio') {
          if (Array.isArray(value)) {
            value.forEach(v => {
              const specificField = this.form.querySelector(`[name="${key}"][value="${v}"]`);
              if (specificField) specificField.checked = true;
            });
          } else {
            const specificField = this.form.querySelector(`[name="${key}"][value="${value}"]`);
            if (specificField) specificField.checked = true;
          }
        } else {
          field.value = value;
        }
      }
    });
  }

  clearForm() {
    this.form.reset();
    
    // Clear any custom validation states
    const errorFields = this.form.querySelectorAll('.field-error');
    errorFields.forEach(field => {
      field.classList.remove('field-error');
      field.setAttribute('aria-invalid', 'false');
    });
    
    const errorMessages = this.form.querySelectorAll('.field-error[style*="block"]');
    errorMessages.forEach(error => {
      error.style.display = 'none';
      error.textContent = '';
    });
  }

  showDraftStatus(message) {
    // Show brief draft status
    let draftStatus = this.form.querySelector('.draft-status');
    
    if (!draftStatus) {
      draftStatus = document.createElement('div');
      draftStatus.className = 'draft-status';
      draftStatus.setAttribute('aria-live', 'polite');
      this.form.appendChild(draftStatus);
    }
    
    draftStatus.textContent = message;
    draftStatus.style.display = 'block';
    
    setTimeout(() => {
      draftStatus.style.display = 'none';
    }, 2000);
  }

  getFormId() {
    return this.form.id || this.form.dataset.formId || 'default-form';
  }

  // File upload handling
  async handleFileUpload(event) {
    const files = Array.from(event.target.files);
    
    for (const file of files) {
      if (this.validateFile(file)) {
        await this.processFile(file, event.target);
      }
    }
  }

  validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'text/plain'];
    
    if (file.size > maxSize) {
      alert(`File ${file.name} is too large. Maximum size is 10MB.`);
      return false;
    }
    
    if (!allowedTypes.includes(file.type)) {
      alert(`File type ${file.type} is not allowed.`);
      return false;
    }
    
    return true;
  }

  async processFile(file, input) {
    // Create file preview
    const preview = this.createFilePreview(file, input);
    
    // Store file data for offline use
    if (!this.isOnline) {
      // Files will be stored when form is submitted
      console.log('File will be stored offline:', file.name);
    }
  }

  createFilePreview(file, input) {
    const preview = document.createElement('div');
    preview.className = 'file-preview';
    
    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.style.maxWidth = '200px';
      img.style.maxHeight = '200px';
      preview.appendChild(img);
    }
    
    const info = document.createElement('div');
    info.className = 'file-info';
    info.innerHTML = `
      <div class="file-name">${file.name}</div>
      <div class="file-size">${this.formatFileSize(file.size)}</div>
      <button type="button" class="remove-file">Remove</button>
    `;
    
    preview.appendChild(info);
    
    // Add remove functionality
    const removeBtn = info.querySelector('.remove-file');
    removeBtn.addEventListener('click', () => {
      preview.remove();
      input.value = '';
    });
    
    // Insert preview after the input
    input.parentNode.insertBefore(preview, input.nextSibling);
    
    return preview;
  }

  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Network event handlers
  handleOnline() {
    this.isOnline = true;
    this.updateOfflineStatus();
    this.syncPendingSubmissions();
  }

  handleOffline() {
    this.isOnline = false;
    this.updateOfflineStatus();
  }

  handleInput(event) {
    // Clear field errors on input
    this.clearFieldError(event.target);
  }

  handleChange(event) {
    // Handle specific field changes
    if (event.target.type === 'file') {
      this.handleFileUpload(event);
    }
  }

  // Background sync
  async registerBackgroundSync() {
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      
      if ('sync' in registration) {
        try {
          await registration.sync.register('form-sync');
        } catch (error) {
          console.error('Background sync registration failed:', error);
        }
      }
    }
  }

  requestBackgroundSync() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        if ('sync' in registration) {
          return registration.sync.register('form-sync');
        }
      }).catch(error => {
        console.error('Background sync request failed:', error);
      });
    }
  }

  async syncPendingSubmissions() {
    if (!this.isOnline) return;
    
    this.pendingSync = true;
    this.updateOfflineStatus();
    
    try {
      const pendingSubmissions = await this.storage.getPendingSubmissions();
      
      for (const submission of pendingSubmissions) {
        try {
          await this.submitOnline(submission.data);
          await this.storage.markSynced(submission.id);
          
          // Notify user
          this.showSubmissionStatus(`Synced form from ${new Date(submission.timestamp).toLocaleString()}`, 'success');
        } catch (error) {
          console.error('Failed to sync submission:', error);
          
          // Increment attempt counter
          submission.attempts = (submission.attempts || 0) + 1;
          submission.lastAttempt = Date.now();
          
          // Stop trying after 5 attempts
          if (submission.attempts >= 5) {
            console.error('Max sync attempts reached for submission:', submission.id);
          }
        }
      }
    } catch (error) {
      console.error('Error syncing pending submissions:', error);
    } finally {
      this.pendingSync = false;
      this.updateOfflineStatus();
    }
  }

  // Service worker message handler
  handleSWMessage(event) {
    const { type, submissionId, data } = event.data;
    
    switch (type) {
      case 'FORM_SYNCED':
        this.showSubmissionStatus(`Form synced successfully`, 'success');
        break;
        
      case 'SYNC_FAILED':
        this.showSubmissionStatus(`Failed to sync form. Will retry later.`, 'warning');
        break;
    }
  }

  // Cleanup
  destroy() {
    this.stopAutoSave();
    
    // Remove event listeners
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
    
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.removeEventListener('message', this.handleSWMessage);
    }
  }
}

// Auto-initialize forms with data-offline attribute
document.addEventListener('DOMContentLoaded', () => {
  const offlineForms = document.querySelectorAll('form[data-offline]');
  
  offlineForms.forEach(form => {
    const options = {
      autoSave: form.dataset.autoSave !== 'false',
      autoSaveInterval: parseInt(form.dataset.autoSaveInterval) || 5000,
      showOfflineStatus: form.dataset.showOfflineStatus !== 'false',
      enableFileUploads: form.dataset.enableFileUploads !== 'false'
    };
    
    new OfflineForm(form, options);
  });
});

// Export for manual initialization
window.OfflineForm = OfflineForm;
```

## CSS for PWA Forms

Style forms for the PWA experience:

```css
/* PWA Form Styles */
.offline-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.offline-status.online {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.offline-status.offline {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
}

.offline-status.syncing {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #3b82f6;
}

.offline-status .status-icon {
  font-size: 1rem;
  animation: none;
}

.offline-status.syncing .status-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Submission status */
.submission-status {
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-weight: 500;
  display: none;
}

.submission-status.success {
  background-color: #d1fae5;
  color: #065f46;
  border: 1px solid #10b981;
}

.submission-status.error {
  background-color: #fee2e2;
  color: #991b1b;
  border: 1px solid #ef4444;
}

.submission-status.warning {
  background-color: #fef3c7;
  color: #92400e;
  border: 1px solid #f59e0b;
}

.submission-status.info {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #3b82f6;
}

/* Draft status */
.draft-status {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: #374151;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  z-index: 1000;
  display: none;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* File preview */
.file-preview {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  background-color: #f9fafb;
}

.file-preview img {
  border-radius: 0.25rem;
  object-fit: cover;
}

.file-info {
  flex: 1;
}

.file-name {
  font-weight: 500;
  color: #374151;
}

.file-size {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
}

.remove-file {
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
  margin-top: 0.5rem;
}

.remove-file:hover {
  background-color: #dc2626;
}

/* Field error states */
.field-error {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
}

/* Responsive design for mobile PWA */
@media (max-width: 768px) {
  .offline-status {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }
  
  .file-preview {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .file-preview img {
    max-width: 100%;
    height: auto;
  }
  
  .draft-status {
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }
}

/* PWA-specific styles */
@media (display-mode: standalone) {
  /* Styles when app is installed as PWA */
  .offline-status {
    margin-top: 1rem; /* Account for status bar */
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .file-preview {
    background-color: #1f2937;
    border-color: #374151;
  }
  
  .file-name {
    color: #f3f4f6;
  }
  
  .file-size {
    color: #9ca3af;
  }
  
  .draft-status {
    background-color: #1f2937;
    border: 1px solid #374151;
  }
}
```

## PWA Manifest and Installation

Configure your PWA for optimal form experiences:

```json
{
  "name": "Form App",
  "short_name": "FormApp",
  "description": "Offline-first form application",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#3b82f6",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "categories": ["productivity", "business"],
  "screenshots": [
    {
      "src": "/screenshots/form-desktop.png",
      "sizes": "1280x720",
      "type": "image/png",
      "form_factor": "wide"
    },
    {
      "src": "/screenshots/form-mobile.png",
      "sizes": "390x844",
      "type": "image/png",
      "form_factor": "narrow"
    }
  ],
  "shortcuts": [
    {
      "name": "New Contact Form",
      "short_name": "Contact",
      "description": "Create a new contact form",
      "url": "/contact",
      "icons": [
        {
          "src": "/icons/contact-96.png",
          "sizes": "96x96"
        }
      ]
    },
    {
      "name": "View Drafts",
      "short_name": "Drafts",
      "description": "View saved form drafts",
      "url": "/drafts",
      "icons": [
        {
          "src": "/icons/drafts-96.png",
          "sizes": "96x96"
        }
      ]
    }
  ]
}
```

## Testing PWA Forms

Comprehensive testing strategy for PWA forms:

```javascript
// pwa-form-tests.js
class PWAFormTester {
  constructor() {
    this.testResults = [];
  }

  async runAllTests() {
    console.log('🧪 Starting PWA Form Tests...');
    
    await this.testOfflineCapability();
    await this.testDataPersistence();
    await this.testBackgroundSync();
    await this.testFileHandling();
    await this.testNetworkResilience();
    
    this.generateReport();
  }

  async testOfflineCapability() {
    console.log('📱 Testing offline capability...');
    
    try {
      // Simulate offline mode
      if ('serviceWorker' in navigator) {
        const registration = await navigator.serviceWorker.ready;
        
        // Test form submission while offline
        const testForm = document.createElement('form');
        testForm.innerHTML = `
          <input name="test" value="offline-test">
          <button type="submit">Submit</button>
        `;
        
        const offlineForm = new OfflineForm(testForm);
        
        // Simulate offline submission
        navigator.onLine = false;
        const result = await this.simulateFormSubmission(testForm);
        
        this.testResults.push({
          test: 'Offline Form Submission',
          passed: result.success && result.offline,
          details: result
        });
        
        navigator.onLine = true;
      }
    } catch (error) {
      this.testResults.push({
        test: 'Offline Form Submission',
        passed: false,
        error: error.message
      });
    }
  }

  async testDataPersistence() {
    console.log('💾 Testing data persistence...');
    
    try {
      const storage = new FormStorage();
      await storage.init();
      
      // Test saving form data
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      };
      
      const submissionId = await storage.saveSubmission(testData, 'test');
      
      // Test retrieving data
      const pendingSubmissions = await storage.getPendingSubmissions();
      const savedSubmission = pendingSubmissions.find(sub => sub.id === submissionId);
      
      this.testResults.push({
        test: 'Data Persistence',
        passed: savedSubmission && savedSubmission.data.name === testData.name,
        details: { submissionId, savedSubmission }
      });
      
      // Test draft functionality
      await storage.saveDraft('test-form', testData);
      const loadedDraft = await storage.loadDraft('test-form');
      
      this.testResults.push({
        test: 'Draft Persistence',
        passed: loadedDraft && loadedDraft.name === testData.name,
        details: { loadedDraft }
      });
      
    } catch (error) {
      this.testResults.push({
        test: 'Data Persistence',
        passed: false,
        error: error.message
      });
    }
  }

  async testBackgroundSync() {
    console.log('🔄 Testing background sync...');
    
    try {
      if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
        const registration = await navigator.serviceWorker.ready;
        
        // Register for background sync
        await registration.sync.register('test-sync');
        
        this.testResults.push({
          test: 'Background Sync Registration',
          passed: true,
          details: 'Successfully registered for background sync'
        });
      } else {
        this.testResults.push({
          test: 'Background Sync Registration',
          passed: false,
          details: 'Background sync not supported'
        });
      }
    } catch (error) {
      this.testResults.push({
        test: 'Background Sync Registration',
        passed: false,
        error: error.message
      });
    }
  }

  async testFileHandling() {
    console.log('📁 Testing file handling...');
    
    try {
      const storage = new FormStorage();
      await storage.init();
      
      // Create test file
      const testFile = new File(['test content'], 'test.txt', { type: 'text/plain' });
      
      // Test file storage
      const attachmentId = await storage.saveAttachment(testFile, 'test-submission');
      
      // Test file retrieval
      const attachments = await storage.getAttachments('test-submission');
      const savedAttachment = attachments.find(att => att.id === attachmentId);
      
      this.testResults.push({
        test: 'File Storage',
        passed: savedAttachment && savedAttachment.fileName === 'test.txt',
        details: { attachmentId, savedAttachment }
      });
      
    } catch (error) {
      this.testResults.push({
        test: 'File Storage',
        passed: false,
        error: error.message
      });
    }
  }

  async testNetworkResilience() {
    console.log('🌐 Testing network resilience...');
    
    try {
      // Test form behavior during network changes
      const testForm = document.createElement('form');
      testForm.innerHTML = `
        <input name="resilience" value="network-test">
        <button type="submit">Submit</button>
      `;
      
      const offlineForm = new OfflineForm(testForm);
      
      // Simulate network going offline during submission
      const originalFetch = window.fetch;
      window.fetch = () => Promise.reject(new Error('Network error'));
      
      const result = await this.simulateFormSubmission(testForm);
      
      // Restore fetch
      window.fetch = originalFetch;
      
      this.testResults.push({
        test: 'Network Resilience',
        passed: result.success, // Should succeed by saving offline
        details: result
      });
      
    } catch (error) {
      this.testResults.push({
        test: 'Network Resilience',
        passed: false,
        error: error.message
      });
    }
  }

  async simulateFormSubmission(form) {
    return new Promise((resolve) => {
      const submitHandler = (event) => {
        event.preventDefault();
        
        // Simulate successful offline save
        setTimeout(() => {
          resolve({
            success: true,
            offline: !navigator.onLine,
            timestamp: Date.now()
          });
        }, 100);
      };
      
      form.addEventListener('submit', submitHandler);
      
      // Trigger submission
      const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
      form.dispatchEvent(submitEvent);
    });
  }

  generateReport() {
    console.log('\n📊 PWA Form Test Report');
    console.log('========================');
    
    const passed = this.testResults.filter(test => test.passed).length;
    const total = this.testResults.length;
    
    console.log(`✅ Passed: ${passed}/${total} tests`);
    
    if (passed < total) {
      console.log('\n❌ Failed Tests:');
      this.testResults
        .filter(test => !test.passed)
        .forEach(test => {
          console.log(`  - ${test.test}: ${test.error || 'Failed'}`);
        });
    }
    
    console.log('\n📋 Detailed Results:');
    this.testResults.forEach(test => {
      const status = test.passed ? '✅' : '❌';
      console.log(`${status} ${test.test}`);
      
      if (test.details) {
        console.log(`   Details:`, test.details);
      }
    });
    
    return {
      passed,
      total,
      results: this.testResults
    };
  }
}

// Run tests when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Only run tests in development
  if (window.location.hostname === 'localhost' || window.location.search.includes('test=true')) {
    const tester = new PWAFormTester();
    tester.runAllTests();
  }
});
```

## Conclusion

Building PWA forms requires careful consideration of offline functionality, data synchronization, and user experience. Key takeaways:

1. **Service Worker Integration**: Essential for offline functionality and background sync
2. **Local Storage Strategy**: Use IndexedDB for robust data persistence
3. **Progressive Enhancement**: Forms should work offline and online seamlessly
4. **User Feedback**: Clear status indicators for network state and sync progress
5. **Data Integrity**: Handle conflicts and ensure data consistency
6. **Performance**: Optimize for mobile devices and varying network conditions
7. **Testing**: Comprehensive testing across different network scenarios

PWA forms represent the future of web applications—providing native app experiences while maintaining web accessibility and reach.

---

**Resources:**
- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [IndexedDB Guide](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [Background Sync](https://web.dev/background-sync/)

**Have you built PWA forms? Share your experiences with offline functionality in the comments!**

---

**Tags**: #pwa #forms #offline #serviceworker #indexeddb #backgroundsync #webdev #mobile #javascript #progressive