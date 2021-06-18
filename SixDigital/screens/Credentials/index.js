/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Modal, Text} from 'react-native';
import normalize from 'react-native-normalize';
import {HeaderComponent} from './components/HeaderComponent';
import IconList from './components/IconList';
import SocialMediaModal from './components/SocialMediaModal';
import SubmittedList from './components/SubmittedList';
import globalStyles from '../../style/globalStyles';
import ModalHeader from './components/ModalHeader';
import CreditCardModal from './components/CreditCardModal';

const Credentials = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [headerTitle, setHeaderTitle] = React.useState();

  const onpressHandler = title => {
    setHeaderTitle(title);
    setModalVisible(true);
  };
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
            {headerTitle === 'creditCard' ? (
              <CreditCardModal />
            ) : (
              <SocialMediaModal />
            )}
          </View>
        </View>
      </Modal>
      <SubmittedList
        HeaderComponent={
          <IconList
            HeaderComponent={<HeaderComponent />}
            onPress={title => onpressHandler(title)}
          />
        }
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
