import { gql } from '@apollo/client'

export const DELETE_POST_BY_ID = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId)
  }
`
