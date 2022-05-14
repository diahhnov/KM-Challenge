import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {navigationRef} from './navigate';
import {store, persistor} from '../screens/utils/store';

const Component = screen => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{screen}</PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default Component;
