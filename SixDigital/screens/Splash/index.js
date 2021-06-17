import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 1000);

  return (
    <View style={styles.container}>
      <Text style={styles.splashTxt}>6 DIGITAL</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashTxt: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 40,
  },
});
