import {combineReducers} from 'redux';
import HomeReduc from '../Home/utils/reducer';
import {LoginReduc} from '../Login/utils/reducer';
import {GlobalReduc} from './GlobalReduc';

const allReducers = combineReducers({
  login: LoginReduc,
  home: HomeReduc,
  global: GlobalReduc,
});

export default allReducers;
