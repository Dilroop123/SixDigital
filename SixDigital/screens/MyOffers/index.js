import React from 'react';

import {StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';
import color from '../../style/color';
import Offers from './components/Offers';

const MyOffers = ({navigation, route}) => {
  const {advertisementData} = route.params;
  return (
    <View style={styles.container}>
      <Offers offersData={advertisementData} onPress={() => navigation.pop()} />
    </View>
  );
};

export default MyOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_WIDTH * 0.03,
    backgroundColor: color.white,
  },
});
