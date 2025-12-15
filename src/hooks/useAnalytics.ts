import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { pageview } from '@/lib/analytics'

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      pageview(url)
    }
  }, [pathname, searchParams])
}

// Custom hook for tracking specific events
export function useTrackEvent() {
  return {
    trackFormCreated: (formType: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_created', {
          event_category: 'engagement',
          event_label: formType,
          value: 1,
        })
      }
    },
    trackFormSubmitted: (formId: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submitted', {
          event_category: 'conversion',
          event_label: formId,
          value: 1,
        })
      }
    },
    trackUserSignup: (method: string = 'email') => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'sign_up', {
          event_category: 'conversion',
          event_label: method,
          value: 1,
        })
      }
    },
    trackFeatureUsed: (feature: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'feature_used', {
          event_category: 'engagement',
          event_label: feature,
          value: 1,
        })
      }
    }
  }
}