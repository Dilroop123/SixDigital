import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserDetail = async () => {
  const userid = await AsyncStorage.getItem('USER');
  return userid;
};
