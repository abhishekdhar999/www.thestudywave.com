// Server-side password gate for /invoice.
//
// The password lives in the INVOICE_PASSWORD environment variable. Set it in
// your host (Vercel → Project → Settings → Environment Variables) or in a local
// .env.local file. FALLBACK_PASSWORD is only used when that variable is missing,
// so a fresh checkout still works — change it or, better, set the env var.

import crypto from 'crypto';
import { cookies } from 'next/headers';

const FALLBACK_PASSWORD = 'StudyWave@Invoice2026';

export const COOKIE = 'sw_invoice';
export const MAX_AGE = 60 * 60 * 12; // stay unlocked for 12 hours

const password = () => process.env.INVOICE_PASSWORD || FALLBACK_PASSWORD;
const sha = (s) => crypto.createHash('sha256').update(String(s)).digest();

/** Value stored in the cookie: proves the password was entered without holding it. */
export const sessionToken = () =>
  crypto.createHmac('sha256', password()).update('invoice-unlocked').digest('hex');

/** Constant-time compare — both sides are fixed-length digests. */
const same = (a, b) => crypto.timingSafeEqual(sha(a), sha(b));

export const checkPassword = (input) => same(input, password());

export async function isUnlocked() {
  const value = (await cookies()).get(COOKIE)?.value;
  return !!value && same(value, sessionToken());
}
