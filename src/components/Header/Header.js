import React from "react";
import classes from "./Header.module.scss";
import icon from "../../images/yakitoria_logo.svg";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";


const Header = () => {
  return (
      <div className={classes.Header_main}>
        <div className={classes.Header_main__container}>
          <div className={classes.Header_logo}>
            <Link to="home">
              <img src={icon} className={classes.Header_logo__icon} />
            </Link>
          </div>
          <nav className={classes.Navigation}>
            <ul className={classes.Navigation_menu}>
              <li className={classes.Navigation_menu__item}>
                <a href="/news/" className={classes.Navigation_menu__links}>
                  Акции
                </a>
              </li>
              <li className={classes.Navigation_menu__item}>
                <a
                  href="/restaurants/"
                  className={classes.Navigation_menu__links}
                >
                  Рестораны
                </a>
              </li>
              <li className={classes.Navigation_menu__item}>
                <NavLink to={"/delivery/"}> О доставке </NavLink>
              </li>
              <li className={classes.Navigation_menu__item}>
                <a href="/yakitoria/" className={classes.Navigation_menu__links}>
                  <b>Якитория помогает</b>
                </a>
              </li>
            </ul>
          </nav>
          <div className={classes.Header_region}></div>
          <div className={classes.Header_registration}></div>
          <Cart />
        </div>
    </div>

  );
};

export default Header;
