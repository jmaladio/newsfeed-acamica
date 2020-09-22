import React from "react";

const Header = ({ render }) => {
  return (
    <header className="header">
      <h1 className="logo">News</h1>
      {render()}
    </header>
  );
};

export default Header;
