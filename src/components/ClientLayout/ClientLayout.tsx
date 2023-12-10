'use client'
// library
import React, { FC } from 'react'
import { client } from '@/lib/apollo-client.config'
import { ApolloProvider } from '@apollo/client'

interface ClientLayoutProps {
  children: React.ReactNode
}

export const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
