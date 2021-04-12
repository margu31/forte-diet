import { combineReducers } from "redux";
import auth from "./auth/auth";

const rootreducer = combineReducers({ auth });

export default rootreducer;
