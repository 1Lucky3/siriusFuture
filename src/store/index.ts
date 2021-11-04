import createSagaMiddleware from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./reducers";
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

