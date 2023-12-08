// library
import React from 'react'

// meta
import type { Metadata } from 'next'

// components
import { Layout } from '@/components/Layout/Layout'

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
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
