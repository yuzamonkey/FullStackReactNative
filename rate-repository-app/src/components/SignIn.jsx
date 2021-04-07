import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import theme from '../theme'
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  layout: {
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 5,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  submitText: {
    color: theme.colors.appBarText,
    fontWeight: theme.fontWeights.bold,
  }
});

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});


const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log("SUCCESS", data);
      history.push("/");
    } catch (e) {
      console.log("ERROR ", e);
    }
  }
  return (
    <SignInContainer onSubmit={onSubmit}/>
  )
};

export const SignInContainer = ({onSubmit}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
export const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.layout}>
      <FormikTextInput name="username" placeholder="Username" testID="usernameField" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry testID="passwordField" />
      <Pressable onPress={onSubmit} testID="submitButton">
        <View style={styles.submitButton}>
          <Text style={styles.submitText}>Sign in</Text>
        </View>
      </Pressable>
    </View>
  )
};


export default SignIn;