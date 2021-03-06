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
import AppHeader from '../../../components/AppHeader';
import SearchBar from '../../../components/SearchBar';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const ProffesionalServices = ({
  footerComponent,
  ProffesionalServicesData,
  onPress,
}) => {
  const _renderItem = ({item: service}) => (
    <Pressable style={styles.services} onPress={() => onPress(service)}>
      <View style={styles.serviceIconArea}>
        <Image
          style={{
            height: SCREEN_HEIGHT * 0.1,
            width: SCREEN_HEIGHT * 0.1,
          }}
          source={{uri: service?.image?.publicUrl}}
        />
      </View>

      <Text style={styles.serviceText}>{service.name}</Text>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <AppHeader />
      <SearchBar style={{marginVertical: SCREEN_HEIGHT * 0.01}} />
      <Header
        leftLabel=" Popular Proffesional Services"
        rightLabel="See all"
        style={{marginVertical: SCREEN_HEIGHT * 0.02}}
      />
      <View>
        <FlatList
          data={ProffesionalServicesData}
          renderItem={_renderItem}
          keyExtractor={item => item._id}
          numColumns={3}
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
