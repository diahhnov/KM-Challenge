import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SuccessScreen from '../screens/SuccessScreen';
import DetailBook from '../screens/DetailBook';
import BottomTab from './BottomTab';
import ListBook from '../screens/ListBook';

const Stack = createStackNavigator();
function MainRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="MainRoot" component={BottomTab} />
      <Stack.Screen name="Detail" component={DetailBook} />
      <Stack.Screen name="List" component={ListBook} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

export default MainRouter;
