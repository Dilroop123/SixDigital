/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import normalize from 'react-native-normalize';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import * as CreditActions from '../../../store/actions/CreditAction';
import {getUserDetail} from '../../../components/getUserDetail';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MARGIN_LEFT = SCREEN_WIDTH * 0.03;
const MARGIN_VERTICAL = SCREEN_HEIGHT * 0.01;

const CreditCardModal = ({title, selectedIconId, setModalVisible}) => {
  const [clientName, setCLientName] = React.useState('');
  const [fullAddress, setFullAddress] = React.useState('');
  const [postalCode, setPostalCode] = React.useState('');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [holderName, setHolderName] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvv, setCvv] = React.useState('');

  const dispatch = useDispatch();
  const [userId, setUserId] = React.useState();
  async function getUserId() {
    setUserId(await getUserDetail());
  }

  React.useEffect(() => {
    getUserId();
  }, []);
  const onpressHandler = () => {
    dispatch(
      CreditActions.sendCreditCardCredentials(
        title,
        clientName,
        fullAddress,
        postalCode,
        mobileNumber,
        holderName,
        cardNumber,
        expiry,
        cvv,
        userId,
        selectedIconId,
      ),
    );
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TextField
          value={clientName}
          onChangeText={setCLientName}
          label="Client Name"
          flex={1}
        />

        <TextField
          value={fullAddress}
          onChangeText={setFullAddress}
          label="Full Address"
          flex={1}
          style={{marginLeft: MARGIN_LEFT}}
        />
      </View>
      <View style={{flexDirection: 'row', marginVertical: MARGIN_VERTICAL}}>
        <TextField
          value={postalCode}
          onChangeText={setPostalCode}
          label="Postal Code"
          flex={1}
        />

        <TextField
          value={mobileNumber}
          onChangeText={setMobileNumber}
          label="Mobile Number"
          flex={1}
          style={{marginLeft: MARGIN_LEFT}}
        />
      </View>
      <TextField
        value={holderName}
        onChangeText={setHolderName}
        label="Credit Card Holder Name"
        style={{marginVertical: MARGIN_VERTICAL}}
      />

      <TextField
        value={cardNumber}
        onChangeText={setCardNumber}
        label="Card Number"
        style={{marginVertical: MARGIN_VERTICAL}}
      />
      <View style={{flexDirection: 'row', marginVertical: MARGIN_VERTICAL}}>
        <TextField
          value={expiry}
          onChangeText={setExpiry}
          label="Expiry"
          flex={1}
        />

        <TextField
          value={cvv}
          onChangeText={setCvv}
          label="CVV"
          flex={1}
          style={{marginLeft: MARGIN_LEFT}}
        />
      </View>
      <View style={{marginTop: 15}}>
        <Button onPress={() => onpressHandler()} />
      </View>
    </View>
  );
};

export default CreditCardModal;

const styles = StyleSheet.create({
  container: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.68,
  },
});
