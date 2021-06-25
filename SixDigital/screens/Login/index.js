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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '../../components/TextField';
import * as UserActions from '../../store/actions/UserActions';
import color from '../../style/color';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const userData = useSelector(state => state.user.UserData);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if (userData?.data?.email) {
  //     try {
  //       AsyncStorage.setItem('USER', userData?.data?._id);
  //     } catch (e) {
  //       // saving error
  //     }
  //     console.log('hhd');
  //     // navigation.replace('HomeScreen');
  //   }
  // }, [userData, navigation]);

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', async () => {
  //     if (userData?.data?.email) {
  //       try {
  //       } catch (e) {
  //         // saving error
  //       }

  //       navigation.replace('HomeScreen');
  //     }
  //   });
  // }, [navigation, userData]);

  React.useEffect(() => {
    async function fetchData() {
      if (userData?.data?.email) {
        console.log(userData?.data?._id);
        try {
          await AsyncStorage.setItem('USER', userData?.data?._id);
        } catch (e) {
          // saving error
        }

        navigation.replace('HomeScreen');
      }
    }
    fetchData();
  }, [navigation, userData]);

  const onPressHandler = () => {
    dispatch(UserActions.loginUser(email, password));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
        source={require('../../assets/login/login_bg.png')}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.skipTxt}>Skip</Text>
          </TouchableWithoutFeedback>
          <View style={styles.loginContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: SCREEN_HEIGHT * 0.05,
              }}>
              <Image
                source={require('../../assets/login/login.png')}
                style={styles.loginImg}
              />
              <Text style={styles.loginTxt}>Log In</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <Button title="Login with" color={color.primary} />
              <Button title="Signin with" color={color.red} />
            </View>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.03}}>
              <TextField
                value={email}
                onChangeText={setEmail}
                label="Email"
                keyboardType="email-address"
                flex={1}
              />
            </View>
            <View>
              <TextField
                value={password}
                onChangeText={setPassword}
                label="Password"
                keyboardType="password"
                secureTextEntry
                flex={1}
              />
            </View>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.03}}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text
                  style={{color: color.grey, fontSize: 16, fontWeight: 'bold'}}>
                  Forgot Password ?
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.03}}>
              <Button
                title="Log In"
                color={color.primary}
                onPress={onPressHandler}
              />
            </View>
            <View>
              <Text style={{flex: 1, textAlign: 'center'}}>
                Don't have account?
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}>
                  <Text
                    style={{
                      color: color.primary,
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    {' '}
                    Register
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

export default Login;

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
  loginImg: {
    height: 80,
    width: 80,
  },
  loginTxt: {
    color: color.primary,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  input: {
    height: SCREEN_HEIGHT * 0.05,
    borderWidth: 1,
    borderColor: color.lightGrey,
  },
});
