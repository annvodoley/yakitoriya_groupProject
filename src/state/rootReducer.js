import { combineReducers } from "redux";
import {
  HotRollsReducer,
  MenuReducer,
  SalatsReducer,
  SasimiReducer,
  SetsReducer,
  SoupsReducer
} from "./yakitoriya_state/reducer";

export const RootReducer = combineReducers({
  MenuReducer: MenuReducer,
  SasimiReducer: SasimiReducer,
  HotRollsReducer: HotRollsReducer,
  SalatsReducer: SalatsReducer,
  SetsReducer: SetsReducer,
  SoupsReducer: SoupsReducer,
});
