'use client'
import React, { FC } from 'react'
import { client } from '@/lib/apollo-client.config'
import { ContextProvider } from '@/lib/context-config'
import { ApolloProvider } from '@apollo/client'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>{children}</ContextProvider>
    </ApolloProvider>
  )
}
