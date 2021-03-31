import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import TextInput from './TextInput'
import { View, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import theme from '../theme'

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.layout}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
      <Pressable onPress={onSubmit}>
        <View style={styles.submitButton}>
        <Text style={styles.submitText}>Sign in</Text>

        </View>
      </Pressable>
    </View>
  )
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log("SUBMIT", values)
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) =>
        <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};



export default SignIn;