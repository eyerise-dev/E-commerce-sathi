import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-Commerce Sathi | Digital Marketplace Insiders',
  description: 'E-Commerce Sathi helps marketplace businesses scale with expert cataloging, inventory, account health, compliance, and ROI-driven ads.',
  icons: {
    icon: '/favicon-circle.png',
    shortcut: '/favicon-circle.png',
    apple: '/favicon-circle.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
