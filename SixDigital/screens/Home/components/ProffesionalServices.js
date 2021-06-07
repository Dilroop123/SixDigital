/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  FlatList,
} from 'react-native';
import color from '../../../style/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from './Header';
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

const _renderItem = ({item}) => (
  <View style={styles.services}>
    <TouchableOpacity>
      <View style={styles.serviceIconArea}>
        <FontAwesome name="photo" color={color.purple} size={56} />
      </View>
    </TouchableOpacity>
    <Text style={styles.serviceText}>{item.title}</Text>
  </View>
);

const ProffesionalServices = ({headercomponet, footerComponent}) => {
  return (
    <View style={styles.container}>
      <Header leftLabel=" Popular Proffesional Services" rightLabel="See all" />
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
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '5%',
  },
  logoText: {
    color: color.purple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },
  mainServiceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: '10%',
  },
  services: {
    backgroundColor: '#eef2fa',
    borderRadius: 7,
    padding: '3%',
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  serviceIconArea: {
    backgroundColor: color.white,
    borderRadius: 7,
    height: 100,
    alignItems: 'center',
    paddingTop: '20%',
  },
  serviceText: {
    textAlign: 'center',
    marginTop: 8,
    color: color.grey,
  },
});
