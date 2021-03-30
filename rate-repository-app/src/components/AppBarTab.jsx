import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native'
import theme from '../theme'


const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.header,
    color: theme.colors.appBarText,
    padding: 10
  }
});

const AppBarTab = ({ text }) => {
  
  const handlePress = () => {
    console.log(`tab ${text} pressed`)
  }

  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default AppBarTab;