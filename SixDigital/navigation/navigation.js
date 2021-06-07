/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../style/color';
import File from '../screens/File/File';

import Updates from '../screens/Home';

import Detail from '../screens/Detail/Detail';
import Credentials from '../screens/Credentials';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'gray',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 16,
        },
      }}>
      <Stack.Screen
        name="MainHome"
        options={({route}) => ({title: 'Hi ,Welcome Ron'})}
        component={Updates}
      />
      <Stack.Screen
        name="Detail"
        options={({route}) => ({title: route.params.screenTitle})}
        component={Detail}
      />
    </Stack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: color.primary,
      }}
      barStyle={{backgroundColor: '#fff'}}
      
      tabBarOptions={{
        style: {
          paddingTop:5,
          height: '8%',
          width: '95%',
          flexDirection: 'column',
          alignSelf: 'center',
          elevation: 2,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          marginBottom:'4%',
          backgroundColor:'#f1f1f2'
      },
      labelStyle: {fontSize:14,paddingBottom:5,paddingTop:5},
        activeTintColor: color.blue,
      }}

      >
      <Tab.Screen
        name="Homee"
        component={HomeStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="File"
        component={File}
        options={{
          tabBarLabel: 'Files',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Credentials"
        component={Credentials}
        options={{
          tabBarLabel: 'Credentials',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
