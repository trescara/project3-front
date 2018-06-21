import React from "react";
import createHistory from "history/createBrowserHistory";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import store from "./store";
import { App } from "./components";
import Map from "./components/Map/map"
import "../resources/scss/style.scss";


ReactDOM.render(
  <Router history={createHistory()}>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/map" component={Map} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root"),
);