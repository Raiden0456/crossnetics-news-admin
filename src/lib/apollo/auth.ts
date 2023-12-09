import { gql } from '@apollo/client'

export const LOGIN_QUERY = gql`
  query Login($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      token
      user {
        login
      }
    }
  }
`
