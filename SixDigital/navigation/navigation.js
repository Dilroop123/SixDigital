/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import color from '../style/color';
import File from '../screens/File/File';
import Home from '../screens/Home/Home';

import Active from '../screens/Home/Active';
import Completed from '../screens/Home/Completed';
import Updates from '../screens/Home/Updates';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const TabTop = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <TabTop.Navigator
    //   initialRouteName="Feed"
    //   tabBarOptions={{
    //     activeTintColor: '#000',
    //     indicatorStyle: {backgroundColor: color.blue},
    //     labelStyle: {fontSize: 12},
    //     style: {backgroundColor: '#fff'},
    //   }}
    >
      <TabTop.Screen
        name="Updates"
        component={Updates}
        //   options={{tabBarLabel: 'Contact'}}
      />
      <TabTop.Screen
        name="Active"
        component={Active}
        //   options={{ tabBarLabel: 'Personal' }}
      />
      <TabTop.Screen
        name="Completed"
        component={Completed}
        //   options={{ tabBarLabel: 'Personal' }}
      />
    </TabTop.Navigator>
  );
}

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
        name="Home"
        options={({route}) => ({title: 'Hi ,Welcome Ron'})}
        component={MyTopTabs}
      />
    </Stack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: color.primary,
      }}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="File" component={File} />
    </Tab.Navigator>
  );
}
