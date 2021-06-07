import React from 'react';
import color from '../../../style/color';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView
} from 'react-native';

const DATA = [
  {
    id: "1",
    title: "RUSTY DRIVE",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "2",
    title: "SABOR MORENO",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "3",
    title: "0 MESTRE PUB",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "4",
    title: "GRILL 54 CHEF",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "5",
    title: "RUSTY DRIVE",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "6",
    title: "SABOR MORENO",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "7",
    title: "0 MESTRE PUB",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "8",
    title: "GRILL 54 CHEF",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  },
  {
    id: "9",
    title: "GRILL 54 CHEF",
    image:
      "https://res.cloudinary.com/demo/image/upload/w_260,h_200,c_crop,g_north/sample.jpg"
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const _renderItem = ({ item }) => (
  <TouchableOpacity>
          <View style={styles.proffesion} elevation={5}>
            <View>
              <Image
                style={styles.profImg}
                source={{uri:'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'}}/>
            </View>
            <View style={{marginHorizontal:'3%',flex:1}}>
              <Text style={styles.profTitle}>Video Shoot</Text>
              <Text style={styles.profDesc}>A time-lapse apps or camera is one of the best tools for creating videos.....</Text>
              <View style={{flexDirection: 'row',marginTop:'4%'}}>
                  <Text style={{color:color.purple, fontSize:14,flex:1}}>Status : <Text style={{color:color.successText}}>Active</Text></Text>
                  <Text style={{color:color.grey, fontSize:14}}>from <Text style={{color:color.purple,fontWeight:'bold'}}>&#x24; 100</Text></Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
);



const MyProjects = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',flex:1,marginBottom:'5%'}}>
        <Text style={{color:color.purple,fontSize:16,fontWeight:'bold',flex:7}}>My Projects</Text>
        <TouchableOpacity style={{flex:1}}>
          <Text style={{color:color.grey,fontSize:14,marginTop:'10%'}}>See all</Text>
        </TouchableOpacity>
      </View> 

      <SafeAreaView>
        <FlatList
            data={DATA}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingVertical: 20 }}
          />
      </SafeAreaView> 
      
      <FlatList contentContainerStyle={styles.mainProfessionContainer}>
        

        <TouchableOpacity>
          <View style={styles.proffesion} elevation={5}>
            <View>
              <Image
                style={styles.profImg}
                source={{uri:'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'}}/>
            </View>
            <View style={{marginHorizontal:'3%',flex:1}}>
              <Text style={styles.profTitle}>Video Shoot</Text>
              <Text style={styles.profDesc}>A time-lapse apps or camera is one of the best tools for creating videos.....</Text>
              <View style={{flexDirection: 'row',marginTop:'4%'}}>
                  <Text style={{color:color.purple, fontSize:14,flex:1}}>Status : <Text style={{color:color.successText}}>Active</Text></Text>
                  <Text style={{color:color.grey, fontSize:14}}>from <Text style={{color:color.purple,fontWeight:'bold'}}>&#x24; 100</Text></Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.proffesion} elevation={5}>
            <View>
              <Image
                style={styles.profImg}
                source={{uri:'https://www.ajactraining.org/wp-content/uploads/2019/09/image-placeholder.jpg'}}/>
            </View>
            <View style={{marginHorizontal:'3%',flex:1}}>
              <Text style={styles.profTitle}>Video Shoot</Text>
              <Text style={styles.profDesc}>A time-lapse apps or camera is one of the best tools for creating videos.....</Text>
              <View style={{flexDirection: 'row',marginTop:'4%'}}>
                  <Text style={{color:color.purple, fontSize:14,flex:1}}>Status : <Text style={{color:color.successText}}>Active</Text></Text>
                  <Text style={{color:color.grey, fontSize:14}}>from <Text style={{color:color.purple,fontWeight:'bold'}}>&#x24; 100</Text></Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

         
        </FlatList>
      
    </View>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop:'5%'
  },
  logoText:{
    color:color.purple,
    fontWeight:'bold',
    textAlign:'center',
    fontSize:40
  },
  mainProfessionContainer:{
    flexDirection:'column',
    flex:1
  },
  proffesion:{
    marginBottom:'5%',
    flexDirection:'row',
    padding:10,
    backgroundColor:'#fff',
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    borderRadius:7,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  profImg:{
    height:110,
    width:130,
    borderRadius:5
  },
  profTitle:{
    color:color.purple,
    fontSize:16,
    fontWeight:'bold',
  },
  profDesc:{
    color:color.grey,
    marginTop:'5%',
    fontSize:14,
    textAlign:'justify'
  }
});
