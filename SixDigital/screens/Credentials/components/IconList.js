/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import color from '../../../style/color';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const IconList = ({creditIconsData, HeaderComponent, onPress}) => {
  const renderItems = ({item: icon}) => (
    <TouchableWithoutFeedback onPress={() => onPress(icon?.code, icon?._id)}>
      <View
        style={{
          flex: 1,
          marginTop: SCREEN_HEIGHT * 0.03,
          marginLeft: SCREEN_WIDTH * 0.05,
        }}>
        <Image
          style={{height: SCREEN_HEIGHT * 0.1, width: SCREEN_HEIGHT * 0.1}}
          source={{uri: icon?.image?.publicUrl}}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View>
      <FlatList
        numColumns={3}
        data={creditIconsData}
        keyExtractor={item => item._id}
        renderItem={renderItems}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={
          <View style={{marginTop: SCREEN_HEIGHT * 0.03}}>
            <Text style={{fontWeight: 'bold', color: color.primary}}>
              Share Credentials Safely
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default IconList;
