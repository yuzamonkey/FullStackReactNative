import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Tab from './AppBarTab.jsx'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    height: 125,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const AppBar = () => {
  return <View style={styles.container}>
      <Tab text="Repositories" path="/"/>
      <Tab text="Sign in" path="/signin"/>
  </View>;
};

export default AppBar;