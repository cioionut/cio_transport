import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import tweets from "./tweetsReducer";
import user from "./userReducer";

export default combineReducers({
  routing: routerReducer,
  tweets,
  user,
});
