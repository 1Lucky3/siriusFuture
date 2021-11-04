import {LoadImageTypes, ModalTypes, NavigationTypes} from "../action-types";
import {ImageAction, ModalAction, NavigationAction} from "../actions";


export function fetchImage(): ImageAction {
  return {
    type: LoadImageTypes.FETCH_IMAGES
  }
}
export function fetchSuccess(data: any[]): ImageAction {
  return {
    type: LoadImageTypes.FETCH_IMAGES_SUCCESS,
    payload: data
  }
}

export function updateData(data: any[]): ImageAction {
  return {
    type: LoadImageTypes.DELETE_IMAGE,
    payload: data
  }
}

export function changePage(name: string): NavigationAction {
  return {
    type: NavigationTypes.CHANGE_PAGE,
    payload: name
  }
}

export function openModal( data: { id: string, url: string, favorite: boolean} ): ModalAction {
  return {
    type: ModalTypes.OPEN_MODAL,
    payload: data
  }
}

export function previousPage( pageName: string): NavigationAction {
  return {
    type: NavigationTypes.GET_PREVIOUS,
    payload: pageName
  }
}

