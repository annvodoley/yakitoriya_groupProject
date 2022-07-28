import React, { useEffect, useState } from "react";
import classes from "./MenuItemPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
<<<<<<< HEAD
  addMenuItemCartAction,
  addMenuItemCountAction,
  removeMenuItemCountAction,
  removeMenuItemCartAction,
  fetchRollsAction,
} from "../../state/yakitoriya_state/actions";
import MenuItem from "../../components/MenuItem/MenuItem";
import { useLocation } from "react-router-dom";
=======
    addMenuItemCartAction, addMenuItemCountAction, deleteMenuItemCartAction, deleteMenuItemCountAction,
    fetchRollsAction
} from '../../state/yakitoriya_state/actions';
import MenuItem from '../../components/MenuItem/MenuItem';
import {useLocation} from 'react-router-dom';
>>>>>>> 23cbcb5d8b2d911af8e17b8f55bd00d290a49e03

function MenuItemPage() {
  const params = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = params.pathname.split("/")[1];

  const dispatch = useDispatch();

  const menu = useSelector((state) => state.MenuReducer.sectionList);
  const menuList = useSelector((state) => state.MenuReducer);

<<<<<<< HEAD
  const actualData = menu.find(
    (menuItem) => menuItem.categoryName === pathname
  );
=======
    const menu = useSelector((state) => state.MenuReducer.sectionList);
    const menuList = useSelector((state) => state.MenuReducer);
    const orderList = useSelector((state) => state.CartsReducers.orderList);
>>>>>>> 23cbcb5d8b2d911af8e17b8f55bd00d290a49e03

  const addToCartFunction = (menuItem) => {
    dispatch(addMenuItemCartAction(menuItem));
    dispatch(addMenuItemCountAction(menuItem));
  };

<<<<<<< HEAD
  const removeCartFunction = (menuItem) => {
    dispatch(removeMenuItemCountAction(menuItem));
    dispatch(removeMenuItemCartAction(menuItem));
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchRollsAction(actualData.categoryName));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [params]);
=======
    const addToCartFunction = (menuItem) => {
        dispatch(addMenuItemCartAction(menuItem))
    }

    const deleteCartFunction = (id) => {
        dispatch(deleteMenuItemCartAction(id))
    }

    const findCount = (id) => {
        const index = orderList.findIndex(itemOrder => itemOrder.id === id)
        return orderList[index]?.count
    }
>>>>>>> 23cbcb5d8b2d911af8e17b8f55bd00d290a49e03

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
<<<<<<< HEAD
=======
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
                            imgUrl={item.imgUrl ? item.imgUrl : ''}
                            name={item.name ? item.name : ''}
                            text={item.desc ? item.desc : ''}
                            price={item.price ? item.price : ''}
                            onClick={addToCartFunction}
                            onClick2={deleteCartFunction}
                            id={item._id}
                            count={findCount(item._id) || 0}
                        />
                    );
                })}
>>>>>>> 23cbcb5d8b2d911af8e17b8f55bd00d290a49e03
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
                onRemove={removeCartFunction}
                id={item._id}
                count={item.count}
              />
            );
          })}
    </div>
  );
}

export default MenuItemPage;
