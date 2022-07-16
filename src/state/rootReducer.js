import { combineReducers } from "redux";
import {
  MenuReducer,
} from "./yakitoriya_state/reducer";

export const RootReducer = combineReducers({
  MenuReducer: MenuReducer,
});
