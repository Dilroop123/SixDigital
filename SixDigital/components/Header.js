/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import normalize from 'react-native-normalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../style/color';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const SCREEN_WIDTH = Dimensions.get('window').width;

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <MaterialIcons name="arrow-back-ios" style={styles.backIcon} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headerTitle}>6 DIGITAL</Text>
      </View>
    </View>
  );
};

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
  titleArea: {},
  headerTitle: {
    fontWeight: 'bold',
    color: color.primary,
    fontSize: 26,
    flex: 1,
    paddingRight: 40,
    textAlign: 'center',
  },
});
