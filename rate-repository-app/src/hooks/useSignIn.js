import { useMutation } from '@apollo/client'
import { LOGIN } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.log("ERROR ON LOGIN MUTATION")
    }
  });

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    return await mutate({ variables: { username, password }})
  };

  return [signIn, result];
};

export default useSignIn;