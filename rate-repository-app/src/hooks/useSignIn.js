import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(LOGIN, {
    onCompleted: () => {
      console.log("USE SIGN IN SUCCESS")
    },
    onError: (error) => {
      console.log("ERROR ON LOGIN MUTATION")
    }, 
  });


  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const result = await mutate({ variables: { username, password } })
    const token = result.data.authorize.accessToken;
    await authStorage.setAccessToken(token);
    apolloClient.resetStore();
    return result;

  };

  return [signIn, result];
};

export default useSignIn;