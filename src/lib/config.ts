// FastSubmit Configuration
// This is the production API base URL - always use this for API endpoints
export const API_BASE_URL = 'https://fastsubmit.hostspica.com'

// API version
export const API_VERSION = 'v1'

// Full API URL
export const API_URL = `${API_BASE_URL}/api/${API_VERSION}`

// Submit endpoint base
export const SUBMIT_URL = `${API_BASE_URL}/api/submit`

// Helper to get form submit endpoint
export function getSubmitEndpoint(formId: string): string {
  return `${SUBMIT_URL}/${formId}`
}

// Helper to get API endpoint
export function getApiEndpoint(path: string): string {
  return `${API_URL}${path.startsWith('/') ? path : `/${path}`}`
}
