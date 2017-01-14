import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Tours from "./pages/Tours";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

import store from "./store";

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="excursii(/:obiectiv)" name="excursii" component={Tours}></Route>
        <Route path="settings" name="settings" component={Settings}></Route>
      </Route>
    </Router>
  </Provider>,
app);
