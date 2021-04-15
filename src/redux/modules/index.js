import { combineReducers } from 'redux';
import auth from './auth/auth';
import uploadReducer from './postingMenuList';
import menuList from './menuList';
import healthBar from './healthBar';

const rootReducer = combineReducers({
  auth,
  posting: uploadReducer,
  menuList,
  healthBar
});

export default rootReducer;
