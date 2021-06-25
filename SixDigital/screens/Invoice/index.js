/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserDetail} from '../../components/getUserDetail';
import * as FileAction from '../../store/actions/FileAction';
import FileItem from './component/FileItem';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Invoice = ({route, navigation}) => {
  const fileDAta = useSelector(state => state.file.InvoiceData);
  const dispatch = useDispatch();
  const {userid} = getUserDetail();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //  setLoader(true);  check in voozoo

      dispatch(FileAction.getInvoice(userid));
    });
  }, [dispatch, navigation, userid]);

  const _renderItem = ({item: document}) => <FileItem document={document} />;

  return (
    <View style={styles.container}>
      <Text style={{color: 'gray'}}>View your Invoice</Text>

      <FlatList
        data={fileDAta?.data}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        contentContainerStyle={{marginTop: SCREEN_HEIGHT * 0.05}}
        ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.3}} />}
      />
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SCREEN_WIDTH * 0.05,
  },
});
