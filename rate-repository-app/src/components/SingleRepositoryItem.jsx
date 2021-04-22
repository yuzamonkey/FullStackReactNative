import React from 'react'
import { View, Button, StyleSheet, Text, Pressable } from 'react-native'
import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepository'
import theme from '../theme'
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    backgroundColor: 'white',
    padding: 10
  },
  linkButton: {
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
  linkText: {
    color: theme.colors.appBarText,
    fontWeight: theme.fontWeights.bold,
  }
})

const SingleRepositoryItem = ({repository}) => {
  // const { id } = useParams()
  // const { repository } = useRepository(id);

  const handleButtonPress = () => {
    Linking.openURL(`https://github.com/${repository.fullName}`);
  }
  return (
    <View>
      <View style={styles.layout}>
        {repository && <RepositoryItem item={repository} />}
        <Pressable onPress={handleButtonPress}>
          <View style={styles.linkButton}>
            <Text style={styles.linkText}>Open in GitHub</Text>
          </View>
        </Pressable>
      </View>
      <View>
      </View>
    </View>

  )
}

export default SingleRepositoryItem