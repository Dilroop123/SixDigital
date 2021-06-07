/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../style/color';

import ProffesionalServices from './components/ProffesionalServices';
import MyProjects from './components/MyProjects';
import Advertisement from './components/Advertisement';

import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import normalize from 'react-native-normalize';

const Home = () => {
  return (
    <View style={styles.container}>
      <MyProjects
        headerComponent={
          <ProffesionalServices
            footerComponent={
              <Header leftLabel="My Projects" rightLabel="See all" />
            }
          />
        }
        footerComponent={<Advertisement />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    padding: normalize(24),
  },
});
