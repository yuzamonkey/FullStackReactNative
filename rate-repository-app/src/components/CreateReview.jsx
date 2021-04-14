import React from 'react'
import { Pressable, StyleSheet, View , Text} from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
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
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: '',
}

const CreateReview = () => {
  /**
  Repository owner's username is a required string
  Repository's name is a required string
  Rating is a required number between 0 and 100
  Review is a optional string
  */

  const onSubmit = async (values) => {
    console.log("ON SUBMIT CALLED", values)
  }

  return (
    <Formik initialValues={initialValues} >
      <View style={styles.layout}>
        <FormikTextInput name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput name="repositoryName" placeholder="Repository name" />
        <FormikTextInput name="rating" placeholder="Rating between 0 to 100" />
        <FormikTextInput name="review" placeholder="Review" />
        <Pressable onPress={onSubmit}>
          <View style={styles.submitButton}>
            <Text style={styles.submitText}>Create a review</Text>
          </View>
        </Pressable>
      </View>
    </Formik>
  )
}

export default CreateReview;