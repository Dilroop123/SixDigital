import React from 'react';
import normalize from 'react-native-normalize';
import color from '../../style/color';
import ProffesionalServices from './components/ProffesionalServices';
import MyProjects from './components/MyProjects';
import Advertisement from './components/Advertisement';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import {SCREEN_HEIGHT} from '../../style/fontSize';

const Home = () => {
  return (
    <View style={styles.container}>
      <MyProjects
        headerComponent={
          <ProffesionalServices
            footerComponent={
              <Header
                leftLabel="My Projects"
                rightLabel="See all"
                style={{marginBottom: SCREEN_HEIGHT * 0.02}}
              />
            }
          />
        }
        footerComponent={<Advertisement />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
    padding: normalize(15),
  },
});
