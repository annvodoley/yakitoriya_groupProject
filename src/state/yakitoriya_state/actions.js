import { ADD_MENU_LIST } from "./types";
import { ADD_SASIMI } from "./types";

export const fetchMenuListAction = () => {
  return (dispatch) =>
    fetch("https://roll-store.herokuapp.com")
      .then((res) => res.json())
      .then((res) => dispatch(addMenuListAction(res)));
};

export const fetchSasimiAction = () => {
  return (dispatch) =>
    fetch("https://roll-store.herokuapp.com/menu/sasimi")
      .then((res) => res.json())
      .then((res) => dispatch(addSasimiAction(res)));
};

export const addMenuListAction = (menuList) => ({
  type: ADD_MENU_LIST,
  payload: menuList,
});
export const addSasimiAction = (sasimi) => ({
  type: ADD_SASIMI,
  payload: sasimi,
});
