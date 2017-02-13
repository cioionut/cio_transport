import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

import tours from "./toursReducer";
import user from "./userReducer";

export default combineReducers({
  routing: routerReducer,
  tours,
  user,
});
