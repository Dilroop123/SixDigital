/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Button, StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import color from '../../../style/color';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const DescriptionPage = ({navigation, description, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descArea}>
        <View style={{width: '100%'}}>
          <Image style={styles.descImg} source={{uri: image}} />
        </View>

        <View style={styles.descDetail}>
          <ScrollView style={{height: SCREEN_HEIGHT * 0.4}}>
            <Text style={styles.descDetailText}>{description}</Text>
          </ScrollView>
        </View>

        <View style={styles.descBtnArea}>
          <Button
            title="Request Service"
            color={color.primary}
            style={styles.descBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default DescriptionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descImg: {
    height: SCREEN_HEIGHT * 0.2,
    width: undefined,
    borderRadius: SCREEN_HEIGHT * 0.03,
  },
  descArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  descDetail: {
    backgroundColor: color.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH - 65,
    paddingHorizontal: SCREEN_HEIGHT * 0.04,
    paddingVertical: SCREEN_WIDTH * 0.02,
    borderBottomRightRadius: SCREEN_HEIGHT * 0.03,
    borderBottomLeftRadius: SCREEN_HEIGHT * 0.03,
  },
  descDetailText: {
    lineHeight: SCREEN_HEIGHT * 0.03,
    fontSize: 14,
    color: color.grey,
    textAlign: 'justify',
  },
  descTitle: {
    fontWeight: 'bold',
    color: color.primary,
    fontSize: 17,
  },
  descBtnArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SCREEN_HEIGHT * 0.03,
  },
  descBtn: {
    color: color.white,
  },
});
