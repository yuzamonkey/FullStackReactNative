import React from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native'
import { Link } from 'react-router-native'
import theme from '../theme'


const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.header,
    color: theme.colors.appBarText,
    padding: 10
  }
});

const AppBarTab = ({ text, path }) => {
  return (
    <Link to={path}>
      <Text style={styles.text}>
        {text}
      </Text>
    </Link>
  )
}

export default AppBarTab;