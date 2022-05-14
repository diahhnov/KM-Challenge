import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {setLoading} from './globalLoad';
import {Login_Api, Register_Api} from '../Api';
import {Alert} from 'react-native';

axios.defaults.validateStatus = status => {
  return status < 500;
};

export const login_Auth = createAsyncThunk(
  'user/loginAuth',
  async (data, {rejecttedValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const result = await axios.post(`${Login_Api}`, data);
      if (result.status <= 201) {
        navigatie('Home');
      }
      if (result.status === 401) {
        const reject = result.data.message;
        Alert.alert('ERROR', reject);
      }
      return result.data;
    } catch (error) {
      return rejecttedValue(error.result.data);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const regist_Auth = createAsyncThunk(
  'user/registerAuth',
  async (data, {rejecttedValue, dispatch}) => {
    try {
      dispatch(setLoading(true));
      const result = await axios.post(`${Register_Api}`, data);
      if (result.status <= 201) {
        navigatie('successScreen');
      }
      if (result.status === 401) {
        const reject = result.data.message;
        Alert.alert('ERROR', reject);
      }
      return result.data;
    } catch (error) {
      return rejecttedValue(error.result.data);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

const initialState = {
  userName: {},
  token: '',
};

const theUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: state => {
      return {
        ...state,
        userName: {},
        token: '',
      };
    },
  },
  extraReducer: {
    //Login
    [login_Auth.fulfilled]: (state, action) => {
      return {
        ...state,
        userName: action.payload.user,
        token: action.payload.tokens.access.token,
      };
    },
    //Register
    [regist_Auth.fulfilled]: (state, action) => {
      return {
        ...state,
        userName: action.payload.user,
        token: action.payload.tokens.access.token,
      };
    },
  },
});

export const {setLogout} = theUser.actions;
export default theUser.reducer;
