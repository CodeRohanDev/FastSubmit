/**
 * In-memory verification code store
 * This is a temporary solution until Firestore permissions are fixed
 * WARNING: Codes will be lost on server restart
 */

interface VerificationCode {
    code: string
    email: string
    createdAt: Date
    expiresAt: Date
    attempts: number
    verified: boolean
    verifiedAt?: Date
}

const verificationCodes = new Map<string, VerificationCode>()

export function storeVerificationCode(uid: string, data: VerificationCode) {
    verificationCodes.set(uid, data)
}

export function getVerificationCode(uid: string): VerificationCode | undefined {
    return verificationCodes.get(uid)
}

export function updateVerificationCode(uid: string, updates: Partial<VerificationCode>) {
    const existing = verificationCodes.get(uid)
    if (existing) {
        verificationCodes.set(uid, { ...existing, ...updates })
    }
}

export function deleteVerificationCode(uid: string) {
    verificationCodes.delete(uid)
}

// Clean up expired codes every 15 minutes
setInterval(() => {
    const now = new Date()
    for (const [uid, data] of verificationCodes.entries()) {
        if (now > data.expiresAt) {
            verificationCodes.delete(uid)
        }
    }
}, 15 * 60 * 1000)
