import { useEffect, useState } from "react";
import { SEARCH_URL } from "../../../utils/constant";
import axios from "axios";
import Grid from "@mui/material/Grid";
import RecipeReviewCard from "../../atoms/RecipeReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/action-creators/index";

export default function RecipeListing(props) {
  const recipes = useSelector((state) => state?.recipes?.hits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("salad"));
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        {recipes?.map((item) => (
          <Grid item xs={4} key={item.recipe.url}>
            <RecipeReviewCard
              title={item.recipe.label}
              description={item.recipe.label}
              subheader={item.recipe.source}
              imageUrl={item.recipe.image}
              calories={item.recipe.calories}
              totalWeight={item.recipe.totalWeight}
              isListingWindowEnabled
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
