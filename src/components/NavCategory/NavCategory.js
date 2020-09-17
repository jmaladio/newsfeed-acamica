import React from "react";

const NavCategory = ({ name, onClickCategory }) => {
  return <span onClick={onClickCategory}>{name}</span>;
};

export default NavCategory;
