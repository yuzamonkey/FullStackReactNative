import React from 'react'
import SingleRepositoryItem from './SingleRepositoryItem'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import { FlatList, Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  reviewItem: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 100,
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
    borderRadius: '50%',
  },
  rating: {
    fontSize: '1.3em',
    color: '#0366d6',
  },
  reviewLayout: {
    backgroundColor: 'yellow',
    width: '80%',
  }
});

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return <SingleRepositoryItem repository={repository} />
};

const ReviewItem = ({ review }) => {
  // Single review item
  console.log(review)
  return (
    <View style={styles.reviewItem}>
      <View style={styles.ratingLayout}>
        <View style={styles.ratingCircle}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>
      </View>
      <View style={styles.reviewLayout}>
        <Text>{review.user.username}</Text>
        <Text>{review.createdAt}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  )
};

const SingleRepository = () => {
  // ...
  const { id } = useParams()
  const { repository } = useRepository(id);

  const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
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