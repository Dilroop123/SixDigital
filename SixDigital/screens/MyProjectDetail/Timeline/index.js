import React from 'react';
import color from '../../../style/color';

import {StyleSheet, View} from 'react-native';
import normalize from 'react-native-normalize';
import TimelinePage from './components/TimelinePage';
import AppHeader from '../../../components/AppHeader';
import ProjectDetailContext from '../../../context/ProjectDetailContext';

const Timeline = ({route}) => {
  const projectDetail = React.useContext(ProjectDetailContext);

  return (
    <View style={styles.container}>
      <TimelinePage projectDetail={projectDetail} />
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(24),
    backgroundColor: color.white,
  },
});
