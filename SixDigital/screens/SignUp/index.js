import React from 'react';

import {
  SafeAreaView,
  ImageBackground,
  Image,
  Button,
  TouchableWithoutFeedback,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TextField from '../../components/TextField';
import color from '../../style/color';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SignUp = () => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <ImageBackground
          style={{flex: 1,
            resizeMode: "cover",
            justifyContent: "center"}} 
             source={require('../../assets/signup/signup_bg.png')} >
          <ScrollView>
            <View style={styles.loginContainer}>
              <View style={{marginTop:SCREEN_HEIGHT * 0.17,marginLeft:SCREEN_WIDTH*0.06}}>
                <Image source={require('../../assets/signup/signup.png')} style={styles.signupImg}/>
              </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginVertical: SCREEN_HEIGHT * 0.03,
              }}>
                <TextField
                  value={value}
                  style={styles.col6input}
                  onChangeText={setValue}
                  label="First Name"  />
                <TextField
                  value={value}
                  style={styles.col6input}
                  onChangeText={setValue}
                  label="Last Name"  />
              </View>
              <View style={{marginVertical:SCREEN_HEIGHT * 0.02}}>
                <TextField
                  value={value}
                  onChangeText={setValue}
                  label="Email"
                  keyboardType='email-address' />
              </View>
              <View>
                <TextField
                  value={value}
                  onChangeText={setValue}
                  label="Phone No"
                  keyboardType="numaric"  />
              </View>
              <View style={{marginVertical:SCREEN_HEIGHT * 0.02,flexDirection:'row', flex: 1, justifyContent: 'space-between'}}>
                <TextField
                  value={value}
                  style={styles.col6input}
                  onChangeText={setValue}
                  label="Password"
                  keyboardType='password'
                />
                <TextField
                  value={value}
                  style={styles.col6input}
                  onChangeText={setValue}
                  label="Confirm Password"
                  keyboardType="password"
                />
              </View>
              <View style={{marginVertical:SCREEN_HEIGHT * 0.02}}>
                <TouchableWithoutFeedback>
                  <View style={styles.signupBtn}>
                  <Text style={{color:color.white,fontSize:34,textAlign:'center'}}> > </Text>
                  </View>
                  
                </TouchableWithoutFeedback>
              </View>
            <View>
            <Text style={{flex:1,textAlign:'center',color:color.white}}>Don't have account ?
                <TouchableWithoutFeedback onPress={() => {navigation.navigate('SignUp')}}>
                <Text style={{color:color.white, fontSize:20,fontWeight:'bold'}}>  Login</Text>
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
  skipTxt :{
    fontSize:16,
    color:color.darkGrey,
    padding: SCREEN_HEIGHT * 0.03
  },
  loginContainer:{   
    flex:1,
    flexDirection:'column',
    paddingHorizontal:SCREEN_WIDTH * 0.1,
  },
  col6input:{
    width:SCREEN_WIDTH * 0.4,
    padding:SCREEN_WIDTH * 0.015,
  },
  signupImg :{
    height:80,
    width: 80
  },
  signupBtn:{
    height:SCREEN_HEIGHT * 0.07,
    width: SCREEN_WIDTH * 0.14,
    backgroundColor:color.primary,
    borderRadius:50,
    borderColor:color.white,
    borderWidth:2,
    marginLeft:SCREEN_WIDTH * 0.45
  }
  });
  ;
