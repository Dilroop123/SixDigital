/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../style/color';

import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import Header from '../Home/components/Header';
import DescriptionPage from './components/DescriptionPage';

const PopularServiceDescription = ({route}) => {
  const {title} = route.params;

  return (
    <View style={styles.container}>
      <Header leftLabel={title} />
      <DescriptionPage />
    </View>
  );
};

export default PopularServiceDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: 'white',
  },
});
