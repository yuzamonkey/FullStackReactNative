import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';

const useCreateReview = () => {
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    onCompleted: () => {
      console.log("USE 'CREATE REVIEW' SUCCESS")
    },
    onError: (error) => {
      console.log("ERROR ON 'CREATE REVIEW' MUTATION", error)
    }, 
  });

  const createReview = async ( { ownerName, repositoryName, rating, text }) => {
    //console.log("Create review at use class:", ownerName, repositoryName, rating, text)
    const result = await mutate({ variables:  { repositoryName, ownerName, rating, text } })
    //console.log("RESULT AT CREATE REVIEW", result)
    return result;
  };

  return [createReview, result];
};

export default useCreateReview;