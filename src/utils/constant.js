export const BASE_URL = "https://www.edamam.com";

export const SEARCH_URL = (searchKeyword = "") =>
  `${BASE_URL}/search?q=${searchKeyword}`;
