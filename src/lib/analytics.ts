// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'G-QH7HE7S7QV'

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date,
      config?: any
    ) => void
    dataLayer: any[]
  }
}

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Custom event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// FastSubmit specific events
export const trackFormCreated = (formType: string) => {
  event({
    action: 'form_created',
    category: 'engagement',
    label: formType,
    value: 1,
  })
}

export const trackFormSubmitted = (formId: string) => {
  event({
    action: 'form_submitted',
    category: 'conversion',
    label: formId,
    value: 1,
  })
}

export const trackUserSignup = (method: string = 'email') => {
  event({
    action: 'sign_up',
    category: 'conversion',
    label: method,
    value: 1,
  })
}

export const trackFeatureUsed = (feature: string) => {
  event({
    action: 'feature_used',
    category: 'engagement',
    label: feature,
    value: 1,
  })
}

export const trackPageView = (pageName: string) => {
  event({
    action: 'page_view',
    category: 'engagement',
    label: pageName,
  })
}

export const trackDownload = (fileName: string) => {
  event({
    action: 'file_download',
    category: 'engagement',
    label: fileName,
    value: 1,
  })
}

export const trackSearch = (searchTerm: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchTerm,
  })
}

export const trackSocialShare = (platform: string, content: string) => {
  event({
    action: 'share',
    category: 'engagement',
    label: `${platform}_${content}`,
  })
}

// E-commerce tracking (for future paid features)
export const trackPurchase = (transactionId: string, value: number, currency: string = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
    })
  }
}

// Admin panel specific tracking
export const trackAdminAction = (action: string, section: string) => {
  event({
    action: 'admin_action',
    category: 'admin',
    label: `${section}_${action}`,
  })
}