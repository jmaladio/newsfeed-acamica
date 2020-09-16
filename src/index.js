import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import storeFactory from "./store";
import "./index.css";
import App from "./components/App/App";

const store = storeFactory();

ReactDOM.render(
  <Provider store={store}>
    <Router store={store}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
