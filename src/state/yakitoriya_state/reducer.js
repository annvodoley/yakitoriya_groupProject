import { ADD_MENU_LIST } from "./types";
import { ADD_SASIMI } from "./types";

const initState = {
  sectionList: [],
};

const initState1 = {
  sasimi: [],
};

export const MenuReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_MENU_LIST:
      return { ...state, sectionList: action.payload };
    default:
      return { ...state };
  }
};
export const SasimiReducer = (state = initState1, action) => {
  switch (action.type) {
    case ADD_SASIMI:
      return { ...state, sasimi: action.payload };
    default:
      return { ...state };
  }
};
