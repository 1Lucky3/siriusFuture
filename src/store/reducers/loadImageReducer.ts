import {LoadImageTypes} from "../action-types";
import {ImageAction} from "../actions";



interface IState {
  imageLoading: boolean;
  imageData: any[]
}

const initialState: IState = {
  imageLoading: false,
  imageData: []
}


export const LoadImageReducer = (state = initialState, action: ImageAction): IState  => {
  switch (action.type) {
    case LoadImageTypes.FETCH_IMAGES:
      return {...state}
    case LoadImageTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        imageData: state.imageData.concat(action.payload)
      }
    case LoadImageTypes.DELETE_IMAGE:
      return {
        ...state,
        imageData: action.payload
      }
    default:
      return {...state}
  }
}