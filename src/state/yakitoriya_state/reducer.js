import { ADD_MENU_ITEM, ADD_MENU_LIST } from "./types";

const initState = {
  sectionList: [],
  menuItem: [],
};

export const MenuReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MENU_LIST:
      return { ...state, sectionList: action.payload };
    case ADD_MENU_ITEM:
      return { ...state, menuItem: action.payload };
    default:
      return { ...state };
  }
};
