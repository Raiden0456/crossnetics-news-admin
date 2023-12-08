// library
import React from 'react'
import { ApolloProvider } from '@apollo/client'

// meta
import type { Metadata } from 'next'

// config
import { client } from '@/lib/apollo-client.config'

// styles
import './globals.css'
import { ContextProvider } from '@/lib/context-config'

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
      <ContextProvider>
        <ApolloProvider client={client}>
          <body className='ctp-mocha bg-[url(/cat-wallpaper.png)] bg-repeat'>
            {children}
          </body>
        </ApolloProvider>
      </ContextProvider>
    </html>
  )
}
