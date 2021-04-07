import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ThemeText from './Text';

const styles = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 10
  },
  upperLayout: {
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  repository: {
    margin: 5,
    marginBottom: 10,
  },
  languageOuterLayout: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  languageLayout: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 3,
  },
  lowerLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  statistic: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const RepositoryItem = ({ item }) => {

  const countModifier = (count) => {
    if (count >= 1000) {
      return `${Math.round(count/100) / 10}k`
    }
    return `${count}`
  }

  return (
    <View style={styles.layout}>
      <View style={styles.upperLayout}>
        <View>
          <Image style={styles.image}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.repository}>
          <ThemeText fontSize='subheading' fontWeight='bold' testID="fullName">{item.fullName}</ThemeText>
          <ThemeText color='textSecondary' testID="description">{item.description}</ThemeText>
          <View style={styles.languageOuterLayout}>
            <View style={styles.languageLayout}>
              <ThemeText color='white' testID="language">{item.language}</ThemeText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lowerLayout}>
        <View style={styles.statistic}>
          <ThemeText fontWeight='bold' testID="stars">{countModifier(item.stargazersCount)}</ThemeText>
          <ThemeText color='textSecondary'>Stars</ThemeText>
        </View>
        <View style={styles.statistic}>
          <ThemeText fontWeight='bold' testID="forks">{countModifier(item.forksCount)}</ThemeText>
          <ThemeText color='textSecondary'>Forks</ThemeText>
        </View>
        <View style={styles.statistic}>
          <ThemeText fontWeight='bold' testID="reviews">{countModifier(item.reviewCount)}</ThemeText>
          <ThemeText color='textSecondary'>Reviews</ThemeText>
        </View>
        <View style={styles.statistic}>
          <ThemeText fontWeight='bold' testID="ratings">{countModifier(item.ratingAverage)}</ThemeText>
          <ThemeText color='textSecondary'>Ratings</ThemeText>
        </View>
      </View>
    </View>
  )
};

export default RepositoryItem;