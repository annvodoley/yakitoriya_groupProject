import React from "react";
import classes from "./Items.module.scss";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";

function Sasimi() {
  return (
    <div className={classes.Sasimi}>
      <Header />
      <div className={classes.MainContent}>
        <AsideMenu />
        <div className={classes.itemsWrapper}>
          <h1>Сасими</h1>
          <div className={classes.itemsFilter}>
            <div>
              <span>Фильтр</span>
              <span>Сортировать по цене</span>
            </div>
            <div className={classes.filterReset}>
              <span>
                <span>x</span> Сбросить фильтры
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sasimi;
