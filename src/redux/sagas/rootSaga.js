import { call, put, takeEvery } from "redux-saga/effects";
import { ActionsConstants } from "../constants/actions-constants";
import getRecipeSearchData from "../../utils/api";

export default function* watcherSaga() {
  yield takeEvery(ActionsConstants.DATA_REQUESTED, workerSaga);
}

function* workerSaga(action) {
  try {
    const { data } = yield call(getRecipeSearchData, action.payload);
    console.log(data);
    yield put({ type: ActionsConstants.DATA_LOADED, payload: data });
  } catch (e) {
    console.log(e);
  }
}
