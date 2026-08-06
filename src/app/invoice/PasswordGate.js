'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { unlockInvoice } from './actions';
import './invoice.css';

export default function PasswordGate({ fontClass = '' }) {
  const [state, formAction, pending] = useActionState(unlockInvoice, null);

  return (
    <div className={`invGen ${fontClass}`.trim()}>
      <div className="gate">
        <form className="gate-card" action={formAction}>
          <div className="brand">
            <div className="brand-dot" />
            <div>
              <h1>Class Invoice Generator</h1>
              <span>This section is password protected</span>
            </div>
          </div>

          <label className="f">
            <span>Password</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              autoFocus
              required
            />
          </label>

          {state?.error && (
            <p className="gate-error" role="alert">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary gate-btn"
            disabled={pending}
          >
            {pending ? 'Checking…' : 'Unlock'}
          </button>

          <Link className="backlink gate-back" href="/">
            ‹ Back to thestudywave.com
          </Link>
        </form>
      </div>
    </div>
  );
}
