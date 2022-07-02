import {ADD_MENU_LIST} from './types';

export const fetchMenuListAction = () => {
    return dispatch => (
        fetch('https://roll-store.herokuapp.com')
            .then((res) => res.json())
            .then(res => dispatch(addMenuListAction(res)))
    )
}


export const addMenuListAction = (menuList) => ({type: ADD_MENU_LIST, payload: menuList})
