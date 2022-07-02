import React from "react";
import classes from "./SectionMenu.module.scss";

const SectionMenu = ({imgUrl, text}) => {
    return(
        <div className={classes.SectionMenu}>
            <img src={imgUrl} alt=""/>
            <p>{text}</p>
         </div>
    );
};

export default SectionMenu;
