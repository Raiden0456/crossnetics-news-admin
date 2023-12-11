import { gql } from '@apollo/client'

export const SEARCH_POST_QUERY = gql`
  query Search($titleKeyword: String) {
    getPosts(titleKeyword: $titleKeyword) {
      description {
        title
        author
        date
        likes
        tags
        views
      }
      id
    }
  }
`
