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
import { SCREEN_WIDTH } from 'react-native-normalize';
import color from '../../style/color';
import { SCREEN_HEIGHT } from '../../style/fontSize';

const Splash = () => {

    setTimeout(()=>{
        
    })
  return (
    <View style={styles.container}>
      <Text style={styles.splashTxt}>6 DIGITAL</Text>
    </View>
  );
};

export default Splash

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:SCREEN_HEIGHT,
      width:SCREEN_WIDTH,
      backgroundColor: color.purple,
      alignItems:'center',
      justifyContent:'center'
    },
    splashTxt:{
        color:color.white,
        fontWeight:'bold',
        fontSize:36
    }
  });
  ;
