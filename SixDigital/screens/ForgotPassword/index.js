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

const ForgotPassword = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.splashTxt}>forgot password</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.purple,
      alignItems:'center',
      justifyContent:'center'
    },
    splashTxt:{
        color:color.white,
        fontWeight:'bold',
        fontSize:40
    }
  });
  ;
