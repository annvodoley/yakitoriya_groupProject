import React from "react";
import { Link } from "react-router-dom";
import classes from "./SectionMenu.module.scss";

const SectionMenu = ({ imgUrl, text, categoryId }) => {
  return (
    <Link to={categoryId}>
      <div className={classes.SectionMenu}>
        <img src={imgUrl} alt="" />
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default SectionMenu;
