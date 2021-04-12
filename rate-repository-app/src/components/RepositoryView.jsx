import React from 'react'
import { View, Text } from 'react-native'
import { useParams } from 'react-router-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepository'

const RepositoryView = () => {
  const { id } = useParams()
  const { repository } = useRepository(id);

  return (
    <View>
      {repository && <RepositoryItem item={repository} />}
    </View>
  )
}

export default RepositoryView