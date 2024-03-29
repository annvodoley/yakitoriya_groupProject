import React, { useEffect, useState } from "react";
import classes from "./MenuItemPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addMenuItemCartAction,
  deleteMenuItemCartAction,
  fetchRollsAction,
} from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useLocation } from "react-router-dom";

function MenuItemPage() {
  const params = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const pathname = params.pathname.split("/")[1];

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.MenuReducer.sectionList);
  const menuList = useSelector((state) => state.MenuReducer);
  const orderList = useSelector((state) => state.CartsReducers.orderList);

  const actualData = menu.find(
    (menuItem) => menuItem.categoryName === pathname
  );

  const addToCartFunction = (menuItem) => {
    dispatch(addMenuItemCartAction(menuItem));
  };

  const deleteCartFunction = (id) => {
    dispatch(deleteMenuItemCartAction(id));
  };

  const findCount = (id) => {
    const index = orderList.findIndex((itemOrder) => itemOrder.id === id);
    return orderList[index]?.count;
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchRollsAction(actualData.categoryName));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [params]);

  return (
    <div className={classes.itemsWrapper}>
      <h1>{actualData.name}</h1>
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
      {isLoading
        ? [...Array(9)].map((item) => {
            return (
              <div className={classes.ldsRipple}>
                <div></div>
                <div></div>
              </div>
            );
          })
        : menuList.menuItem.map((item) => {
            return (
              <MenuItem
                imgUrl={item.imgUrl ? item.imgUrl : ""}
                name={item.name ? item.name : ""}
                text={item.desc ? item.desc : ""}
                price={item.price ? item.price : ""}
                onClick={addToCartFunction}
                onClick2={deleteCartFunction}
                id={item._id}
                count={findCount(item._id) || 0}
              />
            );
          })}
    </div>
  );
}

export default MenuItemPage;
