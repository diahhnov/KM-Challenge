import {combineReducers} from 'redux';
import {LoginReduc} from '../Users/Login/utils/reducer';
import {GlobalReduc} from './GlobalReduc';

const allReducers = combineReducers({
  login: LoginReduc,
  global: GlobalReduc,
});

export default allReducers;
