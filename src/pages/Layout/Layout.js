import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import classes from "../Items/Items.module.scss";

function Layout() {
  return (
    <div>
      <Header />
      <div className={classes.MainContent}>
        <AsideMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
