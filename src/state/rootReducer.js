import {combineReducers} from 'redux';
import {MenuReducer,} from './yakitoriya_state/reducer';
import { CartsReducers} from './yakitoriya_state/cartReducer';

export const RootReducer = combineReducers({
    MenuReducer: MenuReducer,
    CartsReducers: CartsReducers
});
