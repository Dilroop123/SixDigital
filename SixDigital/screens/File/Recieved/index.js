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
import FileViewer from 'react-native-file-viewer';
import color from '../../../style/color';
import globalStyles from '../../../style/globalStyles';
import * as FileAction from '../../../store/actions/FileAction';

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
    console.log('in function');
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const localFile = `${RNFS.DocumentDirectoryPath}/${file?.name}`;
        const options = {
          fromUrl: file?.image?.publicUrl,
          toFile: file?.name,
        };
        RNFS.downloadFile(options)
          .promise.then(() => FileViewer.open(localFile))
          .then(() => {
            // success
          })
          .catch(error => {
            // error
          });
      } else {
        console.log('you denied');
      }
    } else {
      const localFile = `${RNFS.DocumentDirectoryPath}/${file?.name}`;
      const options = {
        fromUrl: file?.image?.publicUrl,
        toFile: file?.name,
      };
      RNFS.downloadFile(options)
        .promise.then(() => FileViewer.open(localFile))
        .then(() => {
          // success
        })
        .catch(error => {
          // error
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
