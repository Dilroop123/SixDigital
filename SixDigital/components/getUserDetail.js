import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserDetail = async () => {
  const userid = AsyncStorage.getItem('USER').then(async value => {
    return value;
  });
  return userid;
};
