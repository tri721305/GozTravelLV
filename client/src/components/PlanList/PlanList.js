import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Plan1 from "./Plan/Plan1";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";
const PlanList = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();

  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <div style={{ marginTop: 40 }}>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={12} md={6} lg={6}>
            <Plan1 post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlanList;
