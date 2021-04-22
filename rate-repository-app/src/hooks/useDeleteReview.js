import React from 'react'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'
import { useApolloClient } from '@apollo/client';

const useDeleteReview = () => {
  const apolloClient = useApolloClient()
  const [mutate, result] = useMutation(DELETE_REVIEW, {
    onCompleted: () => {
      console.log("USE 'CREATE REVIEW' SUCCESS")
    },
    onError: (error) => {
      console.log("ERROR ON 'CREATE REVIEW' MUTATION", error)
    },
  });
  
  const deleteReview = async ({id}) => {
    const result = await mutate({ variables:  { id }})
    return result;
  }
  return [deleteReview, result]
}

export default useDeleteReview
