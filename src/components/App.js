import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storeFactory from "store";

import {
  HomeReduxContainer,
  SectionReduxContainer,
  SearchReduxContainer,
} from "containers";
import Error404 from "./pages/Error404";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Cabin", sans-serif;
    font-size: 1.6rem;
    margin: 0;
  }
`;

const store = storeFactory();

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router store={store}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={HomeReduxContainer} />
            <Route
              path="/categoria/:id([1-5])"
              component={SectionReduxContainer}
            />
            <Route path="/search/:text" component={SearchReduxContainer} />
            <Route path="/:string" component={Error404} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}
