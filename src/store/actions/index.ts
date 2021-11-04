import {LoadImageTypes, ModalTypes, NavigationTypes} from "../action-types";

interface IFetchImage {
  type: LoadImageTypes.FETCH_IMAGES
}
interface IFetchImageSuccess {
  type: LoadImageTypes.FETCH_IMAGES_SUCCESS,
  payload: any[]
}
interface IDeleteImage {
  type: LoadImageTypes.DELETE_IMAGE,
  payload: any[]
}

interface IGetPageName {
  type: NavigationTypes.GET_PAGE_NAME
}
interface IChangePage {
  type: NavigationTypes.CHANGE_PAGE,
  payload: string
}
interface IGetPrevious {
  type: NavigationTypes.GET_PREVIOUS,
  payload: string
}

interface IOpenModal {
  type: ModalTypes.OPEN_MODAL,
  payload: {
    id: string,
    url: string,
    favorite: boolean,
  }
}

export type ImageAction = IFetchImage | IFetchImageSuccess | IDeleteImage
export type NavigationAction = IGetPageName | IChangePage | IGetPrevious
export type ModalAction = IOpenModal