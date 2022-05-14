import React, {useEffect} from 'react';
import Router from './src/routers/Mainrouter';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
