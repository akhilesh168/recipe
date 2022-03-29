import { ActionsConstants } from "../constants/actions-constants";

const initialState = {
  recipes: [],
  searchKeyword: "",
  lastSearchKeyword: "",
  selectedRecipe: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionsConstants.SAVE_RECIPES: {
      return { ...state, recipes: action.payload };
    }
    case ActionsConstants.DATA_LOADED: {
      return { ...state, recipes: action.payload };
    }
    case ActionsConstants.SAVE_SEARCH_KEYWORDS: {
      return { ...state, searchKeyword: action.payload };
    }
    default:
      return state;
  }
}
