/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import globalStyles from '../style/globalStyles';
import {createStackNavigator} from '@react-navigation/stack';
import normalize from 'react-native-normalize';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../style/color';
import Login from '../screens/Login';
import Home from '../screens/Home';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../style/fontSize';
import ProjectDetailContext from '../context/ProjectDetailContext';
import Credentials from '../screens/Credentials';
import Timeline from '../screens/MyProjectDetail/Timeline';
import Chat from '../screens/MyProjectDetail/Chat';
import PopularServiceDescription from '../screens/PopularServiceDescription';
import Splash from '../screens/Splash';
import MyOffers from '../screens/MyOffers';
import Upload from '../screens/File/Upload';
import Recieved from '../screens/File/Recieved';

import SignUp from '../screens/SignUp/index';
import AppHeader from '../components/AppHeader';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();

const MARGIN_TOP = SCREEN_HEIGHT * 0.02;
const ICON_SIZE = SCREEN_HEIGHT * 0.03;
const FONT_SIZE = normalize(16);

const CustomTabButton = ({children, onPress}) => (
  <Pressable
    style={{
      bottom: SCREEN_HEIGHT * 0.04,
      justifyContent: 'center',
      alignItems: 'center',
      ...globalStyles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        height: SCREEN_HEIGHT * 0.06,
        width: SCREEN_HEIGHT * 0.06,
        borderRadius: SCREEN_HEIGHT * 0.03,
        backgroundColor: color.primary,
      }}>
      {children}
    </View>
  </Pressable>
);

function MyProjectDetail({route, navigation}) {
  return (
    <ProjectDetailContext.Provider value={route.params.product}>
      <AppHeader
        onPress={() => navigation.pop()}
        style={{
          backgroundColor: color.lightBlue,
          padding: SCREEN_HEIGHT * 0.02,
        }}
      />
      <TabTop.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: color.primary,
          indicatorStyle: {
            backgroundColor: color.lightBlue,
            height: '100%',
          },
          labelStyle: {fontSize: SCREEN_HEIGHT * 0.018, fontWeight: 'bold'},
          style: {backgroundColor: '#fff'},
        }}>
        <TabTop.Screen name="Home" component={Timeline} />
        <TabTop.Screen name="Chat" component={Chat} />
      </TabTop.Navigator>
    </ProjectDetailContext.Provider>
  );
}

function File({route}) {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        style={{
          backgroundColor: color.lightBlue,
          padding: SCREEN_HEIGHT * 0.02,
        }}
      />
      <TabTop.Navigator
        initialRouteName="Upload"
        tabBarOptions={{
          activeTintColor: color.primary,
          indicatorStyle: {
            backgroundColor: color.lightBlue,
            height: '100%',
          },
          labelStyle: {fontSize: SCREEN_HEIGHT * 0.018, fontWeight: 'bold'},
          style: {backgroundColor: '#fff'},
        }}>
        <TabTop.Screen name="Upload" component={Upload} />
        <TabTop.Screen name="Recieved" component={Recieved} />
      </TabTop.Navigator>
    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainHome" component={Home} />
      <Stack.Screen name="MyProjectDetail" component={MyProjectDetail} />
      <Stack.Screen name="MyOffers" component={MyOffers} />
      <Stack.Screen
        name="PopularServiceDescription"
        options={({route}) => ({title: route.params.screenTitle})}
        component={PopularServiceDescription}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: color.lightGrey,
          position: 'absolute',
          bottom: SCREEN_HEIGHT * 0.02,
          marginHorizontal: SCREEN_WIDTH * 0.06,
          // Max Height...
          height: SCREEN_HEIGHT * 0.09,
          borderRadius: SCREEN_HEIGHT * 0.02,
          // Shadow...
          ...globalStyles.shadow,
        },
      }}>
      <Tab.Screen
        name="File"
        component={File}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: MARGIN_TOP,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                name="file-text-o"
                color={focused ? color.primary : color.grey}
                size={ICON_SIZE}
              />
              <Text
                style={{
                  color: focused ? color.primary : color.grey,
                  fontSize: FONT_SIZE,
                }}>
                File
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Credentials"
        component={Credentials}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: MARGIN_TOP,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons
                name="clipboard-list-outline"
                color={focused ? color.primary : color.grey}
                size={ICON_SIZE}
              />
              <Text
                style={{
                  color: focused ? color.primary : color.grey,
                  fontSize: FONT_SIZE,
                }}>
                Credentials
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <AntDesign name="appstore-o" color="white" size={ICON_SIZE} />
          ),
          tabBarButton: props => <CustomTabButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Invoices"
        component={Credentials}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: MARGIN_TOP,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome5
                name="file-invoice-dollar"
                color={focused ? color.primary : color.grey}
                size={ICON_SIZE}
              />
              <Text
                style={{
                  color: focused ? color.primary : color.grey,
                  fontSize: FONT_SIZE,
                }}>
                Invoices
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Credentials}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                position: 'absolute',
                top: MARGIN_TOP,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome
                name="user-circle-o"
                color={focused ? color.primary : color.grey}
                size={ICON_SIZE}
              />
              <Text
                style={{
                  color: focused ? color.primary : color.grey,
                  fontSize: FONT_SIZE,
                }}>
                User
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function MianStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} /> */}
      <Stack.Screen name="HomeScreen" component={MyTabs} />
    </Stack.Navigator>
  );
}
