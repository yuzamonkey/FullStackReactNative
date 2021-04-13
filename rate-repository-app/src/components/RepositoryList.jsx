import React from 'react';
import useRepositories from '../hooks/useRepositories'
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const history = useHistory()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const handleRepositoryItemPress = (id) => {
    history.push(`/${id}`)
  }

  const renderItem = ({ item }) => (
    <Pressable onPress={() => handleRepositoryItemPress(item.id)}>
      <RepositoryItem item={item} />
    </Pressable>
  );

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      testID='repositoryListContainer'
    />
  )
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return (
    <RepositoryListContainer repositories={repositories} />
  )
}

export default RepositoryList;
