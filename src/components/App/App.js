import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import NavCategory from "../NavCategory/NavCategory";
import MainNavigation from "../../containers/MainNavigation";
import { categoriesList } from "../../data";
import "./App.css";

const App = () => {
  const mapCategories = categoriesList.map((category) => {
    const { name, id, slug } = category;
    return (
      <Link key={id} to={!id ? "/" : `/categoria/${id}/${slug}`}>
        <NavCategory id={id} key={id} name={name} />
      </Link>
    );
  });

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
    <div className="App">
      <Header />
      <NavBar>{mapCategories}</NavBar>
      <Switch>{mapRoutes}</Switch>
    </div>
  );
};

export default App;
