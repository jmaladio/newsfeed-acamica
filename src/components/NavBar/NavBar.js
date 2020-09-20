import React from "react";
import { NavLink } from "react-router-dom";
import NavCategory from "../NavCategory/NavCategory";

const NavBar = ({ categories, onGetData }) => {
  const mapCategories = categories.map((category) => {
    const { name, id, slug } = category;
    const pathname = !id ? "/" : `/categoria/${id}/${slug}`;
    const linkTo = {
      pathname,
      state: { category: id }
    };
    return (
      <NavLink key={id} exact={!id && true} to={linkTo}>
        <NavCategory
          key={id}
          name={name}
          onClickCategory={() => onGetData(id)}
        />
      </NavLink>
    );
  });
  return <div className="nav-bar">{mapCategories}</div>;
};

export default NavBar;
