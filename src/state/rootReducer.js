import { combineReducers } from "redux";
import {
  CartReducer,
  MenuReducer,
} from "./yakitoriya_state/reducer";

export const RootReducer = combineReducers({
  MenuReducer: MenuReducer,
  CartReducer: CartReducer
});
