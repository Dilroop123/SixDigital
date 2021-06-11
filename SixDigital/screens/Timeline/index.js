/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../style/color';

import {StyleSheet, View,Text, Modal} from 'react-native';
import normalize from 'react-native-normalize';
import {Header} from '../../components/Header';
import TimelinePage from './components/TimelinePage';
import globalStyles from '../../style/globalStyles';

const Timeline = () => {
  const [headerTitle, setHeaderTitle] = React.useState();

  const onpressHandler = title => {
    setHeaderTitle(title);
  };

  return (
    <View style={styles.container}>
      <Header/>
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
