import { ActionsConstants } from "../constants/actions-constants";

export const saveRecipesToState = (recipes) => {
  return {
    type: ActionsConstants.SAVE_RECIPES,
    payload: [...recipes],
  };
};

export const getData = (searchKeyword) => {
  return {
    type: ActionsConstants.DATA_REQUESTED,
    payload: searchKeyword,
  };
};
