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
  SafeAreaView,
} from 'react-native';
import Header from './Header';

const DATA = [
  {
    key: '1',
    title: 'RUSTY DRIVE',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    key: '2',
    title: 'SABOR MORENO',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
  {
    key: '3',
    title: '0 MESTRE PUB',
    image:
      'https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg',
  },
];

const _renderItem = ({item}) => (
  <TouchableOpacity>
    <View style={styles.proffesion} elevation={5}>
      <View>
        <Image
          style={styles.profImg}
          source={{
            uri: 'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg',
          }}
        />
      </View>
      <View style={{marginHorizontal: '3%', flex: 1}}>
        <Text style={styles.profTitle}>Video Shoot</Text>
        <Text style={styles.profDesc}>
          A time-lapse apps or camera is one of the best tools for creating
          videos.....
        </Text>
        <View style={{flexDirection: 'row', marginTop: '4%'}}>
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
  </TouchableOpacity>
);

const MyProjects = ({headerComponent, footerComponent}) => {
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
    marginBottom: '5%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    borderRadius: 7,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  profImg: {
    height: 110,
    width: 130,
    borderRadius: 5,
  },
  profTitle: {
    color: color.purple,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profDesc: {
    color: color.grey,
    marginTop: '5%',
    fontSize: 14,
    textAlign: 'justify',
  },
});
