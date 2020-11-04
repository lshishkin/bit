import { takeEvery, put, all } from "redux-saga/effects";
import { types } from "./types";
import { themeActions } from "./action";
import { applicationActions } from "../application/action";
import { api } from "../../api";

export function* themeWorker({ payload }: ReturnType<typeof themeActions.fetchTheme>) {
  yield put(applicationActions.setLoad(true));
  const response = yield api.fetchTheme(payload);
  const data = yield response.json();
  yield put(themeActions.setThemes(data));
  yield put(applicationActions.setLoad(false));
}

export function* themeWatcher() {
  yield all([takeEvery(types.FETCH_THEME, themeWorker)]);
}
