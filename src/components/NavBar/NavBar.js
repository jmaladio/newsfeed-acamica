import React from "react";
import { Link } from "react-router-dom";
import NavCategory from "../NavCategory/NavCategory";

const NavBar = ({ categories, onGetData }) => {
  const mapCategories = categories.map((category) => {
    const { name, id, slug } = category;
    return (
      <Link key={id} to={!id ? "/" : `/categoria/${id}/${slug}`}>
        <NavCategory
          key={id}
          name={name}
          onClickCategory={() => onGetData(id)}
        />
      </Link>
    );
  });
  return <div className="nav-bar">{mapCategories}</div>;
};

export default NavBar;
