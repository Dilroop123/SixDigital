/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Recieved = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Recieved</Text>
    </View>
  );
};

export default Recieved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
