import React from 'react';
import { useHistory } from 'react-router-native';
import useSignOut from '../hooks/useSignOut';
import Text from './Text';

const SignOut = () => {
  const [signOut] = useSignOut();
  const history = useHistory();

  try {
    signOut();
    history.push("/");
  } catch (e) {
  }
  return (
    <Text>You are signing out</Text>
  )
}

export default SignOut;