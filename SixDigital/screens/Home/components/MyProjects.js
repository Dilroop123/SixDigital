/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import color from '../../../style/color';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {Pressable} from 'react-native';
import globalStyles from '../../../style/globalStyles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/fontSize';
import normalize from 'react-native-normalize';

const MyProjects = ({
  headerComponent,
  footerComponent,
  myProjectsData,
  onPress,
}) => {
  const _renderItem = ({item: project}) => (
    <Pressable onPress={() => onPress(project)}>
      <View style={styles.proffesion}>
        <View>
          <Image
            style={styles.profImg}
            source={{uri: project?.image?.publicUrl}}
          />
        </View>
        <View style={{marginHorizontal: '3%', flex: 1}}>
          <Text style={styles.profTitle}>{project?.name}</Text>
          <Text style={styles.profDesc}>
            {project?.timeline[project?.timeline.length - 1]?.description}
          </Text>
          <View style={{flexDirection: 'row', marginTop: '2%'}}>
            <Text style={{color: color.purple, fontSize: 14, flex: 1}}>
              Status : <Text style={{color: color.successText}}>Active</Text>
            </Text>
            <Text style={{color: color.grey, fontSize: 14}}>
              from{' '}
              <Text style={{color: color.purple, fontWeight: 'bold'}}>
                &#x24; 100
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={myProjectsData}
        renderItem={_renderItem}
        keyExtractor={item => item._id}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '5%',
  },
  logoText: {
    color: color.purple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
  },

  proffesion: {
    marginBottom: SCREEN_HEIGHT * 0.02,
    flexDirection: 'row',
    padding: SCREEN_HEIGHT * 0.01,
    borderRadius: SCREEN_HEIGHT * 0.02,
    backgroundColor: '#fff',
    ...globalStyles.shadow,
  },
  profImg: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_HEIGHT * 0.12,
    borderRadius: normalize(5),
  },
  profTitle: {
    color: color.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  profDesc: {
    color: color.grey,
    marginTop: '2%',
    fontSize: 14,
    textAlign: 'justify',
  },
});
