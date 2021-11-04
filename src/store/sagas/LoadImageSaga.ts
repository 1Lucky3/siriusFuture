import {LoadImageTypes} from "../action-types";
import { takeEvery, put } from "redux-saga/effects";
import {fetchSuccess} from "../action-creator";

const token = "fxopvwhw0CpaYu8UwxYwxbH5EjNS8oquGu_wZosUPlg"

export function* loadImageWatcher() {
  yield takeEvery(LoadImageTypes.FETCH_IMAGES, loadImageWorker)
}
function* loadImageWorker() {
  try {
    const data = yield fetch(`https://api.unsplash.com/photos/random/?client_id=${token}&count=30`)
    .then( response => response.json())
    .then( data => data);
    const parsedData = data.map( (item: any) => {
      return {
        id: item.id,
        url: item.urls.small,
        description: item.user.username
      }
    });
    yield put(fetchSuccess(parsedData))
  }
  catch (err) {
    console.log(err)
  }
}