import {
  ADD_MENU_ITEM,
  ADD_MENU_ITEM_COUNT,
  ADD_MENU_LIST,
  REMOVE_MENU_ITEM_COUNT,
} from "./types";

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

    case REMOVE_MENU_ITEM_COUNT:
      const removeIndex = state.menuItem.findIndex(
        (item) => item._id === action.payload.id
      );
      if (removeIndex !== -1) {
        const copyState2 = { ...state };
        copyState2.menuItem[removeIndex].count--;
        return copyState2;
      }
      break;

    case ADD_MENU_ITEM_COUNT:
      const index = state.menuItem.findIndex(
        (item) => item._id === action.payload.id
      );
      if (index !== -1) {
        const copyState = { ...state };
        copyState.menuItem[index].count++;
        return copyState;
      }
      break;

    default:
      return { ...state };
  }
};
