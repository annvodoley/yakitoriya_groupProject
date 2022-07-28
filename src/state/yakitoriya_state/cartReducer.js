import { ADD_MENU_ITEM_CART, REMOVE_MENU_ITEM_CART } from "./types";

const initState = {
  orderList: [],
};

export const CartsReducers = (state = initState, action) => {
  switch (action.type) {
    case ADD_MENU_ITEM_CART:
      const index = state.orderList.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      if (index !== -1) {
        const copyState = { ...state };
        copyState.orderList[index].count++;
        return copyState;
      }
      return { ...state, orderList: [...state.orderList, action.payload] };

    case REMOVE_MENU_ITEM_CART:
      const removeIndex = state.orderList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (removeIndex !== -1) {
        const copyState2 = { ...state };
        copyState2.orderList[removeIndex].count--;
        return copyState2;
      }
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      };

    default:
      return { ...state };
  }
};
