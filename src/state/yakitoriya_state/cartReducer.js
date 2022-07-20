import {
    ADD_MENU_ITEM, ADD_MENU_ITEM_CART,
    ADD_MENU_LIST,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
} from './types';

const initState = {
    orderList: [],
};

export const CartsReducers = (state = initState, action) => {
    switch (action.type) {
        case ADD_MENU_ITEM_CART:
            const index = state.orderList.findIndex((item) => item.id === action.payload.id)
            console.log(index)
            if(index !== -1){
                const copyState = {...state}
                copyState.orderList[index].count++
                return copyState
            }
            return {...state, orderList: [...state.orderList, action.payload]};
        default:
            return {...state};
    }
};
