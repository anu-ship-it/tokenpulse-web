import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)
export const FROM_EMAIL = 'TokenPulse <support@token-pulse.in>'
export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'tokenpulse10@gmail.com'
