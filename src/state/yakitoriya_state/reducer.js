import {
    ADD_MENU_ITEM, ADD_MENU_ITEM_CART, ADD_MENU_ITEM_COUNT,
    ADD_MENU_LIST,
    DECREASE_QUANTITY,
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
        case ADD_MENU_ITEM_COUNT:
            const index = state.menuItem.findIndex((item) => item._id === action.payload.id)
            console.log(index)
            if (index !== -1) {
                const copyState = {...state}
                copyState.menuItem[index].count++
                return copyState
            }

        default:
            return {...state};
    }
};
