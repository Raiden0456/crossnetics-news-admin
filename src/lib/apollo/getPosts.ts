import { gql } from '@apollo/client'

export const GET_POSTS_QUERY_TABLE = gql`
  query Posts {
    getPosts {
      id
      postType
      description {
        title
        author
        date
        likes
        views
        tags
      }
    }
  }
`
