import React, {useEffect, useState} from "react";
import classes from "./MenuItemPage.module.scss";
import Header from "../../components/Header/Header";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import { useDispatch, useSelector } from "react-redux";
import {addDecrement, addIncrement, fetchRollsAction} from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";
import {useLocation} from 'react-router-dom';

function MenuItemPage() {
  const params = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const pathname = params.pathname.split('/')[1]

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.MenuReducer.sectionList);
  const menuList = useSelector((state) => state.MenuReducer.menuItem);

  const actualData = menu.find((menuItem) => menuItem.categoryName === pathname)

  useEffect(() => {
    dispatch(fetchRollsAction(actualData.categoryName));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [params]);



  const addToCart = useSelector((state) => state.CartReducer);


    const addToCartFunction = () => {
      dispatch(addIncrement())
    }
     const removeCartFunction = () => {
      dispatch(addDecrement())
    }




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
        : menuList.map((item) => {
            return (
              <MenuItem
                imgUrl={item.imgUrl ? item.imgUrl : ""}
                name={item.name ? item.name : ""}
                text={item.desc ? item.desc : ""}
                price={item.price ? item.price : ""}
                onClick={addToCartFunction}
                onClick2={removeCartFunction}
                addToCart={addToCart}
              />
            );
          })}
    </div>
  );
}

export default MenuItemPage;
