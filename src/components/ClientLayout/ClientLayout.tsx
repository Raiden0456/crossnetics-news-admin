'use client'
// library
import React, { FC } from 'react'
import { client } from '@/lib/apollo-client.config'
import { ApolloProvider } from '@apollo/client'
import { SearchDataProvider } from '@/context/SearchArticle'

interface ClientLayoutProps {
  children: React.ReactNode
}

export const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <SearchDataProvider>{children}</SearchDataProvider>
    </ApolloProvider>
  )
}
