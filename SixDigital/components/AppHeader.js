/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions, Text, Pressable, StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../style/fontSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../style/color';

const AppHeader = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable>
        <MaterialIcons name="arrow-back-ios" style={styles.backIcon} />
      </Pressable>
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

export default AppHeader;
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  backIcon: {
    fontSize: 26,
    color: color.primary,
    marginTop: SCREEN_HEIGHT * 0.006,
    width: SCREEN_WIDTH * 0.3,
  },
});
