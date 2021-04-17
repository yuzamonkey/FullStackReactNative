import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: {username: $username, password: $password}) {
      accessToken
    }
  }
`

export const SIGNUP = gql`
  mutation createUser(
    $username: String!,
    $password: String!,
    ) {
      createUser (
        user: {
          username: $username,
          password: $password,
        }
      ) {
        id, username
      }
    }
`

export const CREATE_REVIEW = gql`
  mutation createReview(
    $repositoryName: String!,
    $ownerName: String!,
    $rating: Int!,
    $text: String
    ) {
      createReview (
        review: {
          repositoryName: $repositoryName,
          ownerName: $ownerName,
          rating: $rating,
          text: $text
        }
      ) {
        id,
        repositoryId
      }
    }
`