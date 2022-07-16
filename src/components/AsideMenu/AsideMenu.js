import React from "react";
import SectionMenu from "../SectionMenu/SectionMenu";
import classes from "./AsideMenu.module.scss";
import { useSelector } from "react-redux";

const AsideMenu = () => {
  const menuList = useSelector((state) => state.MenuReducer.sectionList);

  return (
    <aside className={classes.AsideMenu}>
      {menuList.map((item, index) => {
        return (
          <SectionMenu
            key={index}
            imgUrl={item.imgUrl ? item.imgUrl : ""}
            text={item.name ? item.name : ""}
            categoryId={
              item.categoryId.toString() ? item.categoryId.toString() : ""
            }
          />
        );
      })}
    </aside>
  );
};

export default AsideMenu;
