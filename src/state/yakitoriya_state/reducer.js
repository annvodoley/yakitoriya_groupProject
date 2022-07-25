import {
    ADD_MENU_ITEM, ADD_MENU_ITEM_CART, ADD_MENU_ITEM_COUNT,
    ADD_MENU_LIST,
    DECREASE_QUANTITY, DELETE_MENU_ITEM_COUNT,
    INCREASE_QUANTITY,
} from './types';

const initState = {
    sectionList: [],
    menuItem: []
};

export const MenuReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MENU_LIST:
            return {...state, sectionList: action.payload};
        case ADD_MENU_ITEM:
            return {...state, menuItem: action.payload};
        default:
            return {...state};
    }
};
