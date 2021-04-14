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
      console.log("ERROR ON 'CREATE REVIEW' MUTATION")
    }, 
  });


  const createReview = async ( { ownerName, repositoryName, rating, review }) => {
    // call the mutate function here with the right arguments
    const result = await mutate({ variables:  { ownerName, repositoryName, rating, review } })
    console.log("RESULT AT CREATE REVIEW")
    return result;

  };
  return [createReview, result];
};

export default useCreateReview;