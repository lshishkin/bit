import { ROOT_URL } from "./config";

export const api = new (class Api {
  fetchNews(page: number) {
    return fetch(`${ROOT_URL}/api/news/get?page=${page}&count=10`);
  }
  fetchTheme(name: string) {
    return fetch(`${ROOT_URL}/api/theme/get?name=${name}`);
  }
})();
