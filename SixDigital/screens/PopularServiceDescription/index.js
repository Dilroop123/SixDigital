/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import Header from '../Home/components/Header';
import DescriptionPage from './components/DescriptionPage';
import AppHeader from '../../components/AppHeader';

const PopularServiceDescription = ({route, navigation}) => {
  const {service} = route.params;

  return (
    <View style={styles.container}>
      <AppHeader onPress={() => navigation.pop()} />
      <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
        <Header leftLabel={service?.name} />
      </View>
      <DescriptionPage
        description={service?.description}
        image={service?.cover_image?.publicUrl}
      />
    </View>
  );
};

export default PopularServiceDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_WIDTH * 0.03,
    backgroundColor: 'white',
  },
});
