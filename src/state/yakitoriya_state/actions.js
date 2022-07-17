import {
    ADD_MENU_LIST,
    ADD_MENU_ITEM,
    ADD_ORDER,
    ADD_INCREMENT,
    ADD_DECREMENT,
    ADD_TO_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    REMOVE_FROM_CART,
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
      .then((res) => dispatch(addSMenuItemAction(res)));
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

export const addIncrement = () => ({
    type: INCREASE_QUANTITY,
});

export const addDecrement = () => ({
    type: DECREASE_QUANTITY,
});
