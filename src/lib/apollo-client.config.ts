import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const client = new ApolloClient({
  link: new HttpLink({ uri: 'YOUR_GRAPHQL_SERVER_URI' }),
  cache: new InMemoryCache(),
})
