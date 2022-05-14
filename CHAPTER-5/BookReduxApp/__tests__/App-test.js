import React from 'react';
import 'react-native';
import {Provider} from 'react-redux';
import {create} from 'react-test-renderer';
import {PersistGate} from 'redux-persist/es/integration/react';
import Root from '../src/route';
import {persistor, store} from '../src/screens/utils/store';

const AppComponent = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
);

test('renders correctly', () => {
  create(<AppComponent />);
});
