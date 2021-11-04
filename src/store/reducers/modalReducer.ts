import {ModalTypes} from "../action-types";
import {ModalAction} from "../actions";

interface IStateModal {
  id: string,
  url: string,
  favorite: boolean
}

const initialState ={
  id: "",
  url: "",
  favorite: false
}

export const ModalReducer = (state = initialState, action: ModalAction): IStateModal => {
  switch (action.type) {
    case ModalTypes.OPEN_MODAL:
      return {
        ...state,
        id: action.payload.id,
        url: action.payload.url,
        favorite: action.payload.favorite
      }
    default:
      return {...state}
  }
}

