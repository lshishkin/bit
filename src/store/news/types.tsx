export const types = {
  GET_NEWS: "GET_NEWS",
  SET_NEWS: "SET_NEWS",
  SET_PAGE: "SET_PAGE",
};

export interface NewInterface {
  title: string;
  content: string;
}

export interface NewsReducerInterface {
  news: NewInterface[];
  page: number;
}


export interface NewsActionInterface {
  type: string;
  payload: any;
}

