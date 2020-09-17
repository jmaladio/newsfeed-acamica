import React from "react";
import SearchContainer from "../../containers/SearchContainer";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">News</h1>
      <SearchContainer />
    </header>
  );
};

export default Header;
