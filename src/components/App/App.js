import React from "react";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import NavCategory from "../NavCategory/NavCategory";
import MainView from "../MainView/MainView";
import { categoriesList } from "../../data";
import "./App.css";

const App = () => {
  const mapCategories = categoriesList.map((category) => {
    return (
      <NavCategory
        id={category.id}
        key={category.id}
        name={category.category}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <NavBar>{mapCategories}</NavBar>
      <MainView />
    </div>
  );
};

export default App;
