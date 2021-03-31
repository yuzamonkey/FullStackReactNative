import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  formStyle: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
  },
  validFormStyle: {
    borderColor: '#b8b8b8',
  },
  invalidFormStyle: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    marginLeft: 10
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError 
          ? [styles.formStyle, styles.invalidFormStyle] 
          : [styles.formStyle, styles.validFormStyle]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;