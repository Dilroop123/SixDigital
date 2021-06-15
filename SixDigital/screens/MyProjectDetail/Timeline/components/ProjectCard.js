/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, Image, Dimensions} from 'react-native';
import color from '../../../../style/color';
import normalize from 'react-native-normalize';
import globalStyles from '../../../../style/globalStyles';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const ProjectCard = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.white,
        marginTop: SCREEN_HEIGHT * 0.001,
        padding: normalize(15),
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: normalize(10),
        ...globalStyles.shadow,
      }}>
      <Image
        style={{height: SCREEN_HEIGHT * 0.1, width: SCREEN_HEIGHT * 0.1}}
        source={require('../../../../assets/Fb-ad.jpg')}
      />
      <View
        style={{
          // height: '50%',
          // width: 1,
          backgroundColor: color.lightGrey,
          marginHorizontal: SCREEN_WIDTH * 0.05,
        }}
      />
      <View style={{flex: 0.8, marginVertical: SCREEN_HEIGHT * 0.02}}>
        <Text style={{color: color.primary, fontSize: 14, fontWeight: 'bold'}}>
          Video Shoot
        </Text>
        <Text
          style={{
            color: color.primary,
            fontSize: 12,
            flex: 1,
            marginVertical: SCREEN_HEIGHT * 0.008,
          }}>
          Status : <Text style={{color: color.successText}}>Active</Text>
        </Text>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: color.primary, fontWeight: 'bold', fontSize: 16}}>
          {' '}
          &#x24; 100
        </Text>
      </View>
    </View>
  );
};

export default ProjectCard;
