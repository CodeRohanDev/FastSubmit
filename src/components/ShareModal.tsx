'use client'
import { useState, useEffect, useRef } from 'react'
import { X, Copy, Check, ExternalLink, Download, Share2 } from 'lucide-react'

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  shareUrl: string
  formName: string
}

export default function ShareModal({ isOpen, onClose, shareUrl, formName }: ShareModalProps) {
  const [copied, setCopied] = useState('')
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  // Helper function to draw rounded rectangle
  const drawRoundedRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) => {
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.lineTo(x + width - radius, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
    ctx.lineTo(x + width, y + height - radius)
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
    ctx.lineTo(x + radius, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
    ctx.lineTo(x, y + radius)
    ctx.quadraticCurveTo(x, y, x + radius, y)
    ctx.closePath()
  }

  // Generate branded QR code with logo
  useEffect(() => {
    if (!isOpen) return
    
    const generateBrandedQR = async () => {
      try {
        // Fetch QR code from API with high error correction (H = 30% can be covered)
        const qrResponse = await fetch(
          `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(shareUrl)}&format=png&margin=0&ecc=H`
        )
        const qrBlob = await qrResponse.blob()
        const qrImage = await createImageBitmap(qrBlob)

        // Load logo from public folder
        const logoImg = new Image()
        logoImg.crossOrigin = 'anonymous'
        
        await new Promise((resolve, reject) => {
          logoImg.onload = resolve
          logoImg.onerror = reject
          logoImg.src = '/logo.png'
        })

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Canvas size - larger for better quality
        const size = 380
        const padding = 24
        const qrSize = size - (padding * 2)
        canvas.width = size
        canvas.height = size + 70 // Extra space for branding

        // Background with rounded corners
        ctx.fillStyle = '#ffffff'
        drawRoundedRect(ctx, 0, 0, size, size + 70, 24)
        ctx.fill()

        // Draw border (gray-900 theme)
        ctx.strokeStyle = '#111827'
        ctx.lineWidth = 4
        drawRoundedRect(ctx, 2, 2, size - 4, size + 66, 22)
        ctx.stroke()

        // Draw QR code with rounded corners (clip)
        ctx.save()
        drawRoundedRect(ctx, padding, padding, qrSize, qrSize, 16)
        ctx.clip()
        ctx.drawImage(qrImage, padding, padding, qrSize, qrSize)
        ctx.restore()

        // Draw center logo circle with shadow - smaller to not break QR readability
        const centerX = size / 2
        const centerY = padding + qrSize / 2
        const logoRadius = 28 // Smaller radius for better QR readability

        // Shadow
        ctx.shadowColor = 'rgba(17, 24, 39, 0.15)'
        ctx.shadowBlur = 10
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 2

        // White circle background with padding
        ctx.beginPath()
        ctx.arc(centerX, centerY, logoRadius + 8, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()

        // Reset shadow
        ctx.shadowColor = 'transparent'
        ctx.shadowBlur = 0
        ctx.shadowOffsetY = 0

        // Draw logo image (circular clip)
        ctx.save()
        ctx.beginPath()
        ctx.arc(centerX, centerY, logoRadius, 0, Math.PI * 2)
        ctx.clip()
        ctx.drawImage(
          logoImg,
          centerX - logoRadius,
          centerY - logoRadius,
          logoRadius * 2,
          logoRadius * 2
        )
        ctx.restore()

        // Draw branding text
        ctx.fillStyle = '#111827'
        ctx.font = 'bold 18px Inter, system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('fastsubmit', size / 2 - 8, size + 32)

        // Draw dot
        ctx.fillStyle = '#4f46e5'
        ctx.beginPath()
        ctx.arc(size / 2 + 52, size + 27, 5, 0, Math.PI * 2)
        ctx.fill()

        // Subtext with cute emoji
        ctx.fillStyle = '#6b7280'
        ctx.font = '13px Inter, system-ui, sans-serif'
        ctx.fillText('✨ Scan to open form', size / 2, size + 55)

        setQrDataUrl(canvas.toDataURL('image/png'))
      } catch (error) {
        console.error('Error generating QR code:', error)
      }
    }

    generateBrandedQR()
  }, [isOpen, shareUrl])

  const downloadQR = () => {
    if (!qrDataUrl) return
    const link = document.createElement('a')
    link.download = `${formName.replace(/\s+/g, '-').toLowerCase()}-qr-code.png`
    link.href = qrDataUrl
    link.click()
  }

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden border border-gray-200" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gray-900 px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Share Your Form</h2>
              <p className="text-white/60 text-sm">Get responses from anywhere</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Links & Sharing */}
          <div className="flex-1 p-6 space-y-5">
            {/* Direct Link */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                📎 Form Link
              </label>
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200">
                  <code className="flex-1 text-sm font-mono text-gray-700 truncate">{shareUrl}</code>
                  <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(shareUrl, 'link')}
                  className={`px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                    copied === 'link'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {copied === 'link' ? (
                    <span className="flex items-center gap-2">
                      <Check size={16} /> Copied!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Copy size={16} /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Social Share */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                🌐 Share on Social
              </label>
              <div className="grid grid-cols-4 gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this form: ${formName}`)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-black hover:text-white transition-all group border border-gray-100"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-white">X</span>
                </a>

                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-[#1877F2] hover:text-white transition-all group border border-gray-100"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-white">Facebook</span>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-[#0A66C2] hover:text-white transition-all group border border-gray-100"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-white">LinkedIn</span>
                </a>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Check out this form: ${formName} ${shareUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-[#25D366] hover:text-white transition-all group border border-gray-100"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-white">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Native Share */}
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: formName,
                    text: 'Check out this form',
                    url: shareUrl,
                  })
                } else {
                  copyToClipboard(shareUrl, 'link')
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-600 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-all"
            >
              <Share2 size={18} />
              <span className="font-medium text-sm">More sharing options</span>
            </button>

            {/* Tip */}
            <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-lg">💡</span>
              <p className="text-xs text-gray-600">
                Pro tip: Use the QR code for print materials, posters, or business cards!
              </p>
            </div>
          </div>

          {/* Right Section - QR Code */}
          <div className="md:w-80 bg-[#fafafa] p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200">
            {/* Hidden canvas for generation */}
            <canvas ref={canvasRef} className="hidden" />
            
            {/* QR Code Display */}
            <div className="relative">
              {qrDataUrl ? (
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gray-900/5 rounded-3xl blur-lg group-hover:bg-gray-900/10 transition-all" />
                  <img 
                    src={qrDataUrl} 
                    alt="QR Code" 
                    className="relative w-56 h-auto rounded-2xl shadow-xl border border-gray-200"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-56 h-64 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-3 border-gray-900 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-gray-500">Generating...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Download Button */}
            <button
              onClick={downloadQR}
              disabled={!qrDataUrl}
              className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={18} /> Download QR Code
            </button>

            <p className="mt-3 text-xs text-gray-500 text-center">
              High quality PNG with branding
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
