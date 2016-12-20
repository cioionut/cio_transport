import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from "react-router";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import reducer from "./reducers";

const routerMidd = routerMiddleware(browserHistory);

const middleware = applyMiddleware(promise(), thunk, logger(), routerMidd);

export default createStore(reducer, middleware);
