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
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import * as FileAction from '../../../store/actions/FileAction';
import Toast from 'react-native-simple-toast';
import color from '../../../style/color';
import Button from './Button';
import FileItem from '../component/FileItem';
import {getUserDetail} from '../../../components/getUserDetail';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Upload = ({navigation}) => {
  const fileDAta = useSelector(state => state.file.FileData);
  const dispatch = useDispatch();
  const [userId, setUserId] = React.useState();
  async function getUserId() {
    setUserId(await getUserDetail());
  }

  React.useEffect(() => {
    getUserId();
  }, []);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //  setLoader(true);  check in voozoo

      dispatch(FileAction.getFiles(userId));
    });
  }, [dispatch, navigation, userId]);

  const userUploaded = fileDAta?.data?.filter(
    file => file?.send_type === 'userUploaded',
  );

  const uploadDocument = async () => {
    // Pick a single file

    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      // console.log(res.uri, res.type, res.name, res.size);
      Toast.show('Upload Success');

      await dispatch(
        FileAction.sendFile(userId, res, 'This is the test', 'userUploaded'),
      );
      await dispatch(FileAction.getFiles(userId));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  const _renderItem = ({item: document}) => <FileItem document={document} />;

  return (
    <View style={styles.container}>
      <Text style={{color: 'gray'}}>
        Upload your documents you want to share with us
      </Text>

      <View
        style={{
          borderRadius: 1,
          marginTop: SCREEN_HEIGHT * 0.02,
          borderStyle: 'dashed',
          borderWidth: 1,
          borderColor: color.primary,
        }}>
        <View
          style={{
            marginHorizontal: SCREEN_HEIGHT * 0.08,
            padding: SCREEN_HEIGHT * 0.02,
          }}>
          <Button onPress={uploadDocument} />
        </View>
      </View>
      <FlatList
        data={userUploaded}
        renderItem={_renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        contentContainerStyle={{marginTop: SCREEN_HEIGHT * 0.05}}
        ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.3}} />}
      />
    </View>
  );
};

export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: SCREEN_WIDTH * 0.05,
  },
});
