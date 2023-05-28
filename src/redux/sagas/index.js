import { all } from "redux-saga/effects";
import autoCompleteSaga from "./autoCompleteSaga";

export default function* rootSaga() {
  yield all([autoCompleteSaga()]);
}
