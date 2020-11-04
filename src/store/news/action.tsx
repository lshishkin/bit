import { types, NewInterface } from "./types";

export const newsActions = {
  fetchNews: () => ({
    type: types.GET_NEWS
  }),
  setNews: (news: NewInterface[]) => ({
    type: types.SET_NEWS,
    payload: news
  }),
  setPage: (page: number) => ({
    type: types.SET_PAGE,
    payload: page
  })
};
