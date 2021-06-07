import React from 'react';
import color from '../../../style/color';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const Advertisement = () => {
  return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.advertisement} elevation={5}>
            <View style={{backgroundColor:'#f1f1f2',flex:1.5,paddingRight:'2%',paddingLeft:'2%',paddingTop:'5%',paddingBottom:'8%'}}>
              <View style={{backgroundColor:'#00afef',width:'20%',borderRadius:3}}>
                <Text style={{color:color.white,textAlign:'center'}}>Ad</Text>
              </View>
              <Text style={styles.adTitle}>Youtube Marketing</Text>
              <Text style={styles.adDesc}>or camera is one of the best tools for creating videos....</Text>
            </View>
            <View style={{marginHorizontal:'3%',flex:1}}>
              <View style={{backgroundColor:'#00afef',width:'18%',borderRadius:50,marginLeft:'80%',marginVertical:'5%'}}>
                <Text style={{color:color.white,textAlign:'center',fontSize:18}}>jknknk</Text>
              </View>
              <Text style={{color:color.grey, fontSize:24,textAlign:'right'}}>from <Text style={{color:color.purple,fontWeight:'bold'}}>&#x24; 100</Text></Text>
              <Text style={{color:color.grey, fontSize:14,textAlign:'right'}}>discount <Text style={{color:color.grey,fontWeight:'bold'}}>&#x24; 100</Text></Text>
            </View>
          </View>
        </TouchableOpacity>        
      </View>
);
};

export default Advertisement;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop:'5%'
  },
  advertisement:{
    marginBottom:'5%',
    flexDirection:'row',
    borderRadius:7,
    backgroundColor:'#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  adTitle:{
    color:color.purple,
    fontSize:18,
    marginLeft:'10%',
    marginVertical:'5%',
    fontWeight:'bold',
  },
  adDesc:{
    color:color.grey,
    fontSize:14,
    marginLeft:'10%',
    textAlign:'justify'
  }

});