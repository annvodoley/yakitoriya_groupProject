import { combineReducers } from "redux";
import {
  HotRollsReducer,
  MenuReducer, RollsReducer,
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
  RollsReducer: RollsReducer,
});
