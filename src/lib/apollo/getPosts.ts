import { gql } from '@apollo/client'

export const GET_POSTS_QUERY = gql`
  query Posts {
    getPosts {
      content {
        id
        title
        titleType
      }
      description {
        author
        date
        likes
      }
    }
  }
`
