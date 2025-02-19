import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories($searchKeyword: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $after: String, $first: Int) {
  repositories(searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection, after: $after, first: $first) {
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
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
`;

export const GET_REPOSITORY = gql`
query Repositories($repositoryId: ID!) {
  repository(id: $repositoryId) {
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
`;

export const ME = gql`
query Me($includeReviews: Boolean = false) {
  me {
    id
    reviews @include(if: $includeReviews) {
      edges {
        node {
          id
          text
          rating
          createdAt
          repositoryId
          user {
            id
            username
          }
        }
      }
    }
  }
}
`;