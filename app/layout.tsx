import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import InactivityLogout from '@/components/InactivityLogout';
import { Providers } from './providers';
import { NextAuthProvider } from './authproviders';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'FetchFast',
  description: 'A Web-based Hotel Management and Online-delivery Services System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
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