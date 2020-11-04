import { takeEvery, put, all, select } from "redux-saga/effects";
import { types } from "./types";
import { newsActions } from "./action";
import { applicationActions } from "../application/action";
import { api } from "../../api";

export function* newsWorker() {
  const { news: { page } } = yield select();
  yield put(applicationActions.setLoad(true));
  const response = yield api.fetchNews(page);
  const data = yield response.json();
  yield put(newsActions.setNews(data));
  yield put(newsActions.setPage(page + 1))
  yield put(applicationActions.setLoad(false));
}

export function* newWatcher() {
  yield all([takeEvery(types.GET_NEWS, newsWorker)]);
}
