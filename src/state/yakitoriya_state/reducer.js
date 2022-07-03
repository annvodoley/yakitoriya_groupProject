import {ADD_MENU_LIST, ADD_ROLLS, ADD_SALATS, ADD_SETS, ADD_SOUPS} from "./types";
import { ADD_SASIMI } from "./types";
import {ADD_HOT_ROLLS} from "./types";

const initState = {
  sectionList: [],
};

const initState1 = {
  sasimi: [],
};

const initState2 = {
  hotrolls: [],
};

const initState3 = {
  salats: [],
};

const initState4 = {
  sets: [],
};

const initState5 = {
  soups: [],
};

const initState6 = {
  rolls: [],
};

export const MenuReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MENU_LIST:
      return { ...state, sectionList: action.payload };
    default:
      return { ...state };
  }
};

//sasimi
export const SasimiReducer = (state = initState1, action) => {
  switch (action.type) {
    case ADD_SASIMI:
      return { ...state, sasimi: action.payload };
    default:
      return { ...state };
  }
};

//hotrolls
export const HotRollsReducer = (state=initState2, action) => {
  switch (action.type) {
    case ADD_HOT_ROLLS:
      return {...state, hotrolls: action.payload };
    default:
      return {...state};
  }
};

//salats
export const SalatsReducer = (state=initState3, action) => {
  switch (action.type) {
    case ADD_SALATS:
      return {...state, salats: action.payload };
    default:
      return {...state};
  }
};

//sets
export const SetsReducer = (state=initState4, action) => {
  switch (action.type) {
    case ADD_SETS:
      return {...state, sets: action.payload };
    default:
      return {...state};
  }
};

//soups
export const SoupsReducer = (state=initState5, action) => {
  switch (action.type) {
    case ADD_SOUPS:
      return {...state, soups: action.payload };
    default:
      return {...state};
  }
};

//rolls
export const RollsReducer = (state=initState6, action) => {
  switch (action.type) {
    case ADD_ROLLS:
      return {...state, rolls: action.payload };
    default:
      return {...state};
  }
};