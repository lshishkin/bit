import { combineReducers } from "redux";
import { newsReducer as news } from "./news/reducer";
import { applicationReducer as application } from "./application/reducer";
import { themeReducer as theme } from "./theme/reducer";

export const rootReducer = combineReducers({
  news,
  application,
  theme,
});
