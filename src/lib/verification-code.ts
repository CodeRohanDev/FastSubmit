/**
 * Generate a 6-digit verification code
 */
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

/**
 * Check if verification code is expired
 */
export function isCodeExpired(createdAt: Date, expiryMinutes: number = 10): boolean {
  const now = new Date()
  const expiryTime = new Date(createdAt.getTime() + expiryMinutes * 60000)
  return now > expiryTime
}

/**
 * Format code for display (e.g., "123 456")
 */
export function formatCode(code: string): string {
  return code.slice(0, 3) + ' ' + code.slice(3)
}
