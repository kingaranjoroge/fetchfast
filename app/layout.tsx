import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Footer from '@/components/Footer';
import InactivityLogout from '@/components/auth/InactivityLogout';
import { Providers } from './providers';
import { NextAuthProvider } from './authproviders';
import { SpeedInsights } from "@vercel/speed-insights/next"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FetchFast',
  description: 'A Web-based Hotel Management and Online Ordering & Delivery Services System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={plusJakarta.variable}>
      <body className="min-h-screen font-sans">
        <NextAuthProvider> {/* This injects the session data into the page */ }
          <Providers>
            <InactivityLogout /> {/* This injects the client-only functionality */}
            <main className='min-h-screen flex flex-col'>
              <section className="flex flex-col flex-grow overflow-y-auto">{children}</section>
              <Footer />
            </main>
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  );
}