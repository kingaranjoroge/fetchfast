import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'FetchFast',
  description: 'A Web-based Hotel Management and Online-delivery Services System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="flex flex-col min-h-screen">
          <Navbar />
          <section className="flex-grow relative">{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  )
}
