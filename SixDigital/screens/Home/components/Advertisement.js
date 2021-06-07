/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import normalize from 'react-native-normalize';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../../../style/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../../style/globalStyles';

const Advertisement = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.advertisement} elevation={5}>
          <View
            style={{
              backgroundColor: '#f1f1f2',
              flex: 1.5,
              padding: 25,
            }}>
            <Text style={styles.adTitle}>Youtube Marketing</Text>
            <Text style={{...styles.adDesc, textAlign: 'center'}}>
              or camera is one of ....
            </Text>
          </View>
          <View style={{marginHorizontal: '3%', flex: 1, padding: 25}}>
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
              <MaterialIcons
                name="chevron-right"
                color={color.white}
                size={20}
              />
            </View>
            <Text style={{color: color.grey, fontSize: 20, textAlign: 'right'}}>
              from{' '}
              <Text style={{color: color.primary, fontWeight: 'bold'}}>
                &#x24; 100
              </Text>
            </Text>
            <Text style={{color: color.grey, fontSize: 14, textAlign: 'right'}}>
              Discount{' '}
              <Text style={{color: color.grey, fontWeight: 'bold'}}>
                &#x24; 100
              </Text>
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Advertisement;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  advertisement: {
    flexDirection: 'row',
    borderRadius: 7,
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
  },
});
