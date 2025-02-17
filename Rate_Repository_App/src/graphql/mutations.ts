import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
mutation Mutation($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
  }
}
`

export const NEW_REVIEW = gql`
mutation Mutation($review: CreateReviewInput) {
  createReview(review: $review) {
    repositoryId
  }
}
`

export const NEW_USER = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    id
  }
}
`