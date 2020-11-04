import { types } from "./types";

export const applicationActions = {
  setLoad: (status: boolean) => ({
    type: types.SET_LOAD,
    payload: status
  }),
  setError: (status: boolean) => ({
    type: types.SET_ERROR,
    payload: status
  })
};
