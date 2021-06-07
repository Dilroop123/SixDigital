/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import color from '../../../style/color';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IconList = ({navigation, route, HeaderComponent, onPress}) => {
  const flatListData = [
    {
      key: '1',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '2',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '3',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '4',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '5',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '6',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '7',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '8',
      title: 'Facebook',
      icon: require('../../../assets/facebook.jpg'),
    },
    {
      key: '9',
      title: 'creditCard',
      icon: require('../../../assets/facebook.jpg'),
    },
  ];
  const renderItems = ({item: icon}) => (
    <TouchableWithoutFeedback onPress={() => onPress(icon.title)}>
      <View
        style={{
          flex: 1,
          marginTop: SCREEN_HEIGHT * 0.03,
          marginLeft: SCREEN_WIDTH * 0.05,
        }}>
        <Image
          style={{height: SCREEN_HEIGHT * 0.1, width: SCREEN_HEIGHT * 0.1}}
          source={icon.icon}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View>
      <FlatList
        numColumns={3}
        data={flatListData}
        keyExtractor={item => item.key}
        renderItem={renderItems}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={
          <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
            <Text style={{fontWeight: 'bold', color: color.primary}}>
              Share Credentials Safely
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default IconList;
