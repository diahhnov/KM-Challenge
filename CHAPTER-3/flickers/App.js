import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRout from './src/router/MainRout';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <MainRout />
    </NavigationContainer>
  );
};

export default App;
