import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (orderBy, orderDirection) => {
  const { data, loading, error } = useQuery(GET_REPOSITORIES, { 
    fetchPolicy: 'cache-and-network',
    variables: {orderBy, orderDirection} 
  })
  if (!loading) {
    const repositories = data.repositories;
    return { repositories }
  } else {
    return { repositories: undefined }
  }
}

export default useRepositories;
