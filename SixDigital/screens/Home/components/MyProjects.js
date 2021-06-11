/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../../style/color';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {Pressable} from 'react-native';
import globalStyles from '../../../style/globalStyles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import normalize from 'react-native-normalize';

const DATA = [
  {
    key: '1',
    title: 'RUSTY DRIVE',
    image: require('../../../assets/myproject.png'),
  },
  {
    key: '2',
    title: 'SABOR MORENO',
    image: require('../../../assets/myproject.png'),
  },
  {
    key: '3',
    title: '0 MESTRE PUB',
    image: require('../../../assets/myproject.png'),
  },
];

const MyProjects = ({headerComponent, footerComponent, onPress}) => {
  const _renderItem = ({item}) => (
    <Pressable onPress={() => onPress(item)}>
      <View style={styles.proffesion}>
        <View>
          <Image style={styles.profImg} source={item.image} />
        </View>
        <View style={{marginHorizontal: '3%', flex: 1}}>
          <Text style={styles.profTitle}>Video Shoot</Text>
          <Text style={styles.profDesc}>
            A time-lapse apps or camera is one of the best tools for creating
            videos...
          </Text>
          <View style={{flexDirection: 'row', marginTop: '2%'}}>
            <Text style={{color: color.purple, fontSize: 14, flex: 1}}>
              Status : <Text style={{color: color.successText}}>Active</Text>
            </Text>
            <Text style={{color: color.grey, fontSize: 14}}>
              from{' '}
              <Text style={{color: color.purple, fontWeight: 'bold'}}>
                &#x24; 100
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        keyExtractor={item => item.key}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
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

  proffesion: {
    marginBottom: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
    padding: SCREEN_HEIGHT * 0.01,
    borderRadius: SCREEN_HEIGHT * 0.02,
    backgroundColor: '#fff',
    ...globalStyles.shadow,
  },
  profImg: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_HEIGHT * 0.12,
    borderRadius: normalize(5),
  },
  profTitle: {
    color: color.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profDesc: {
    color: color.grey,
    marginTop: '2%',
    fontSize: 14,
    textAlign: 'justify',
  },
});
