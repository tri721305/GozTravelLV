import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./styles";
import PlannerCard from "./PlannerCard/PlannerCard";

const PlannerCards = ({ setCurrentId }) => {
  const { plans, isLoading } = useSelector((state) => state.plans);
  const classes = useStyles();
  // console.log(plans);
  if (!plans.length && isLoading) return "No plans";

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
        {plans.map((plan) => (
          <Grid key={plan._id} item xs={12} sm={12} md={6} lg={6}>
            <PlannerCard plan={plan} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PlannerCards;
