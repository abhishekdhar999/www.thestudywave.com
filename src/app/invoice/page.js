import { Quicksand } from 'next/font/google';
import InvoiceGenerator from './InvoiceGenerator';
import PasswordGate from './PasswordGate';
import { isUnlocked } from './gate';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata = {
  title: 'Class Invoice Generator | The Study Wave',
  description: 'Pick the class dates and the invoice writes itself.',
  robots: { index: false, follow: false },
};

export default async function InvoicePage() {
  if (!(await isUnlocked())) {
    return <PasswordGate fontClass={quicksand.variable} />;
  }
  return <InvoiceGenerator fontClass={quicksand.variable} />;
}
