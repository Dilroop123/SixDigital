/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text} from 'react-native';
import {SCREEN_HEIGHT} from '../style/fontSize';
import color from '../style/color';

const AppLogo = ({navigation}) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          color: color.primary,
          textAlign: 'center',
          fontSize: SCREEN_HEIGHT * 0.035,
        }}>
        6 DIGITAL
      </Text>
    </View>
  );
};

export default AppLogo;
