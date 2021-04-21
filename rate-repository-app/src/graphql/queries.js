import { gql } from '@apollo/client';

export const GET_REVIEWS = gql`
  query ($first: Int, $after: String, $id: ID!){
    repository(id: $id) {
      id
      fullName
      reviews(first: $first, after: $after) {
        totalCount
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
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`


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

export const GET_REPOSITORIES = gql`
query (
  $first: Int,
  $after: String,
  $searchKeyword: String,
  $orderBy: AllRepositoriesOrderBy,
  $orderDirection: OrderDirection
  ) {
  repositories (first: $first, after: $after, searchKeyword: $searchKeyword, orderBy: $orderBy, orderDirection: $orderDirection){
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
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
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

