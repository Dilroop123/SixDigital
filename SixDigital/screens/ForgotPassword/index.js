/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../../components/TextField';
import * as UserActions from '../../store/actions/UserActions';
import color from '../../style/color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../style/fontSize';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onPressHandler = () => {
    dispatch(UserActions.loginUser(email, password));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
        source={require('../../assets/login/login_bg.png')}>
        <ScrollView>
          <View style={styles.forgotPwdContainer}>
          <View style={styles.inputfieldContainer}>
              <TextField
                value={email}
                onChangeText={setEmail}
                label="Email"
                keyboardType="email"
                flex={1}
              />
            </View>
            <View style={styles.inputfieldContainer}>
              <TextField
                value={email}
                onChangeText={setEmail}
                label="Current Password"
                keyboardType="password"
                flex={1}
                secureTextEntry={true}
              />
            </View>
            <View  style={styles.inputfieldContainer}>
              <TextField
                value={email}
                onChangeText={setEmail}
                label="New Password"
                keyboardType="password"
                flex={1}
                secureTextEntry={true}
              />
            </View>
            <View  style={styles.inputfieldContainer}>
              <TextField
                value={password}
                onChangeText={setPassword}
                label="Confirm Password"
                keyboardType="password"
                secureTextEntry={true}
                flex={1}
              />
            </View>
            <View  style={styles.inputfieldContainer}>
              <Button
                title="Submit"
                color={color.primary}
                onPress={onPressHandler}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPwdContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between',
    paddingHorizontal: SCREEN_WIDTH * 0.1,
    marginVertical:SCREEN_HEIGHT * 0.2
  },
  inputfieldContainer:{
    marginVertical: SCREEN_HEIGHT * 0.02
  },
  input: {
    height: SCREEN_HEIGHT * 0.05,
    borderWidth: 1,
    borderColor: color.lightGrey,
  },
});
