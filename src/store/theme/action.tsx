import { types, ThemeInterface } from "./types";

export const themeActions = {
  fetchTheme: (payload: string) => ({
    type: types.FETCH_THEME,
    payload
  }),
  setThemes: (theme: ThemeInterface) => ({
    type: types.SET_THEME,
    payload: theme
  }),
};
