import {ADD_MENU_LIST, ADD_ROLLS, ADD_SALATS, ADD_SETS, ADD_SOUPS} from "./types";
import { ADD_SASIMI } from "./types";
import { ADD_HOT_ROLLS} from "./types";


//request MenuListAction
export const fetchMenuListAction = () => {
  return (dispatch) =>
    fetch("https://roll-store.herokuapp.com")
      .then((res) => res.json())
      .then((res) => dispatch(addMenuListAction(res)));
};

//request sasimi
export const fetchSasimiAction = () => {
  return (dispatch) =>
    fetch("https://roll-store.herokuapp.com/menu/sasimi")
      .then((res) => res.json())
      .then((res) => dispatch(addSasimiAction(res)));
};

//request hotrolls
export const fetchHotRollAction = () => {
  return (dispatch) =>
      fetch("https://roll-store.herokuapp.com/menu/hot-rolls")
          .then((res) => res.json())
          .then((res) => dispatch(addHotRollAction(res)));
};


//request salats
export const fetchSalatsAction = () => {
  return (dispatch) =>
      fetch("https://roll-store.herokuapp.com/menu/salats")
          .then((res) => res.json())
          .then((res) => dispatch(addSalatsAction(res)));
};

//request sets
export const fetchSetsAction = () => {
  return (dispatch) =>
      fetch("https://roll-store.herokuapp.com/menu/sets")
          .then((res) => res.json())
          .then((res) => dispatch(addSetsAction(res)));
};

//request soups
export const fetchSoupsAction = () => {
  return (dispatch) =>
      fetch("https://roll-store.herokuapp.com/menu/soups")
          .then((res) => res.json())
          .then((res) => dispatch(addSoupsAction(res)));
};

//request rolls
export const fetchRollsAction = () => {
  return (dispatch) =>
      fetch("https://roll-store.herokuapp.com/menu/rolls")
          .then((res) => res.json())
          .then((res) => dispatch(addSRollsAction(res)));
};

//menuListAction
export const addMenuListAction = (menuList) => ({
  type: ADD_MENU_LIST,
  payload: menuList,
});


//sasimiAction
export const addSasimiAction = (sasimi) => ({
  type: ADD_SASIMI,
  payload: sasimi,
});


//hotrollsAction
export const addHotRollAction = (hotrolls) => ({
  type: ADD_HOT_ROLLS,
  payload: hotrolls,
});


//salatsAction
export const addSalatsAction = (salats) => ({
  type: ADD_SALATS,
  payload: salats,
});

//setsAction
export const addSetsAction = (sets) => ({
  type: ADD_SETS,
  payload: sets,
});

//soupsAction
export const addSoupsAction = (soups) => ({
  type: ADD_SOUPS,
  payload: soups,
});

//rollsAction
export const addSRollsAction = (rolls) => ({
  type: ADD_ROLLS,
  payload: rolls,
});
