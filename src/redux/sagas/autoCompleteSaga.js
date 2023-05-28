import { put, takeLatest } from "redux-saga/effects";
import { inputCall, inputSuccess, inputError } from "../reducers/AutoComplete";

function* InputCall(action) {
  try {
    yield put(inputSuccess(action.payload.value));
  } catch (error) {
    yield put(inputError("Error Here"));
  }
}

function* autoCompleteSaga() {
  yield takeLatest(inputCall.type, InputCall);
}

export default autoCompleteSaga;
