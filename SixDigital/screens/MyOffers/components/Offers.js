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
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';

const Offers = ({headercomponet, offersData, onPress}) => {
  const _renderItem = ({item: offer}) => (
    <View style={styles.offers}>
      <Image
        style={styles.offersImgArea}
        source={{uri: offer?.image?.publicUrl}}
      />
      <Text style={styles.offerTitle}>{offer.title}</Text>
      <Text style={styles.offerText}>{offer?.description}</Text>
      <View style={styles.offerPriceArea}>
        <Text style={styles.offerPrice}>$ 100</Text>
        <View
          style={{
            flexGrow: 1,
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 12, color: color.grey}}>Before </Text>
            <Text
              style={{
                fontSize: 12,
                color: color.grey,
                textDecorationLine: 'line-through',
              }}>
              100
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <AppHeader onPress={onPress} />
      <View>
        <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
          <Header leftLabel="My Offers" />
        </View>

        <View
          style={{
            marginVertical: SCREEN_HEIGHT * 0.02,
          }}>
          <View style={{width: '100%'}}>
            <Image
              source={require('../../../assets/myoffer/myoffer.png')}
              style={{height: SCREEN_HEIGHT * 0.15, width: undefined}}
            />
          </View>
        </View>

        <FlatList
          data={offersData}
          renderItem={_renderItem}
          keyExtractor={item => item._id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headercomponet}
          ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.5}} />}
        />
      </View>
    </View>
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  offers: {
    backgroundColor: color.lightBlue,
    borderRadius: SCREEN_HEIGHT * 0.01,
    padding: SCREEN_WIDTH * 0.02,
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  offersImgArea: {
    backgroundColor: color.white,
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.4,
    borderRadius: SCREEN_HEIGHT * 0.01,
    alignItems: 'center',
  },
  offerTitle: {
    color: color.primary,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: SCREEN_HEIGHT * 0.01,
  },
  offerText: {
    textAlign: 'center',
    marginTop: 8,
    color: color.grey,
    lineHeight: SCREEN_HEIGHT * 0.02,
    marginVertical: SCREEN_HEIGHT * 0.015,
  },
  offerPriceArea: {
    flexDirection: 'row',
    backgroundColor: color.white,
    borderRadius: 4,
    //  justifyContent: 'center',
    alignItems: 'center',
    padding: SCREEN_HEIGHT * 0.01,
  },
  offerPrice: {
    color: color.primary,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
