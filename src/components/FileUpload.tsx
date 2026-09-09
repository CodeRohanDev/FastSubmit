'use client'
import { useRef, useState } from 'react'
import { Upload, X, Loader2, ImageIcon, Video as VideoIcon } from 'lucide-react'

interface FileUploadProps {
  value?: string
  onChange: (url: string) => void
  accept: 'image' | 'video'
  uploadUrl: string
  disabled?: boolean
}

export default function FileUpload({ value, onChange, accept, uploadUrl, disabled }: FileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File | undefined) => {
    if (!file) return
    setError('')
    setUploading(true)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch(uploadUrl, { method: 'POST', body: formData })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      onChange(data.url)
    } catch (err: any) {
      setError(err.message || 'Upload failed')
    }
    setUploading(false)
  }

  if (value) {
    return (
      <div className="relative inline-block">
        {accept === 'image' ? (
          <img src={value} alt="" className="max-h-48 rounded-lg border border-gray-200 object-cover" />
        ) : (
          <video src={value} controls className="max-h-48 rounded-lg border border-gray-200" />
        )}
        {!disabled && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full p-1 shadow hover:bg-gray-700"
          >
            <X size={12} />
          </button>
        )}
      </div>
    )
  }

  return (
    <div>
      <button
        type="button"
        disabled={disabled || uploading}
        onClick={() => inputRef.current?.click()}
        className="flex items-center justify-center gap-2 w-full py-6 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors disabled:opacity-50"
      >
        {uploading ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Uploading...
          </>
        ) : (
          <>
            {accept === 'image' ? <ImageIcon size={16} /> : <VideoIcon size={16} />}
            <Upload size={14} />
            {accept === 'image' ? 'Upload image' : 'Upload video'}
          </>
        )}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept === 'image' ? 'image/*' : 'video/*'}
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  )
}
