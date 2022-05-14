import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import {COLOR} from '../helpers/color';
//screen
import Home from '../screens/Home';
import Akun from '../screens/Akun';
import Daftarmobil from '../screens/Daftarmobil';
import {moderateScale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const RenderIcon = ({name, focused}) => {
    return (
      <Feather
        name={name}
        color={focused ? COLOR.primaryBlue : COLOR.primaryBlack}
        size={24}
      />
    );
  };
  return (
    <Tab.Navigator
      initialRouterName="home"
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon name="home" focused={focused} />
          ),
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
            fontFamily: 'Helvetica-Regular',
          },
        }}
      />
      <Tab.Screen
        name="daftar mobil"
        component={Daftarmobil}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon name="list" focused={focused} />
          ),
          title: 'Daftar Mobil',
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
            fontFamily: 'Helvetica-Regular',
          },
        }}
      />
      <Tab.Screen
        name="akun"
        component={Akun}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon name="user" focused={focused} />
          ),
          title: 'Akun',
          tabBarLabelStyle: {
            fontSize: moderateScale(10),
            fontFamily: 'Helvetica-Regular',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
