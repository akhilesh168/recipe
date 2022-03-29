import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import watcherSaga from "../sagas/rootSaga";
import createSagaMiddleware from "redux-saga";

const initializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initializeSagaMiddleware))
);

initializeSagaMiddleware.run(watcherSaga);
export default store;
