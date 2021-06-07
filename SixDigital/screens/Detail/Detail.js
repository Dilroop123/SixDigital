import React from 'react';

import {
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

const Detail = ({navigation, route}) => {
  const {description} = route.params;
  const {barColor} = route.params;

  return <View style={styles.container}></View>;
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
