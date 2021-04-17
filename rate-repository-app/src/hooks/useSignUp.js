import { useMutation } from '@apollo/client';
import { SIGNUP } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignUp = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGNUP, {
    onCompleted: () => {
      console.log("USE SIGN UP SUCCESS")
    },
    onError: (error) => {
      console.log("ERROR ON SIGN UP MUTATION")
    }, 
  });


  const signUp = async ({ username, password }) => {
    const result = await mutate({ variables: { username, password } })
    return result;
  };

  return [signUp, result];
};

export default useSignUp;