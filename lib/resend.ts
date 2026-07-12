import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM_EMAIL = 'TokenPulse <hello@token-pulse.in>'
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'support@token-pulse.in'
