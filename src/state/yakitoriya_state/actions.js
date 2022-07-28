import {
  ADD_MENU_LIST,
  ADD_MENU_ITEM,
  ADD_MENU_ITEM_CART,
  ADD_MENU_ITEM_COUNT,
  REMOVE_MENU_ITEM_COUNT,
  REMOVE_MENU_ITEM_CART,
} from "./types";

//request MenuListAction
export const fetchMenuListAction = () => {
  return (dispatch) =>
    fetch("https://roll-store.herokuapp.com")
      .then((res) => res.json())
      .then((res) => dispatch(addMenuListAction(res)));
};

//request rolls
export const fetchRollsAction = (categoryName) => {
  return (dispatch) =>
    fetch(`https://roll-store.herokuapp.com/menu/${categoryName}`)
      .then((res) => res.json())
      .then((res) => {
        const newData = res.map((item) => ({ ...item, count: 0 }));
        dispatch(addSMenuItemAction(newData));
      });
};

//menuListAction
export const addMenuListAction = (menuList) => ({
  type: ADD_MENU_LIST,
  payload: menuList,
});

//rollsAction
export const addSMenuItemAction = (menuItem) => ({
  type: ADD_MENU_ITEM,
  payload: menuItem,
});

//добавление в корзину

export const addMenuItemCartAction = (menuItem) => ({
  type: ADD_MENU_ITEM_CART,
  payload: menuItem,
});

export const addMenuItemCountAction = (menuItem) => ({
  type: ADD_MENU_ITEM_COUNT,
  payload: menuItem,
});

export const removeMenuItemCountAction = (menuItem) => ({
  type: REMOVE_MENU_ITEM_COUNT,
  payload: menuItem,
});

export const removeMenuItemCartAction = (menuItem) => ({
  type: REMOVE_MENU_ITEM_CART,
  payload: menuItem,
});
