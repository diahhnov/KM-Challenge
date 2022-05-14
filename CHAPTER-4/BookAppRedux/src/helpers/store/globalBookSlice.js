import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Base_Url} from '../Api';
import {setLoading} from './globalLoad';

axios.defaults.validateStatus = status => {
  return status < 500;
};

export const getBooks = createAsyncThunk(
  'books/allBooks',
  async (token, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const result = await axios.get(`${Base_Url}/books`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const getBooksId = createAsyncThunk(
  `books/booksByID`,
  async (credential, {dispatch}) => {
    try {
      dispatch(setLoading(true));
      const result = await axios.get(`${Base_Url}/books/${credential.id}`, {
        headers: {
          Authorization: `Bearer ${credential.token}`,
        },
      });
      return result.data;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  },
);

const initialState = {
  booksData: {},
};

const globalBookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      console.log('Success get books data');
      return {
        ...state,
        booksData: action.payload,
      };
    },
    [getBooksId.fulfilled]: (state, action) => {
      console.log('Success get books ID');
      return {
        ...state,
        booksData: action.payload,
      };
    },
  },
});
export default globalBookSlice.reducer;
