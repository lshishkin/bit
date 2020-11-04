export const types = {
  FETCH_THEME: "FETCH_THEME",
  SET_THEME: "SET_THEME",
};

export interface ThemeInterface {
  mainColor: string;
  name: string;
  secondColor: string;
  textColor: string;
  title: string;
}

export interface ThemeReducerInterface {
  theme: ThemeInterface;
}

export interface ThemeActionInterface {
  type: string;
  payload: any;
}
