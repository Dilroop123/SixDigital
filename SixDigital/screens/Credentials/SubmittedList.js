/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import color from '../../style/color';
import globalStyles from '../../style/globalStyles';
import normalize from 'react-native-normalize';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Label = ({text, value}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <Text style={{color: color.primary}}>{text}</Text>
      </View>
      <View style={{flex: 2}}>
        <Text style={{color: color.darkGrey, fontSize: normalize(12)}}>
          {':  ' + value}
        </Text>
      </View>
    </View>
  );
};

const Button = ({iconColor, icon}) => {
  return (
    <View
      style={{
        backgroundColor: iconColor,
        borderRadius: normalize(5),
        padding: normalize(3),
      }}>
      <MaterialIcons name={icon} color="white" size={SCREEN_HEIGHT * 0.02} />
    </View>
  );
};

const SubmittedList = ({navigation, route, HeaderComponent}) => {
  const flatListData = [
    {
      key: '1',
      title: 'xyz password',
      email: 'dilroop@applauz.me',
      password: '123456',
      icon: require('../../assets/facebook.jpg'),
    },
    {
      key: '2',
      title: 'xyz password',
      email: 'dilroop@applauz.me',
      password: '123456',
      icon: require('../../assets/facebook.jpg'),
    },
    {
      key: '3',
      title: 'xyz password',
      email: 'dilroop@applauz.me',
      password: '123456',
      icon: require('../../assets/facebook.jpg'),
    },
    {
      key: '4',
      title: 'xyz password',
      email: 'dilroop@applauz.me',
      password: '123456',
      icon: require('../../assets/facebook.jpg'),
    },
    {
      key: '5',
      title: 'xyz password',
      email: 'dilroop@applauz.me',
      password: '123456',
      icon: require('../../assets/facebook.jpg'),
    },
  ];
  const renderItems = ({item: icon}) => (
    <TouchableWithoutFeedback>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'white',
          marginTop: SCREEN_HEIGHT * 0.01,
          padding: normalize(15),
          flex: 1,
          alignItems: 'center',
          borderRadius: normalize(10),
          ...globalStyles.shadow,
        }}>
        <Image
          style={{height: SCREEN_HEIGHT * 0.05, width: SCREEN_HEIGHT * 0.05}}
          source={icon.icon}
        />
        <View
          style={{
            height: '100%',
            width: 1,
            backgroundColor: color.lightGrey,
            marginHorizontal: SCREEN_WIDTH * 0.05,
          }}
        />
        <View style={{flex: 1}}>
          <Label text="Title" value="xyz passowrd" />
          <Label text="Email id" value="dilroop@applauz.me" />
          <Label text="password" value="123456" />
        </View>
        <View style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <Button iconColor="red" icon="delete-forever" />
          <View style={{marginTop: SCREEN_HEIGHT * 0.01}}>
            <Button iconColor={color.skyBlue} icon="edit" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flatListData}
        keyExtractor={item => item.key}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={HeaderComponent}
      />
    </View>
  );
};

export default SubmittedList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageaspectratio: {
    // flex: 1,
    width: undefined,
    height: undefined,
    // aspectRatio: 1,
    // resizeMode: 'contain',
  },
});
