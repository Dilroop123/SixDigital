/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import AppHeader from '../../../components/AppHeader';
import color from '../../../style/color';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const HeaderComponent = () => {
  return (
    <View style={{marginBottom: SCREEN_HEIGHT * 0.02}}>
      <AppHeader />
      <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
        <Text style={{fontWeight: 'bold', color: color.primary}}>
          Share Credentials Safely
        </Text>
        <Text style={{marginTop: normalize(5), color: color.darkGrey}}>
          Fill the required detail
        </Text>
      </View>
    </View>
  );
};
