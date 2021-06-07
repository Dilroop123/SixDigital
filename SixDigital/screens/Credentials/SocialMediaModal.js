import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SocialMediaModal = ({navigation}) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <TextField value={value} onChangeText={setValue} label="User/Email id" />

      <View style={{marginTop: SCREEN_HEIGHT * 0.01}}>
        <TextField value={value} onChangeText={setValue} label="Password" />
      </View>
      <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
        <Button />
      </View>
    </View>
  );
};

export default SocialMediaModal;

const styles = StyleSheet.create({
  container: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.3,
  },
});
