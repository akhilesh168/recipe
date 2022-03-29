import { useEffect, useState } from "react";
import { SEARCH_URL } from "../../../utils/constant";
import axios from "axios";
import Grid from "@mui/material/Grid";
import RecipeReviewCard from "../../atoms/RecipeReviewCard";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";

export default function RecipeDetail(props, { match }) {
  const recipes = useSelector((state) => state.recipes.hits);
  const { label } = useParams();
  const record = recipes.find((item) => item.recipe.label === decodeURI(label));
  console.log(history);
  return (
    <>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link to="/">
          Go Back <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        </Link>
      </Breadcrumbs>
      <RecipeReviewCard
        title={record.recipe.label}
        description={record.recipe.label}
        subheader={record.recipe.source}
        imageUrl={record.recipe.image}
        calories={record.recipe.calories}
        totalWeight={record.recipe.totalWeight}
        isListingWindowEnabled={false}
        ingredients={record.recipe.ingredients}
        healthLabels={record.recipe.healthLabels}
        mealType={record.recipe.mealType}
        totalNutrients={record.recipe.totalNutrients}
        digest={record.recipe.digest}
      />
    </>
  );
}
