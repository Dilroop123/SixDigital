/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import color from '../../../style/color';

const Header = ({leftLabel, rightLabel, style, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...style,
      }}>
      {!!leftLabel && (
        <Text
          style={{
            color: color.primary,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {leftLabel}
        </Text>
      )}
      {!!rightLabel && (
        <TouchableOpacity
          onPress={() => onPress()}
          style={{flexGrow: 1, alignItems: 'flex-end'}}>
          <Text style={{color: color.grey, fontSize: 14}}>{rightLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
