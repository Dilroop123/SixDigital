/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Dimensions, StyleSheet, Image, Text, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import * as FileAction from '../../../store/actions/FileAction';
import FileViewer from 'react-native-file-viewer';
import Toast from '../../../components/Toast';
import color from '../../../style/color';
import Button from './Button';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Upload = ({navigation}) => {
  const [isShowToast, setIsShowToast] = React.useState(false);

  const dispatch = useDispatch();
  const uploadDocument = async () => {
    // Pick a single file
    setIsShowToast(false);
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res.uri, res.type, res.name, res.size);
      setIsShowToast(true);

      await dispatch(
        FileAction.sendFile(
          '60cba181b565373c8128e8e8',
          res,
          'This is the test',
        ),
      );
      await FileViewer.open(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      {isShowToast && <Toast message="upload success" />}

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
