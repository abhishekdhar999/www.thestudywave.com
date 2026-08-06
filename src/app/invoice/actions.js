'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { COOKIE, MAX_AGE, checkPassword, sessionToken } from './gate';

export async function unlockInvoice(prevState, formData) {
  const input = String(formData.get('password') || '');

  if (!input || !checkPassword(input)) {
    // small delay so the form can't be hammered quickly
    await new Promise((r) => setTimeout(r, 400));
    return { error: 'Wrong password. Try again.' };
  }

  (await cookies()).set(COOKIE, sessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/invoice',
    maxAge: MAX_AGE,
  });

  redirect('/invoice');
}

export async function lockInvoice() {
  (await cookies()).delete({ name: COOKIE, path: '/invoice' });
  redirect('/invoice');
}
