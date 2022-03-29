import axios from "axios";
import { SEARCH_URL } from "./constant";

export default function getRecipeSearchData(searchKeyword) {
  return axios.get(SEARCH_URL(searchKeyword));
}
