import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, { variables: {id} })

  if (!loading) {
    const repository = data.repository;
    return { repository }
  } else {
    return { repository: undefined }
  }

}

export default useRepository;
