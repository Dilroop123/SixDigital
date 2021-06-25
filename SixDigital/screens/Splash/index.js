import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import color from '../../style/color';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      stopSplash();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopSplash = () => {
    AsyncStorage.getItem('USER').then(async value => {
      if (value !== null) {
        navigation.replace('HomeScreen');
      } else {
        navigation.replace('Login');
      }
    });

    setTimeout(() => {}, 3000);
  };
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
