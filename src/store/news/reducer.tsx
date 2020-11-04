import { Reducer } from "redux";
import {
  types,
  NewsReducerInterface,
  NewsActionInterface,
} from "./types";

const initialState = {
  news: [],
  page: 1
};

export const newsReducer: Reducer<
  NewsReducerInterface,
  NewsActionInterface
> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NEWS: {
      return {
        ...state,
        news: [...state.news, ...action.payload]
      };
    }
    case types.SET_PAGE: {
      return {
        ...state,
        page: action.payload
      };
    }

    default:
      return state;
  }
};
