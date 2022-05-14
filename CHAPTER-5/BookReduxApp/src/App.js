import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';
import {persistor, store} from './screens/utils/store';
import Root from './route';

// ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

// ignore all log notifications
LogBox.ignoreAllLogs();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
