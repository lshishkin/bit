import { NewsReducerInterface } from "./news/types";
import { ApplicationReducerInterface } from "./application/types";
import { ThemeReducerInterface } from "./theme/types";

export interface IApplicationState {
  news: NewsReducerInterface;
  application: ApplicationReducerInterface;
  theme: ThemeReducerInterface;
}
