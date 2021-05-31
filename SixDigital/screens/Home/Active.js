/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import {Card} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../../style/color';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Active = ({navigation}) => {
  return (
    <View>
      {/* <Card containerStyle={styles.cardcontainer}> */}
      <View style={{backgroundColor: 'white', padding: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexGrow: 1}}>
            <Text>Shoutout Ads</Text>
            <Text>Pending</Text>
          </View>
          <View style={{height: 40, width: 40}}>
            <Image
              style={styles.imagestyle}
              source={require('./../../assets/loudspeaker.png')}
            />
          </View>
        </View>

        <View
          style={{height: 10, backgroundColor: color.primary, marginTop: 20}}
        />
      </View>
      {/* </Card> */}
    </View>
  );
};

export default Active;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: wp('1.2%'),
  },
  cardcontainer: {
    marginHorizontal: wp('0.7%'),
    width: wp('31.1%'),
    padding: 0,
    marginTop: hp('0.8%'),
    backgroundColor: 'white',
  },
  imagestyle: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
  },
});
