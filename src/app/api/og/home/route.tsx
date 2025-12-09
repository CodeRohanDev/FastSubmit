import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #e5e7eb 2%, transparent 0%), radial-gradient(circle at 75px 75px, #e5e7eb 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#111827',
              letterSpacing: '-2px',
              marginBottom: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            fastsubmit
            <span style={{ color: '#4f46e5', marginLeft: '4px' }}>.</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 600,
              color: '#111827',
              textAlign: 'center',
              marginBottom: '24px',
              lineHeight: 1.2,
              maxWidth: '900px',
              display: 'flex',
            }}
          >
            Forms for every platform
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '28px',
              color: '#6b7280',
              textAlign: 'center',
              marginBottom: '48px',
              maxWidth: '800px',
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            Create beautiful forms for websites, social media, and online sharing. Free forever.
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '32px',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { icon: '🌐', text: 'Website Embeds' },
              { icon: '📱', text: 'Social Media' },
              { icon: '🔗', text: 'Shareable Links' },
              { icon: '📊', text: 'Analytics' },
            ].map((feature, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px 32px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '2px solid #e5e7eb',
                }}
              >
                <span style={{ fontSize: '32px' }}>{feature.icon}</span>
                <span
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#111827',
                  }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#111827',
              }}
            >
              Free Forever
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#111827',
              }}
            >
              No Coding Required
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
