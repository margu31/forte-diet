import { combineReducers } from 'redux';
import auth from './auth/auth';
import uploadReducer from './postingMenuList';
import menuList from './menuList';

const rootReducer = combineReducers({
  auth,
  posting: uploadReducer,
  menuList
});

export default rootReducer;
