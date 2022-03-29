import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropType from "prop-types";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import VerticalTabs from "../atoms/VerticalTabs";

export default function RecipeReviewCard(props) {
  const navigate = useNavigate();
  const navigateTo = (event, label) => {
    isListingWindowEnabled
      ? navigate(`recipe/${label}`)
      : event.preventDefault();
  };

  const {
    title,
    subheader,
    imageUrl,
    imageAltText,
    description,
    recipeDescription,
    calories,
    totalWeight,
    cuisineType,
    digest,
    isListingWindowEnabled,
  } = props;

  return (
    <Card
      sx={!isListingWindowEnabled ? {} : { maxWidth: 345 }}
      onClick={(event) => navigateTo(event, title)}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageUrl || ""}
        alt={imageAltText || ""}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <label>Calories Count {calories.toFixed(2)}</label>
          </Grid>
          <Grid item xs={6}>
            <label>Total Weights {totalWeight.toFixed(2)}</label>
          </Grid>
        </Grid>
        {!isListingWindowEnabled ? (
          <Grid container>
            <Grid item xs={6}>
              <VerticalTabs digest={digest} />
            </Grid>
          </Grid>
        ) : null}

        <Typography paragraph>{recipeDescription}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
