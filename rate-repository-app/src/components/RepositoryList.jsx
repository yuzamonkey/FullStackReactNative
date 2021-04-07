import React from 'react';
import useRepositories from '../hooks/useRepositories'
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({ item }) => (
    <RepositoryItem item={item} />
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
    <RepositoryListContainer repositories={repositories}/>
  )
}

export default RepositoryList;
