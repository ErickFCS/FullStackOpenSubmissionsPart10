import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
  repositories {
    edges {
      node {
        id
        fullName
        description
        language
        forksCount
        stargazersCount
        ratingAverage
        reviewCount
        ownerAvatarUrl
        url
      }
    }
  }
}
`

export const GET_REPOSITORY = gql`
query Repositories($repositoryId: ID!) {
  repository(id: $repositoryId) {
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }  
        }
      }
    }
  }
}
`

export const ME = gql`
query Me {
  me {
    username
    id
  }
}
`