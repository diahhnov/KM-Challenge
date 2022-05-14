import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();
const Mainrouter = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default Mainrouter;
