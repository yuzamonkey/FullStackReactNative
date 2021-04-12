import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {
  console.log("USE REPO ID IN HOOK", id)
  const { data, loading, error } = useQuery(GET_REPOSITORY, { variables: {id} })
  console.log("DATA IN HOOK", data)
  if (!loading) {
    const repository = data.repository;
    return { repository }
  } else {
    return { repository: undefined }
  }

}

export default useRepository;
