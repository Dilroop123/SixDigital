/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import {
  Button,
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import color from '../../../../style/color';
import normalize from 'react-native-normalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../../../style/globalStyles';
import StepIndicator from 'react-native-step-indicator';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Label = ({text, value}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Text style={{color: color.primary}}>{text}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{color: color.darkGrey, fontSize: normalize(12)}}>
          {':  ' + value}
        </Text>
      </View>
    </View>
  );
};


const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: color.orange,
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: color.successText,
  stepStrokeUnFinishedColor: color.lightGrey,
  separatorFinishedColor: color.lightGrey,
  separatorUnFinishedColor: color.lightGrey,
  stepIndicatorFinishedColor: color.successText,
  stepIndicatorUnFinishedColor: color.white,
  stepIndicatorCurrentColor: color.white,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: color.orange,
  stepIndicatorLabelFinishedColor: color.white,
  stepIndicatorLabelUnFinishedColor:color.lightGrey,
  labelColor: color.grey,
  labelSize: 13,
  currentStepLabelColor: color.orange,
};

const TimelinePage = ({navigation, route, HeaderComponent}) => {
  const data = [
    {
      label: 'Expected Delivery',
      status: '',
      dateTime: '04 June',
    },
    {
      label: 'Your delivery date was updated to 2021-06-04',
      status: 'In progress',
      dateTime: '03 June',
    },
    {
      label: 'Expected Delivery',
      status: '',
      dateTime: '04 June',
    },
    {
      label: 'Your delivery date was updated to 2021-06-04',
      status: 'In progress',
      dateTime: '03 June',
    },
  ];

  const [currentPosition, setCurrentPosition] = useState(1);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: color.white,
          marginTop: SCREEN_HEIGHT * 0.001,
          padding: normalize(15),
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
          <Text
            style={{color: color.primary, fontSize: 14, fontWeight: 'bold'}}>
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
          <Text
            style={{color: color.primary, fontWeight: 'bold', fontSize: 16}}>
            {' '}
            &#x24; 100
          </Text>
        </View>
      </View>
      <View style={styles.indicatorContainer}>
        <Text
          style={{
            color: color.grey,
            fontSize: 12,
            marginVertical: SCREEN_HEIGHT * 0.03,
          }}>
          Remark Timeline
        </Text>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={currentPosition}
          stepCount={4}
          labels={data}
          direction="vertical"
          renderLabel={({position, stepStatus, label, crntPosition}) => {
            return (
              <View style={styles.lblContainer}>
                <Text style={styles.lblStatus}>{data[position].label}</Text>
                <Text style={styles.lblStatus}>{data[position].status}</Text>
                <Text style={styles.lblText}>{data[position].dateTime}</Text>
              </View>
            );
          }}
        />
      </View>
      
    </View>
  );
};

export default TimelinePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  indicatorContainer: {
    height:SCREEN_HEIGHT * 0.58,
    width: SCREEN_WIDTH * 0.7,
    padding: SCREEN_HEIGHT * 0.005,
    margin:SCREEN_HEIGHT * 0.02
  },
  lblContainer :{
    marginTop:0,
    paddingLeft: SCREEN_WIDTH * 0.002,
    width: SCREEN_WIDTH * 0.6
  },
  lblStatus :{

  },
  lblText : {
    fontSize: 14,
    fontWeight:'bold'
  }
});
