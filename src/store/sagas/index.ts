import { all, fork } from "redux-saga/effects"
import {loadImageWatcher} from "./LoadImageSaga";

export default function* rootSaga() {
  yield all([
    fork(loadImageWatcher)
  ])
}