import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM = 'TokenPulse <hello@token-pulse.in>'
export const REPLY_TO = 'anup17508@gmail.com'