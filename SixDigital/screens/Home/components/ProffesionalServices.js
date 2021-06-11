/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Text,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  FlatList,
} from 'react-native';
import color from '../../../style/color';
import Header from './Header';
import AppLogo from '../../../components/AppLogo';
import SearchBar from '../../../components/SearchBar';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
const DATA = [
  {
    id: '1',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '2',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '3',
    title: '0 MESTRE PUB',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '4',
    title: 'GRILL 54 CHEF',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '5',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    id: '6',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
];

const _renderItem = ({item: service}) => (
  <Pressable style={styles.services}>
    <View style={styles.serviceIconArea}>
      <Image
        style={{
          height: SCREEN_HEIGHT * 0.1,
          width: SCREEN_HEIGHT * 0.1,
        }}
        source={require('../../../assets/fbadd.png')}
      />
    </View>

    <Text style={styles.serviceText}>{service.title}</Text>
  </Pressable>
);

const ProffesionalServices = ({headercomponet, footerComponent}) => {
  return (
    <View style={styles.container}>
      <AppLogo />

      <SearchBar style={{marginVertical: SCREEN_HEIGHT * 0.01}} />
      <Header
        leftLabel=" Popular Proffesional Services"
        rightLabel="See all"
        style={{marginVertical: SCREEN_HEIGHT * 0.02}}
      />

      <View>
        <FlatList
          data={DATA}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          ListHeaderComponent={headercomponet}
          ListFooterComponent={footerComponent}
        />
      </View>
    </View>
  );
};

export default ProffesionalServices;

const styles = StyleSheet.create({
  services: {
    backgroundColor: color.lightBlue,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.02,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  serviceIconArea: {
    backgroundColor: color.white,
    borderRadius: SCREEN_HEIGHT * 0.01,
    alignItems: 'center',
  },
  serviceText: {
    textAlign: 'center',
    marginTop: 8,
    color: color.grey,
  },
});
