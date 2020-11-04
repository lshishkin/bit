import { Reducer } from "redux";
import {
  types,
  ThemeReducerInterface,
  ThemeActionInterface
} from "./types";

const initialState = {
  theme: {
    mainColor: "rgb(206, 240, 227)",
    name: "light",
    secondColor: "rgb(255, 255, 255)",
    textColor: "rgb(10, 10, 10)",
    title: "Светлая тема"
  }
};

export const themeReducer: Reducer<
  ThemeReducerInterface,
  ThemeActionInterface
> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }
    default:
      return state;
  }
};
