import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import normalize from 'react-native-normalize';
import {useDispatch} from 'react-redux';
import Button from '../../../components/Button';
import {getUserDetail} from '../../../components/getUserDetail';
import TextField from '../../../components/TextField';
import * as CreditActions from '../../../store/actions/CreditAction';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const SocialMediaModal = ({title, selectedIconId, setModalVisible}) => {
  const [email, setValue] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userId, setUserId] = React.useState();
  async function getUserId() {
    setUserId(await getUserDetail());
  }

  React.useEffect(() => {
    getUserId();
  }, []);
  const dispatch = useDispatch();

  const onpressHandler = () => {
    dispatch(
      CreditActions.sendSocialCredentials(
        title,
        email,
        password,
        userId,
        selectedIconId,
      ),
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextField value={email} onChangeText={setValue} label="User/Email id" />

      <View style={{marginTop: SCREEN_HEIGHT * 0.01}}>
        <TextField
          value={password}
          onChangeText={setPassword}
          label="Password"
        />
      </View>
      <View style={{marginTop: SCREEN_HEIGHT * 0.02}}>
        <Button onPress={() => onpressHandler()} />
      </View>
    </View>
  );
};

export default SocialMediaModal;

const styles = StyleSheet.create({
  container: {
    padding: normalize(24),
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.35,
  },
});
