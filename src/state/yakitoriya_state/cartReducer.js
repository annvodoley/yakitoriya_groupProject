import { ADD_MENU_ITEM_CART, DELETE_MENU_ITEM_CART } from "./types";

const initState = {
  orderList: [],
};

export const CartsReducers = (state = initState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM_CART:
      const index = state.orderList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        const copyState = { ...state };
        copyState.orderList[index].count += 1;
        return copyState;
      }
      return { ...state, orderList: [...state.orderList, action.payload] };
    case DELETE_MENU_ITEM_CART: {
      const index = state.orderList.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        const copyState = { ...state };
        copyState.orderList[index].count -= 1;
        if (copyState.orderList[index].count === 0) {
          copyState.orderList.splice(index, 1);
          return copyState;
        }
        return copyState;
      }
    }
    default:
      return { ...state };
  }
};
