/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {SCREEN_HEIGHT} from '../../style/fontSize';
import normalize from 'react-native-normalize';
import Footer from './Footer';
import color from '../../style/color';
import HeaderText from '../../components/HeaderText';
import globalStyles from '../../style/globalStyles';
import moment from 'moment';

const InvoiceDetail = ({navigation, route}) => {
  const {invoice} = route.params;
  const [filePath, setFilePath] = React.useState();
  const onBackPress = () => {
    navigation.pop();
  };

  const pdfServices = invoice?.services?.map(
    (item, i) =>
      `<div style="display:flex;justify-content:space-between;border: 2px dotted gray; padding-right: 15px;
 padding-left:15px;">

<p style="color:#3E4095"><b>${item?.name}</b></p>

<p style="color:#3E4095"><b>${item?.price}</b></p>
</div>`,
  );

  const isPermitted = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs access to Storage data',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.log('Write permission err', err);
        return false;
      }
    } else {
      return true;
    }
  };

  const createPDF = async () => {
    if (await isPermitted()) {
      let options = {
        //Content to print
        html: `
        <html>
        <head>
        
        </head>
        <body>
        
        <h3 style="text-align: center;">INVOICE</h3>
        
        <p> ${'No. #' + invoice?._id.substring(0, 5)}</p>
        <p><b>${invoice?.user_id?.first_name}</b></p>
        <p>${invoice?.user_id?.email}</p>
        
        ${pdfServices}
        
        
        <p style="color:#3E4095"><b>Date</b></p>
        <div style="display:flex;justify-content:space-between;border: 2px dotted gray; padding-right: 15px;
          padding-left:15px;margin-top:20px;">
        <div>
        <p style="color:#3E4095"><b>Invoice Date</b></p>
        <p>${invoice?.invoice_date}</p>
        </div>
        
        <div>
        <p style="color:#3E4095"><b>Due Date</b></p>
        <p>${invoice?.due_date}</p>
        </div>
        </div>
        
       
        
        <div style="display:flex;justify-content:space-between; padding-right: 15px;
          padding-left:15px;margin-top:35px;background-color:#EEF2FA">
        <div>
        
        <p>Sub Total</p>
        <p>Inclusive Tax(13%)</p>
        <p style="color:#3E4095"><b>Total</b></p>
        </div>
        
        <div>
        <p>$ ${invoice?.sub_total}</p>
        <p>$ ${invoice?.tax_value}</p>
        <p style="color:#3E4095"><b>$ ${invoice?.total}</b></p>
        </div>
        </div>
        
        </body>
        </html>
        `,
        //File Name
        fileName: 'invoice',
        directory: 'Documents',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      setFilePath(file.filePath);
      Toast.show('Dowloaded :Go to ' + file.filePath);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: color.primary,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: SCREEN_HEIGHT * 0.03,
        }}>
        Invoice Detail
      </Text>
      <View style={{marginBottom: SCREEN_HEIGHT * 0.01}}>
        <HeaderText text="Details" />
      </View>

      <FlatList
        data={invoice?.services}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: color.white,
              marginTop: SCREEN_HEIGHT * 0.001,
              padding: SCREEN_HEIGHT * 0.02,
              marginBottom: SCREEN_HEIGHT * 0.01,
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: normalize(10),
              ...globalStyles.shadow,
            }}>
            <Text>{item?.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>$ {item?.price}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item._id}
        ListHeaderComponent={
          <View style={{marginBottom: SCREEN_HEIGHT * 0.02}}>
            <Text style={{color: color.grey}}>
              {'No. #' + invoice?._id.substring(0, 5)}
            </Text>
            <Text style={{color: color.primary, fontWeight: 'bold'}}>
              {invoice?.user_id?.first_name}
            </Text>
            <Text style={{color: color.grey}}>{invoice?.user_id?.email}</Text>
          </View>
        }
        ListFooterComponent={
          <Footer
            invoice={invoice}
            onBackPress={onBackPress}
            downloadAsPdf={createPDF}
          />
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default InvoiceDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_HEIGHT * 0.03,
    backgroundColor: color.white,
  },
});
