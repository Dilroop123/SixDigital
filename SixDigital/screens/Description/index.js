/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../style/color';

import {StyleSheet, View,Text, Modal} from 'react-native';
import normalize from 'react-native-normalize';
import {Header} from '../../components/Header';
import DescriptionPage from './components/DescriptionPage';
import globalStyles from '../../style/globalStyles';

const Description = () => {
  const [headerTitle, setHeaderTitle] = React.useState();

  const onpressHandler = title => {
    setHeaderTitle(title);
  };

  return (
    <View style={styles.container}>
      <Header/>
      <DescriptionPage />
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: 'white',
  },
});
