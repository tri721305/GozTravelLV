import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router-dom";

// import CommentSection from "./CommentSection";

import useStyles from "./styles.js";
import { getPlan, getPlansBySearch } from "../../actions/plans.js";

const Plandetails = () => {
  const { plan, plans, isLoading } = useSelector((state) => state.plans);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();
  //   console.log("Plandetails");

  useEffect(() => {
    dispatch(getPlan(id));
  }, [id]);

  useEffect(() => {
    if (plan) {
      dispatch(getPlansBySearch({ search: "none" }));
    }
  }, [plan]);

  if (!plan) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPager}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPlans = plans.filter(({ _id }) => _id !== plan._id);

  const openPlan = (_id) => history.push(`/plans/${_id}`);
  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {plan.location}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {/* {plan.tags.map((tag) => `#${tag} `)} */}AS
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {plan.message}
          </Typography>
          <Typography variant="h6">Created by: {plan.name}</Typography>
          <Typography variant="body1">
            {moment(plan.createdAt).fromNow()}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <Typography variant="body1">
            <strong>Realtime Chat - coming soon!</strong>
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          {/* <CommentSection plan={plan} /> */}
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              plan.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={plan.location}
          />
        </div>
      </div>
      {!!recommendedPlans.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPlans.map(
              ({ location, name, message, likes, selectedFile, _id }) => (
                <div
                  style={{ margin: "20px", cursor: "pointer" }}
                  onClick={() => openPlan(_id)}
                  key={_id}
                >
                  <Typography gutterBottom variant="h6">
                    {location}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {name}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2">
                    {message}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    {/* Likes: {likes.length} */}
                  </Typography>
                  <img src={selectedFile} width="200px" />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Plandetails;
