import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'

const accountId = process.env.R2_ACCOUNT_ID
const accessKeyId = process.env.R2_ACCESS_KEY_ID
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY

export const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'fastsubmit'
export const R2_PUBLIC_URL = (process.env.R2_PUBLIC_URL || '').replace(/\/$/, '')

let client: S3Client | null = null

function getClient(): S3Client {
  if (client) return client
  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error('R2 is not configured: missing R2_ACCOUNT_ID/R2_ACCESS_KEY_ID/R2_SECRET_ACCESS_KEY')
  }
  client = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  })
  return client
}

const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
const VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/quicktime', 'video/ogg']

export const ALLOWED_UPLOAD_TYPES = [...IMAGE_TYPES, ...VIDEO_TYPES]
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024 // 10MB
export const MAX_VIDEO_BYTES = 100 * 1024 * 1024 // 100MB

export function isImageType(contentType: string) {
  return IMAGE_TYPES.includes(contentType)
}

export function isVideoType(contentType: string) {
  return VIDEO_TYPES.includes(contentType)
}

export function maxBytesFor(contentType: string) {
  return isVideoType(contentType) ? MAX_VIDEO_BYTES : MAX_IMAGE_BYTES
}

function safeExt(filename: string, fallback: string) {
  const ext = filename.split('.').pop()
  if (!ext || ext.length > 8 || !/^[a-zA-Z0-9]+$/.test(ext)) return fallback
  return ext.toLowerCase()
}

/**
 * Uploads a file buffer to R2 under the given path prefix and returns its public URL.
 */
export async function uploadToR2(opts: {
  buffer: Buffer
  contentType: string
  filename: string
  prefix: string
}): Promise<{ url: string; key: string }> {
  const key = `${opts.prefix}/${randomUUID()}.${safeExt(opts.filename, 'bin')}`

  await getClient().send(
    new PutObjectCommand({
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: opts.buffer,
      ContentType: opts.contentType,
    })
  )

  return { url: `${R2_PUBLIC_URL}/${key}`, key }
}

export async function deleteFromR2(key: string): Promise<void> {
  await getClient().send(new DeleteObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key }))
}
