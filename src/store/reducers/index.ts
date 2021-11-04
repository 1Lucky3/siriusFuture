import {combineReducers} from "redux";
import {LoadImageReducer} from "./loadImageReducer";
import {NavigationReducer} from "./navigationReducer";
import {ModalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
  loadImageReducer: LoadImageReducer,
  navigation: NavigationReducer,
  modal: ModalReducer
})

export type RootState = ReturnType<typeof rootReducer>