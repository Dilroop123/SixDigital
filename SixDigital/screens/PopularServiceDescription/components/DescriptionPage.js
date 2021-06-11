/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Button, StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import color from '../../../style/color';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const DescriptionPage = ({navigation, route, HeaderComponent}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descArea}>
        <View>
          <Image
            style={styles.descImg}
            source={require('../../../assets/Fb-ad.jpg')}
          />
        </View>
        <View style={styles.descDetail}>
          <Text style={styles.descDetailText}>
            The official stated purpose of Facebook is to make the world more
            open and connected. Facebook's latest mission statement is that
            people use Facebook to stay connected with friends and family,
            discover what's going on in the world to share and express what
            matters to them. It majorly helps in generating leads, reaching your
            target audience, builds brand loyalty,improves SEO and increases web
            traffic
          </Text>
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
    width: SCREEN_HEIGHT * 0.45,
    borderRadius: 20,
  },
  descArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.02,
  },
  descDetail: {
    backgroundColor: color.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.4,
    paddingHorizontal: SCREEN_HEIGHT * 0.04,
    paddingVertical: SCREEN_WIDTH * 0.02,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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
