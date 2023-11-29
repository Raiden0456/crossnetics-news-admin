// meta
import type { Metadata } from 'next'

// styles
import './globals.css'

export const metadata: Metadata = {
  title: 'Crossnetics',
  description: 'Crossnetics Blog Admin Panel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='ctp-mocha bg-[url(/roses.png)] bg-repeat'>{children}</body>
    </html>
  )
}
