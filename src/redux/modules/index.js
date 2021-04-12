import { combineReducers } from "redux";
import uploadReducer from "./postingMenuList";

const rootReducer = combineReducers({
  posting: uploadReducer,
});

export default rootReducer;
