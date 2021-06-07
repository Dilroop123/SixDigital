import color from '../../../style/color';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Icon,
  useColorScheme,
  View,
} from 'react-native';

const SearchMenu = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1}}>
        <Text style={styles.logoText}>6 DIGITAL</Text>
      </View>
      <View style={styles.searchSection}>
        <TextInput
        style={{backgroundColor:'#fff'}}
        label="What are you looking for?"
        secureTextEntry
        left={<TextInput.Icon name="search-web" color={color.grey}/>}
        />
      </View>
    </View>
  );
};

export default SearchMenu;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop:'4%'
  },
  searchSection:{
    marginTop:'4%',
    borderColor:color.grey,
    borderRadius:5,
    borderWidth:1,
  },
  logoText:{
    color:color.purple,
    fontWeight:'bold',
    textAlign:'center',
    fontSize:38
  },
});
