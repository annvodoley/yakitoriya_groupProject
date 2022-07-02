import {ADD_MENU_LIST} from './types';

const initState = {
    sectionList: []
}

export const MenuReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MENU_LIST:
            return {...state, sectionList: action.payload}
        default:
            return {...state}
    }
}
