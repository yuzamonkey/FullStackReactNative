import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Tab from './AppBarTab.jsx'
import { useQuery } from '@apollo/client'
import { GET_AUTHORIZED_USER_DATA } from '../graphql/queries';

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
  const { data } = useQuery(GET_AUTHORIZED_USER_DATA)
  //console.log("AUTHORIZED USER DATA", data)

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Tab text="Repositories" path="/" />
        {data === undefined || data.authorizedUser === null
          ? <>
            <Tab text="Sign in" path="/signin" />
            <Tab text="Sign up" path="/signup" />
            </>
          : <>
            <Tab text="Create a review" path="createreview" />
            <Tab text="Sign out" path="/signout" />
            </>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;