/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import color from '../../../style/color';

const Header = ({leftLabel, rightLabel, style}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...style,
      }}>
      <Text
        style={{
          color: color.primary,
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        {leftLabel}
      </Text>
      <TouchableOpacity style={{flexGrow: 1, alignItems: 'flex-end'}}>
        <Text style={{color: color.grey, fontSize: 14}}>{rightLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
