import { Metadata } from 'next'

interface FormData {
  id: string
  name: string
  fields: any[]
  settings?: {
    description?: string
  }
}

async function getFormData(formId: string): Promise<FormData | null> {
  try {
    // Use the public base URL for metadata generation
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fastsubmit.hostspica.com'
    
    const response = await fetch(`${baseUrl}/api/public/forms/${formId}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    if (!response.ok) {
      console.error(`Failed to fetch form ${formId}: ${response.status}`)
      return null
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching form for metadata:', error)
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { formId: string }
}): Promise<Metadata> {
  const form = await getFormData(params.formId)
  
  if (!form) {
    return {
      title: 'Form Not Found | FastSubmit',
      description: 'This form is not available.',
    }
  }

  const formName = form.name || 'Untitled Form'
  const fieldCount = form.fields?.length || 0
  const description = form.settings?.description || `Fill out this form - ${fieldCount} ${fieldCount === 1 ? 'field' : 'fields'} • Quick & easy`
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fastsubmit.hostspica.com'
  const formUrl = `${baseUrl}/f/${params.formId}`
  const ogImageUrl = `${baseUrl}/api/og?formName=${encodeURIComponent(formName)}&fieldCount=${fieldCount}&description=${encodeURIComponent(description.slice(0, 100))}`

  return {
    metadataBase: new URL(baseUrl),
    title: formName,
    description: description,
    openGraph: {
      title: formName,
      description: description,
      url: formUrl,
      siteName: 'FastSubmit',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: formName,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: formName,
      description: description,
      images: [ogImageUrl],
      creator: '@fastsubmit',
      site: '@fastsubmit',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: formUrl,
    },
  }
}

export default async function FormLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { formId: string }
}) {
  const form = await getFormData(params.formId)
  
  if (!form) {
    return <>{children}</>
  }

  const formName = form.name || 'Untitled Form'
  const fieldCount = form.fields?.length || 0
  const description = form.settings?.description || `Fill out this form - ${fieldCount} ${fieldCount === 1 ? 'field' : 'fields'} • Quick & easy`
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fastsubmit.hostspica.com'
  const ogImageUrl = `${baseUrl}/api/og?formName=${encodeURIComponent(formName)}&fieldCount=${fieldCount}&description=${encodeURIComponent(description.slice(0, 100))}`
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: formName,
    description: description,
    url: `${baseUrl}/f/${params.formId}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'FastSubmit',
      url: baseUrl,
    },
    potentialAction: {
      '@type': 'InteractAction',
      target: `${baseUrl}/f/${params.formId}`,
      name: 'Fill out form',
    },
  }

  return (
    <>
      <head>
        <meta property="og:title" content={formName} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/f/${params.formId}`} />
        <meta property="og:site_name" content="FastSubmit" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formName} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:creator" content="@fastsubmit" />
      </head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
