import {
  ADD_MENU_ITEM,
  ADD_MENU_LIST,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from './types';

const initState = {
  sectionList: [],
  menuItem: []
};

const initState1 = 0

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

export const CartReducer = (state = initState1, action) => {
  switch (action.type) {
    case INCREASE_QUANTITY:
      return state + 1
    case DECREASE_QUANTITY:
      return state - 1
    default:
      return state
  };
};
