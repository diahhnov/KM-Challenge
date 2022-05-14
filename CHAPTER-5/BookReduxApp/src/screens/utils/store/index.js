import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import allReducers from '../allReducers';

const allMiddleware = applyMiddleware(thunk, logger);

const loginConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Login'],
};

const persistedReducers = persistReducer(loginConfig, allReducers);

export const store = createStore(persistedReducers, {}, allMiddleware);
export const persistor = persistStore(store);
