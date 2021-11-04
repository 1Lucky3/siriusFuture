import {NavigationTypes} from "../action-types";
import {NavigationAction} from "../actions";

interface IStateNavigation {
  pageName: string,
  previousPage: string
}

const initialState = {
  pageName: "Все изображения",
  previousPage: "Все изображения"
}

export const NavigationReducer = (state = initialState, action: NavigationAction): IStateNavigation => {
  switch (action.type) {
    case NavigationTypes.GET_PAGE_NAME:
      return {...state}
    case NavigationTypes.CHANGE_PAGE:
      return {
        ...state,
        pageName: action.payload
      }
    case NavigationTypes.GET_PREVIOUS:
      return {
        ...state,
        previousPage: action.payload
      }
    default:
      return {...state}
  }
}