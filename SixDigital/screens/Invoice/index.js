/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {StyleSheet, View, FlatList, Text} from 'react-native';
import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import normalize from 'react-native-normalize';
import {useDispatch, useSelector} from 'react-redux';
import * as FileAction from '../../store/actions/FileAction';
import globalStyles from '../../style/globalStyles';
import Status from './components/Status';
import {Pressable} from 'react-native';
import {getUserDetail} from '../../components/getUserDetail';
import AppHeader from '../../components/AppHeader';
// import * as ServiceAction from '../../store/actions/ServiceAction';

const Invoice = ({navigation, route}) => {
  const [userId, setUserId] = React.useState(null);

  async function getUserId() {
    setUserId(await getUserDetail());
  }

  React.useEffect(() => {
    getUserId();
  }, []);

  const invoiceData = useSelector(state => state.file.InvoiceData);
  const [invoices, setInvoices] = React.useState();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(FileAction.getInvoice(userId));
  }, [userId]);

  React.useEffect(() => {
    setInvoices(invoiceData?.data);
  }, [invoiceData]);

  return (
    <View style={styles.container}>
      <View style={{flex: 1, margin: SCREEN_WIDTH * 0.05}}>
        <AppHeader />
        <View style={{flexDirection: 'row', margin: SCREEN_HEIGHT * 0.02}}>
          <Text style={{flex: 1, color: color.primary, fontWeight: 'bold'}}>
            CLIENT
          </Text>
          <Text style={{flex: 1, color: color.primary, fontWeight: 'bold'}}>
            DATE
          </Text>
          <Text style={{flex: 1, color: color.primary, fontWeight: 'bold'}}>
            STATUS
          </Text>
          <Text style={{flex: 1, color: color.primary, fontWeight: 'bold'}}>
            AMOUNT
          </Text>
        </View>
        <FlatList
          data={invoices}
          extraData={invoices}
          showsVerticalScrollIndicator
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                navigation.navigate('InvoiceDetail', {invoice: item})
              }
              style={{
                flexDirection: 'row',
                backgroundColor: color.white,
                marginTop: SCREEN_HEIGHT * 0.001,
                padding: SCREEN_HEIGHT * 0.02,
                marginBottom: SCREEN_HEIGHT * 0.01,
                alignItems: 'center',

                borderRadius: normalize(10),
                ...globalStyles.shadow,
              }}>
              <Text style={{flex: 1, color: color.primary}}>
                {item?.user_id?.first_name}
              </Text>
              <Text style={{flex: 1, color: color.grey}}>
                {item?.invoice_date}
              </Text>
              <View style={{flex: 1}}>
                <Status status={item?.status} />
              </View>

              <Text style={{flex: 1, textAlign: 'center'}}>
                $ {item?.total}
              </Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: color.white,
  },
});
