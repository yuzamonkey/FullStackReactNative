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
    backgroundColor: 'green',
    width: '30%',
  },
  infoLayout: {
    backgroundColor: 'yellow',
    width: '70%',
  }
});

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return <SingleRepositoryItem repository={repository} />
};

const ReviewItem = ({ review }) => {
  // Single review item
  return (
    <View style={styles.reviewItem}>
      <View style={styles.ratingLayout}>
        <Text>Rating</Text>
      </View>
      <View style={styles.infoLayout}>
        <Text>Info</Text>
      </View>
      <Text>Reviews here</Text>
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