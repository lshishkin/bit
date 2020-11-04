import { Reducer } from "redux";
import { types, ApplicationReducerInterface } from "./types";

const initialState = {
  load: false,
  error:false
};

export const applicationReducer: Reducer<
  ApplicationReducerInterface,
  { type: string; payload: boolean }
> = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOAD: {
      return {
        ...state,
        load: action.payload
      };
    }

    default:
      return state;
  }
};
