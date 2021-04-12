import { gql } from '@apollo/client';

export const GET_REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      id,
      fullName, 
      description,
      language, 
      stargazersCount, 
      forksCount, 
      reviewCount,
      ratingAverage,
      ownerAvatarUrl
    }
  }
`

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id,
          fullName, 
          description,
          language, 
          stargazersCount, 
          forksCount, 
          reviewCount,
          ratingAverage,
          ownerAvatarUrl
        }
      }
    }
  }
`;

export const GET_AUTHORIZED_USER_DATA = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`

