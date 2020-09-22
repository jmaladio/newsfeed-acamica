import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import SearchPropsContainer from "../../containers/SearchPropsContainer";
import NavPropsContainer from "../../containers/NavPropsContainer";
import MainPropsContainer from "../../containers/MainPropsContainer";
import { categoriesList } from "../../data";
import "./App.css";

const App = () => {
  return (
    <div className="App flex-row">
      <Header render={() => <SearchPropsContainer />} />
      <NavPropsContainer categories={categoriesList} />
      <Switch>
        <Route exact path="/" component={MainPropsContainer} />
        <Route path="/categoria/:id" component={MainPropsContainer} />
        <Route path="/search/:text" component={MainPropsContainer} />
        {/* <Route path="/:string" component={MainPropsContainer} /> */}
      </Switch>
    </div>
  );
};

export default App;
