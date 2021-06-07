import React from 'react';
import color from '../../style/color';


import SearchMenu from './components/SearchMenu';
import ProffesionalServices from './components/ProffesionalServices';
import MyProjects from './components/MyProjects';
import Advertisement from './components/Advertisement';

import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      <Animated.ScrollView showsVerticalScrollIndicator={false} style={{ margin:'5%'}} nestedScrollEnabled>
          <SearchMenu/>
          <ProffesionalServices/>
          <MyProjects/>       
          <Advertisement/>
     </Animated.ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor:color.white,
    flex:1,
    flexDirection:'column'
  },

});