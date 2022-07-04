import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionMenu.module.scss";

const SectionMenu = ({ imgUrl, text, categoryId }) => {
  return (
    <NavLink to={categoryId}>
      <div className={classes.SectionMenu}>
        <img src={imgUrl} alt="" />
        <p>{text}</p>
      </div>
    </NavLink>
  );
};

export default SectionMenu;
