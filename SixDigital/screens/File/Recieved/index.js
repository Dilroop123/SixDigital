/* eslint-disable react-native/no-inline-styles */

import React from 'react';

import {
  Dimensions,
  Pressable,
  Platform,
  StyleSheet,
  FlatList,
  Image,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RNFS from 'react-native-fs';
import color from '../../../style/color';
import globalStyles from '../../../style/globalStyles';
import * as FileAction from '../../../store/actions/FileAction';
import RNFetchBlob from 'rn-fetch-blob';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Recieved = ({navigation}) => {
  const dispatch = useDispatch();
  const fileDAta = useSelector(state => state.file.FileData);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      //  setLoader(true);  check in voozoo

      dispatch(FileAction.getFiles('60cba181b565373c8128e8e8'));
    });
  }, [dispatch, navigation]);

  const showDocument = async file => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const {dirs} = RNFetchBlob.fs;
        const dirToSave =
          Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
        const configfb = {
          fileCache: true,
          addAndroidDownloads: {
            path: dirToSave + '/' + file.image.name,
            description: 'downloading file...',
            notification: true,
            // useDownloadManager works with Android only
            useDownloadManager: true,
          },
        };
        const configOptions = Platform.select({
          ios: {
            fileCache: configfb.fileCache,
            title: configfb.title,
            path: configfb.path,
            appendExt: 'pdf',
          },
          android: configfb,
        });

        RNFetchBlob.config(configOptions)
          .fetch('GET', file.image.publicUrl, {})
          .then(res => {
            if (Platform.OS === 'ios') {
              RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
              RNFetchBlob.ios.previewDocument(configfb.path);
            }
            if (Platform.OS === 'android') {
              //TOAST ADDED TO NOTIFICATION PANEL

              RNFetchBlob.android.actionViewIntent(
                res.path(),
                file?.image?.mimeType || 'application/pdf',
              );
            }
          })
          .catch(e => {});
      } else {
        // TOAST PERMISSION DENIED
      }
    } else {
      const {dirs} = RNFetchBlob.fs;
      const dirToSave =
        Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir;
      const configfb = {
        fileCache: true,
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: file.image.name,
        path: `${dirToSave}/${file.image.name}`,
      };
      const configOptions = Platform.select({
        ios: {
          fileCache: configfb.fileCache,
          title: configfb.title,
          path: configfb.path,
          appendExt: 'pdf',
        },
        android: configfb,
      });

      RNFetchBlob.config(configOptions)
        .fetch('GET', file.image.publicUrl, {})
        .then(res => {
          if (Platform.OS === 'ios') {
            RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64');
            RNFetchBlob.ios.previewDocument(configfb.path);
          }
          if (Platform.OS === 'android') {
            //showSnackbar('File downloaded');

            RNFetchBlob.android.actionViewIntent(
              res.path(),
              file?.image?.mimeType || 'application/pdf',
            );
            console.log('File downloaded');
          }
          console.log('The file saved to ', res.data);
        })
        .catch(e => {
          console.log('The file saved to ERROR', e.message);
        });
    }
  };

  const _renderItem = ({item: file}) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.white,
        padding: 15,
        borderRadius: 5,
        justifyContent: 'space-between',
        ...globalStyles.shadow,
      }}>
      <Image
        style={{
          height: SCREEN_HEIGHT * 0.04,
          width: SCREEN_HEIGHT * 0.04,
        }}
        source={require('../../../assets/fileFormats/pdf.png')}
      />
      <View>
        <Text style={{color: 'gray'}}>{file?.image?.name}</Text>
        <View style={{marginTop: 5}}>
          <Text style={{color: color.primary}}>{file?.name}</Text>
        </View>
      </View>
      <Pressable onPress={() => showDocument(file)}>
        <Text>View</Text>
      </Pressable>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={fileDAta?.data}
        renderItem={_renderItem}
        keyExtractor={item => item._id}
        ListFooterComponent={<View style={{height: SCREEN_HEIGHT * 0.3}} />}
      />
    </View>
  );
};

export default Recieved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});
