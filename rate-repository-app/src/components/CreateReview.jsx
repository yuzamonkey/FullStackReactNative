import React from 'react'
import { Pressable, StyleSheet, View, Text } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import theme from '../theme'
import * as yup from 'yup';
import { useHistory } from 'react-router-native'
import useCreateReview from '../hooks/useCreateReview'

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

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required('Rating is required'),
});


const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    console.log("ON SUBMIT CALLED", values)
    const { ownerName, repositoryName, rating, review } = values
    try {
      const { data } = await createReview({ ownerName, repositoryName, rating, review })
      console.log("SUCCESS AT CREATING REVIEW")
    } catch (e) {
      console.log("ERROR (create review on submit)", e)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) =>
        <View style={styles.layout}>
          <FormikTextInput name="ownerName" placeholder="Repository owner name" />
          <FormikTextInput name="repositoryName" placeholder="Repository name" />
          <FormikTextInput name="rating" placeholder="Rating between 0 to 100" />
          <FormikTextInput name="review" placeholder="Review" multiline={true} />
          <Pressable onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>Create a review</Text>
            </View>
          </Pressable>
        </View>
      }
    </Formik>
  )
}

export default CreateReview;