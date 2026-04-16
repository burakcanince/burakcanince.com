import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'Burak Can İNCE',
  description: 'Building web apps, mobile apps and designing smooth and modern interfaces.',
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
