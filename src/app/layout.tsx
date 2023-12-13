// library
import React from 'react'

// meta
import type { Metadata } from 'next'

// components
import { ClientLayout } from '@/components/ClientLayout/ClientLayout'

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
      <body className='ctp-mocha bg-[url(/cat-wallpaper.png)] bg-repeat'>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
