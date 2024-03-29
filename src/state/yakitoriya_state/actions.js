import {
  ADD_MENU_LIST,
  ADD_MENU_ITEM,
  ADD_MENU_ITEM_CART,
  DELETE_MENU_ITEM_CART,
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

//Удаление из корзины

export const deleteMenuItemCartAction = (id) => ({
  type: DELETE_MENU_ITEM_CART,
  payload: id,
});
