/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import normalize from 'react-native-normalize';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../../style/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../../style/globalStyles';
import {FlatList} from 'react-native';
import {Pressable} from 'react-native';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../../style/fontSize';

const Advertisement = ({advertisementData}) => {
  const _renderItem = ({item: service}) => (
    <Pressable
      style={{
        flexDirection: 'column',
        marginTop: SCREEN_HEIGHT * 0.02,
      }}>
      <View style={styles.advertisement}>
        <View
          style={{
            backgroundColor: '#f1f1f2',
            flex: 1.5,
            padding: SCREEN_WIDTH * 0.06,
          }}>
          <Text style={styles.adTitle}>{service?.title}</Text>
          <Text style={{...styles.adDesc, textAlign: 'center'}}>
            {service?.description}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: '3%',
            flex: 1,
            padding: SCREEN_WIDTH * 0.06,
          }}>
          <View
            style={{
              backgroundColor: '#00afef',
              borderRadius: normalize(15),
              padding: normalize(3),
              position: 'absolute',
              right: 0,
              top: 5,
              zIndex: 1,
            }}>
            <MaterialIcons name="chevron-right" color={color.white} size={15} />
          </View>
          <Text
            style={{
              color: color.grey,
              fontSize: SCREEN_HEIGHT * 0.022,
              textAlign: 'right',
            }}>
            Now{' '}
            <Text style={{color: color.primary, fontWeight: 'bold'}}>
              &#x24; {service?.real_cost}
            </Text>
          </Text>
          <Text
            style={{
              color: color.grey,
              fontSize: SCREEN_HEIGHT * 0.019,
              textAlign: 'right',
            }}>
            Before{' '}
            <Text
              style={{
                color: color.grey,
                fontWeight: 'bold',
                textDecorationLine: 'line-through',
              }}>
              &#x24; {service?.actual_cost}
            </Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={advertisementData}
        renderItem={_renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Advertisement;

const styles = StyleSheet.create({
  container: {
    marginBottom: 160,
  },
  advertisement: {
    flexDirection: 'row',
    backgroundColor: '#fff',

    ...globalStyles.shadow,
  },
  adTitle: {
    color: color.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  adDesc: {
    color: color.grey,
    fontSize: 14,
    height: SCREEN_HEIGHT * 0.02,
  },
});
