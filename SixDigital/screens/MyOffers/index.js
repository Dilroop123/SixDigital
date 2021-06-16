import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import color from '../../style/color';
import Offers  from './components/Offers';

const MyOffers = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Offers/>
    </View>
  );
};

export default MyOffers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:color.white
  }
});
