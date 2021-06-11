import React from 'react';
import color from '../../../style/color';

import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import TimelinePage from './components/TimelinePage';
import AppHeader from '../../../components/AppHeader';

const Timeline = ({route}) => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <TimelinePage />
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: color.white,
  },
});
