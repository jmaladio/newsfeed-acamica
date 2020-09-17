import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import NavNavigation from "../../containers/NavNavigation";
import MainNavigation from "../../containers/MainNavigation";
import { categoriesList } from "../../data";
import "./App.css";

const App = () => {
  const mapRoutes = categoriesList.map((category) => {
    const { id, slug } = category;

    if (!id)
      return <Route exact path="/" key={id} component={MainNavigation} />;
    else
      return (
        <Route
          path={`/categoria/:id/${slug}`}
          key={id}
          component={MainNavigation}
        />
      );
  });

  return (
    <div className="App flex-row">
      <Header />
      <NavNavigation categories={categoriesList} />
      <Switch>{mapRoutes}</Switch>
    </div>
  );
};

export default App;
