import React from 'react';
import useRepositories from '../hooks/useRepositories'
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import { Button, Menu, Provider, DefaultTheme, Searchbar } from 'react-native-paper';
import { useDebouncedCallback } from 'use-debounce'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000000',
    accent: '#000000',
  },
};

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  menuToggle: {
    flexDirection: 'row',
  },
  menuButton: {
    color: 'green',
    padding: 20,
  },

});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onEndReach }) => {
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
};

const RepositoryList = () => {
  const [textInput, setTextInput] = React.useState('')
  const [searchKeyword, setSearchKeyword] = React.useState('')
  const [orderBy, setOrderBy] = React.useState('CREATED_AT')
  const [orderDirection, setOrderDirection] = React.useState('DESC')
  const first = 6
  const [after, setAfter] = React.useState('')
  const { repositories, fetchMore } = useRepositories({first, after, searchKeyword, orderBy, orderDirection})
  const [selectedOrder, setSelectedOrder] = React.useState('Latest repositories')
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const debounced = useDebouncedCallback(
    (keyword) => {
      setSearchKeyword(keyword);
    }, 500);

  const onChangeSearch = keyword => {
    setTextInput(keyword)
    debounced(keyword)
  };

  const onEndReach = () => {
    setAfter(repositories.pageInfo.endCursor)
    fetchMore()
  }


  return (
    <Provider theme={theme}>
      <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={textInput} />
      <View style={styles.menuToggle}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu} style={styles.menuButton}>{selectedOrder}</Button>}>
          <Menu.Item onPress={() => {
            setSelectedOrder("Latest repositories")
            setOrderBy('CREATED_AT')
            setOrderDirection('DESC')
            closeMenu()
          }} title="Latest repositories" />
          <Menu.Item onPress={() => {
            setSelectedOrder("Highest rated repositories")
            setOrderBy('RATING_AVERAGE')
            setOrderDirection('DESC')
            closeMenu()
          }} title="Highest rated repositories" />
          <Menu.Item onPress={() => {
            setSelectedOrder("Lowest rated repositories")
            setOrderBy('RATING_AVERAGE')
            setOrderDirection('ASC')
            closeMenu()
          }} title="Lowest rated repositories" />
        </Menu>
      </View>
      <RepositoryListContainer repositories={repositories} onEndReach={onEndReach}/>
    </Provider>

  )
}

export default RepositoryList;
