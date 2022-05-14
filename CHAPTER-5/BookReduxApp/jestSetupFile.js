/* eslint-disable no-undef */
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock('react-native-sound', () => {
  var _filename = null;
  var _basePath = null;

  var SoundMocked = (filename, basePath, onError, options) => {
    _filename = filename;
    _basePath = basePath;
    onError();
  };

  SoundMocked.prototype.filename = () => _filename;
  SoundMocked.prototype.basePath = () => _basePath;
  SoundMocked.prototype.play = function (onEnd) {};
  SoundMocked.prototype.pause = function (callback) {};
  SoundMocked.prototype.stop = function (callback) {};
  SoundMocked.prototype.reset = function () {};
  SoundMocked.prototype.release = function () {};
  SoundMocked.prototype.getDuration = function () {};

  SoundMocked.LIBRARY = 2;

  return SoundMocked;
});
// jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.useFakeTimers();
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-gesture-handler', () => {
  return {
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
  };
});
jest.mock('react-native-share', () => {});
jest.mock('react-native-blob-util', () => {
  return {
    addEventListener: jest.fn(),
    requestPermissions: jest.fn(() => Promise.resolve()),
    getInitialNotification: jest.fn(() => Promise.resolve()),
  };
});
jest.mock('@react-native-community/netinfo', () => {});
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
