import React from 'react';

import {
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>This is home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('File')}
      />
    </View>
  );
};

export default Home;
