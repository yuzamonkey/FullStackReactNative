import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authorize($username: String!, $password: String!) {
    authorize(credentials: {username: $username, password: $password}) {
      accessToken
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation createReview( $ownerName: String!, $repositoryName: String!, $rating: Number!, $review: String ) {
    createReview()
  }
`