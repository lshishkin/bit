export const types = {
  SET_LOAD: "SET_LOAD",
  SET_ERROR: "SET_ERROR"
};

export interface ApplicationReducerInterface {
  load: boolean;
  error: boolean;
}
