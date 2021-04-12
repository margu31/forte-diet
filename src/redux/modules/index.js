import { combineReducers } from "redux";
import auth from "./auth/auth";
import uploadReducer from "./postingMenuList";

const rootReducer = combineReducers({
  auth,
  posting: uploadReducer,
});

export default rootReducer;
