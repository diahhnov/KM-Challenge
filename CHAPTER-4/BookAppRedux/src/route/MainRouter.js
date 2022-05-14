import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import SuccessScreen from '../screens/SuccessScreen';
import Home from '../screens/Home';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();
const MainRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Detail" component={Detail} /> */}
    </Stack.Navigator>
  );
};

export default MainRouter;
