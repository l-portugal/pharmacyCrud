import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import List from '../screens/List';
import ListDetails from '../screens/List/details'
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default AppStack = (props) => {

  const user = useSelector(state => state.user.user);

  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      
        <Stack.Screen name="List" component={List} options={{ title: 'Farmacias La Rioja' }} />
        <Stack.Screen name="ListDetails" component={ListDetails} options={{ title: 'Farmacias La Rioja' }} />
    </Stack.Navigator>
  );
}
