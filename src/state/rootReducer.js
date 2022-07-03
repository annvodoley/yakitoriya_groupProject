import { combineReducers } from "redux";
import { MenuReducer, SasimiReducer } from "./yakitoriya_state/reducer";

export const RootReducer = combineReducers({
  MenuReducer: MenuReducer,
  SasimiReducer: SasimiReducer,
});
