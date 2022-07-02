import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionMenu.scss";
import icon from "./images/metro.png";

const SectionMenu = () => {
    return(
        <div>
         <nav className={classes.SectionMenu}>
             <ul className={classes.menu_List}>
                <li className={classes.menu_List_Item}>
                    <NavLink to="/">Я люблю Метро</NavLink>
                        <img src={icon} className={classes.menu_List_Pic}></img>
                </li>
             </ul>
         </nav>
         </div>
    );
};

export default SectionMenu;