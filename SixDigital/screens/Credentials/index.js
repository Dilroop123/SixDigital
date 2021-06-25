/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Modal, Text} from 'react-native';
import normalize from 'react-native-normalize';
import {HeaderComponent} from './components/HeaderComponent';
import IconList from './components/IconList';
import SocialMediaModal from './components/SocialMediaModal';
import * as CreditAction from '../../store/actions/CreditAction';
import {useSelector, useDispatch} from 'react-redux';
import SubmittedList from './components/SubmittedList';
import globalStyles from '../../style/globalStyles';
import ModalHeader from './components/ModalHeader';
import CreditCardModal from './components/CreditCardModal';
import {getUserDetail} from '../../components/getUserDetail';

const Credentials = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [headerTitle, setHeaderTitle] = React.useState();
  const [selectedIconId, setSelectedIconId] = React.useState();

  const creditIconsData = useSelector(state => state.card.CreditCardIcons);
  const savedCrdentials = useSelector(state => state.card.SavedCrdentials);

  const [userId, setUserId] = React.useState();
  async function getUserId() {
    setUserId(await getUserDetail());
  }

  React.useEffect(() => {
    getUserId();
  }, []);

  const dispatch = useDispatch();
  const onpressHandler = (title, cardId) => {
    setHeaderTitle(title);
    setSelectedIconId(cardId);
    setModalVisible(true);
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(CreditAction.getCreditIcons());
      dispatch(CreditAction.getSavedCredentials(userId));
    });
  }, [dispatch, navigation, userId]);

  return (
    <View style={styles.container}>
      <Modal
        presentationStyle="overFullScreen"
        transparent
        style={{margin: 0}}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              ...globalStyles.shadow,
            }}>
            <ModalHeader
              title={headerTitle}
              onpress={() => setModalVisible(!modalVisible)}
            />
            {headerTitle === 'creditcard' ? (
              <CreditCardModal
                title={headerTitle}
                selectedIconId={selectedIconId}
                setModalVisible={setModalVisible}
              />
            ) : (
              <SocialMediaModal
                title={headerTitle}
                selectedIconId={selectedIconId}
                setModalVisible={setModalVisible}
              />
            )}
          </View>
        </View>
      </Modal>
      <SubmittedList
        HeaderComponent={
          <IconList
            creditIconsData={creditIconsData?.data}
            HeaderComponent={<HeaderComponent />}
            onPress={(title, cardId) => onpressHandler(title, cardId)}
          />
        }
        savedCrdentials={savedCrdentials?.data}
      />
    </View>
  );
};

export default Credentials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: 'white',
  },
});
