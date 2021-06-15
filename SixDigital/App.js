import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MianStack from './navigation/navigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <MianStack />
    </NavigationContainer>
  );
};

export default App;
