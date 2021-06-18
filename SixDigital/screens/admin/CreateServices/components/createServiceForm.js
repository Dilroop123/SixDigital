/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {normalize} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../../../style/globalStyles';
import * as UserActions from '../../../../store/actions/UserActions';
import color from '../../../../style/color';
import TextField from '../../../../components/TextField';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../../style/fontSize';

const CreateServiceForm = ({navigation}) => {
  const [serviceName, setServiceName] = React.useState('');
  const [lastName, setLasttName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const onPressHandler = () => {
    dispatch(UserActions.loginUser(email, password));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Create Service</Text>
      <ScrollView>
        <View style={styles.requestServiceContainer}>
          <View style={{marginVertical: SCREEN_HEIGHT * 0.015}}>
            <TextField
              value={serviceName}
              onChangeText={setServiceName}
              label="Service Name"
            />
          </View>
          <View>
            <TextField
              value={phone}
              onChangeText={setPhone}
              label="Description"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginVertical: SCREEN_HEIGHT * 0.015,
            }}>
            <TextField
              value={serviceName}
              style={styles.col6input}
              onChangeText={setServiceName}
              label="Changes"
            />
            <TextField
              value={lastName}
              style={styles.col6input}
              onChangeText={setLasttName}
              label="Upload Image"
            />
          </View>
          <View style={styles.inputfieldContainer}>
            <Button
              title="Submit"
              color={color.primary}
              onPress={onPressHandler}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateServiceForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SCREEN_WIDTH * 0.05,
  },
  pageTitle: {
    fontWeight: 'bold',
    color: color.primary,
    marginVertical: SCREEN_HEIGHT * 0.015,
    fontSize: 20,
  },
  requestServiceContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: color.lightBlue,
    borderRadius: normalize(8),
    marginVertical: SCREEN_HEIGHT * 0.02,
    padding: SCREEN_WIDTH * 0.1,
  },
  inputfieldContainer: {
    marginVertical: SCREEN_HEIGHT * 0.03,
  },
  col6input: {
    width: SCREEN_WIDTH * 0.4,
    padding: SCREEN_WIDTH * 0.01,
  },
  input: {
    height: SCREEN_HEIGHT * 0.05,
    borderWidth: 1,
    borderColor: color.grey,
    backgroundColor: color.white,
    borderRadius: normalize(10),
  },
});
