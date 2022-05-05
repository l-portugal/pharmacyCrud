import React, { Component } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import List from '../screens/List';
import Map from '../screens/Map';
import Profile from '../screens/Profile';

import { Icon } from 'react-native-elements'
// import { theme } from '../constants'

const Tab = createMaterialBottomTabNavigator();

const theme = {
  colors: {
    active: '#ffffff',
    inactive: '#c4c4c4',
    bar: '#00abf1'
  }
}

export const Tabs = () => {
  const { colors } = theme
  return (
    <Tab.Navigator
      activeColor={colors.active}
      inactiveColor={colors.inactive}
      barStyle={{
        backgroundColor: colors.bar
      }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={'home'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="List" component={List}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={'users'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Map" component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={'map'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={'wrench'} type="font-awesome-5" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}