/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, TextInput, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import color from '../style/color';

const TextField = ({value, onChangeText, label, flex, style}) => {
  return (
    <View style={{flex: flex, ...style}}>
      <Text style={{color: color.primary}}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          height: 40,
          borderRadius: 5,
          borderColor: color.lightGrey,
          borderWidth: 1,
        }}
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default TextField;
