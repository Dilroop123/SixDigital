/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import normalize from 'react-native-normalize';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MARGIN_LEFT = SCREEN_WIDTH * 0.03;
const MARGIN_VERTICAL = SCREEN_HEIGHT * 0.01;

const CreditCardModal = ({navigation}) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TextField
          value={value}
          onChangeText={setValue}
          label="Client Name"
          flex={1}
        />

        <TextField
          value={value}
          onChangeText={setValue}
          label="Full Address"
          flex={1}
          style={{marginLeft: MARGIN_LEFT}}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: MARGIN_VERTICAL}}>
        <TextField
          value={value}
          onChangeText={setValue}
          label="Postal Code"
          flex={1}
        />

        <TextField
          value={value}
          onChangeText={setValue}
          label="Mobile Number"
          flex={1}
          style={{marginLeft: MARGIN_LEFT}}
        />
      </View>
      <TextField
        value={value}
        onChangeText={setValue}
        label="Credit Card Holder Name"
        style={{marginVertical: MARGIN_VERTICAL}}
      />

      <TextField
        value={value}
        onChangeText={setValue}
        label="Card Number"
        style={{marginVertical: MARGIN_VERTICAL}}
      />
      <View style={{flexDirection: 'row', marginVertical: MARGIN_VERTICAL}}>
        <TextField
          value={value}
          onChangeText={setValue}
          label="Expiry"
          flex={1}
        />

        <TextField
          value={value}
          onChangeText={setValue}
          label="CVV"
          flex={1}
          style={{marginLeft: MARGIN_LEFT}}
        />
      </View>
      <View style={{marginTop: 15}}>
        <Button />
      </View>
    </View>
  );
};

export default CreditCardModal;

const styles = StyleSheet.create({
  container: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.62,
  },
});
