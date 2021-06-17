/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import TextField from '../../components/TextField';
import color from '../../style/color';
import * as UserActions from '../../store/actions/UserActions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLasttName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setCOnfirmPassword] = React.useState('');

  const onPressHander = () => {
    if (password === confirmPassword) {
      dispatch(
        UserActions.createUser(firstName, lastName, email, phone, password),
      );

      navigation.pop();
    } else {
      console.log('password mismatches');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
        source={require('../../assets/signup/signup_bg.png')}>
        <ScrollView>
          <View style={styles.loginContainer}>
            <View
              style={{
                marginTop: SCREEN_HEIGHT * 0.17,
                marginLeft: SCREEN_WIDTH * 0.06,
              }}>
              <Image
                source={require('../../assets/signup/signup.png')}
                style={styles.signupImg}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginVertical: SCREEN_HEIGHT * 0.03,
              }}>
              <TextField
                value={firstName}
                style={styles.col6input}
                onChangeText={setFirstName}
                label="First Name"
              />
              <TextField
                value={lastName}
                style={styles.col6input}
                onChangeText={setLasttName}
                label="Last Name"
              />
            </View>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.02}}>
              <TextField
                value={email}
                onChangeText={setEmail}
                label="Email"
                keyboardType="email-address"
              />
            </View>
            <View>
              <TextField
                value={phone}
                onChangeText={setPhone}
                label="Phone No"
                keyboardType="numaric"
              />
            </View>
            <View
              style={{
                marginVertical: SCREEN_HEIGHT * 0.02,
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <TextField
                value={password}
                style={styles.col6input}
                onChangeText={setPassword}
                label="Password"
                keyboardType="password"
              />
              <TextField
                value={confirmPassword}
                style={styles.col6input}
                onChangeText={setCOnfirmPassword}
                label="Confirm Password"
                keyboardType="password"
              />
            </View>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.02}}>
              <TouchableWithoutFeedback onPress={() => onPressHander()}>
                <View style={styles.signupBtn}>
                  <Text
                    style={{
                      color: color.white,
                      fontSize: 14,
                      textAlign: 'center',
                    }}>
                    Signup
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View>
              <Text style={{flex: 1, textAlign: 'center', color: color.white}}>
                Already have account ?
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text
                    style={{
                      color: color.white,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    Login
                  </Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skipTxt: {
    fontSize: 16,
    color: color.darkGrey,
    padding: SCREEN_HEIGHT * 0.03,
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: SCREEN_WIDTH * 0.1,
  },
  col6input: {
    width: SCREEN_WIDTH * 0.4,
    padding: SCREEN_WIDTH * 0.015,
  },
  signupImg: {
    height: 80,
    width: 80,
  },
  signupBtn: {
    height: SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH * 0.14,
    backgroundColor: color.primary,
    borderRadius: 50,
    borderColor: color.white,
    borderWidth: 2,
    marginLeft: SCREEN_WIDTH * 0.45,
  },
});
