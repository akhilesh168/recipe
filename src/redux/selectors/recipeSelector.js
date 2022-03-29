import { createSelector } from "reselect";

const getRecipe = (state) => state.recipes;

export const recipeSelector = createSelector(getRecipe, (recipes) => recipes);
