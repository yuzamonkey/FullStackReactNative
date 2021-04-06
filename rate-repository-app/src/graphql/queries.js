import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
  repositories {
    edges {
      node {
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
// other queries...
