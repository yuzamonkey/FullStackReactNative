import React from 'react'
import SingleRepositoryItem from './SingleRepositoryItem'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import useReviews from '../hooks/useReviews'
import { FlatList, Text, StyleSheet, View } from 'react-native'
import theme from '../theme'
import { format } from 'date-fns'

const styles = StyleSheet.create({
  reviewItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 10,
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
    padding: 10
  },
  username: {
    fontWeight: 'bold',
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 5,
  }
});

const RepositoryInfo = ({ repository }) => {
  return <SingleRepositoryItem repository={repository} />
};

const ReviewItem = ({ review }) => {
  // Single review item
  return (
    <View style={styles.reviewItem}>
      <View style={styles.ratingLayout}>
        <View style={styles.ratingCircle}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
      </View>
      <View style={styles.reviewLayout}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{format(new Date(review.createdAt.substring(0, 10)),  "d.M.y")}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
};

const SingleRepository = () => {
  // ...
  const { id } = useParams()
  const { repository } = useRepository(id);
  const first = 2
  const after = ''
  const { reviews: reviewData, fetchMore } = useReviews({first, after, id})
  console.log("REVIEW DATA", reviewData)

  const reviews = reviewData
    ? reviewData.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    // ...
    />
  );
};

export default SingleRepository;