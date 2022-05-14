import axios from 'axios';
import {Base_Url} from '../../../helpers/Api';
import {navigate} from '../../../helpers/navigate/index';
import {setLoading} from '../../utils/globalAction';
import {store} from '../../utils/store';

const {token} = store.getState().login;
axios.defaults.headers.Authorization = `Bearer ${token}`;

// books data
export const getBookData = () => async dispatch => {
  try {
    dispatch(setLoading(true));
    const get = await axios.get(`${Base_Url}/books`);
    console.log(get);

    if (get.status === 200) {
      return dispatch(setBookPopular(get.data.results));
    }
  } catch (error) {
    console.log(Error);
  } finally {
    dispatch(setLoading(false));
    console.log('ini token', token);
  }
};

export const setBookRecom = payload => {
  return {
    type: 'SET_BOOK_REC',
    payload,
  };
};

export const setBookPopular = payload => {
  return {
    type: 'SET_BOOK_POP',
    payload,
  };
};

// byID
export const getDetailBooks = id => async dispatch => {
  try {
    dispatch(setLoading(true));
    const result = await axios.get(`${Base_Url}/books/${id}`);
    console.log(result);

    if (result.status === 200) {
      console.log(result);
      dispatch(setDetailBooks(result.data));
      navigate('Detail');
    }
  } catch (error) {
    console.log(Error);
  } finally {
    dispatch(setLoading(false));
    console.log('ini token', token);
  }
};

export const setDetailBooks = payload => {
  return {
    type: 'DETAIL_BOOK',
    detail: payload,
  };
};

export const setRefresh = data => {
  return {
    type: 'SET_REFRESH',
    payload: data,
  };
};
