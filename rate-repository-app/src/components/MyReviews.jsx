import React from 'react'
import { Text, StyleSheet, FlatList, View, Pressable, Alert } from 'react-native'
import { useQuery } from '@apollo/client'
import { GET_AUTHORIZED_USER_DATA_WITH_REVIEWS } from '../graphql/queries';
import theme from '../theme'
import { format } from 'date-fns'
import { useHistory } from 'react-router-native'
import useDeleteReview from '../hooks/useDeleteReview'

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 10,
  },
  reviewItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  ratingLayout: {
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingCircle: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0366d6',
    borderWidth: 3,
    borderRadius: 50,
  },
  rating: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0366d6',
  },
  reviewLayout: {
    width: '80%',
    padding: 10,
  },
  repositoryName: {
    fontWeight: 'bold',
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  },
  buttonsLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  viewRepositoryButton: {
    backgroundColor: theme.colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    width: 150,
  },
  deleteButton: {
    backgroundColor: '#e30000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 5,
    width: 150,
  },
  linkText: {
    color: theme.colors.appBarText,
    fontWeight: theme.fontWeights.bold,
  }
});

const ReviewItem = ({ review }) => {
  const history = useHistory()
  const [deleteReview] = useDeleteReview()

  const handleViewRepositoryPress = () => {
    history.push(`/${review.repositoryId}`)
  }

  const deleteConfirmedReview = async () => {
    console.log("DELETION CONFIRMED")
    const id = review.id
    try {
      const data = await deleteReview({ id })
      console.log("DATA FROM DELETE REVIEW SUCCESS", data)
    } catch (e) {
      console.log("ERROR ON DELETE REVIEW: ", e)
    }
  }

  const handleDeletePress = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Delete", onPress: () => deleteConfirmedReview() }
      ]
    );
  }

  return (
    <View style={styles.layout}>
      <View style={styles.reviewItem}>
        <View style={styles.ratingLayout}>
          <View style={styles.ratingCircle}>
            <Text style={styles.rating}>{review.rating}</Text>
          </View>
        </View>
        <View style={styles.reviewLayout}>
          <Text style={styles.repositoryName}>{review.repository.fullName}</Text>
          <Text style={styles.date}>{format(new Date(review.createdAt.substring(0, 10)), "d.M.y")}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttonsLayout}>
        <Pressable onPress={handleViewRepositoryPress}>
          <View style={styles.viewRepositoryButton}>
            <Text style={styles.linkText}>View repository</Text>
          </View>
        </Pressable>
        <Pressable onPress={handleDeletePress}>
          <View style={styles.deleteButton}>
            <Text style={styles.linkText}>Delete review</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
};

const MyReviews = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER_DATA_WITH_REVIEWS, {
    variables: {
      includeReviews: true
    }
  })
  const reviews = data
    ? data.authorizedUser.reviews.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
    />
  )
}

export default MyReviews