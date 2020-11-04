import { all, fork } from "redux-saga/effects";
import { newWatcher } from "./news/sagas";
import { themeWatcher } from "./theme/sagas"

export function* rootSaga() {
  try {
    yield all([fork(newWatcher), fork(themeWatcher)]);
  } catch (error) {
    console.log("→ error caught", error);
  }
}
