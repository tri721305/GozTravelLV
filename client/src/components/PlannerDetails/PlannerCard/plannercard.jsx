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
import dateFormat from "dateformat";
// import CommentSection from "./CommentSection";

import useStyles from "../styles";
import { getPlan, getPlansBySearch } from "../../../actions/plans";

const PlandetailsTri = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

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
      dispatch(
        getPlansBySearch({ search: "none", tags: plan?.tags.join(",") })
      );
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
    <div className="tour-details-wrap">
      <h4 className="single-page-small-title">Plan</h4>

      {/* Tao Plan Moi Ngay Di */}
      <div className="package-included-location">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="single-blog">
              <div className="p-list">
                <div className="list">1</div>
                <p>{dateFormat(plan.startDate, "mmmm dS, yyyy ")}</p>
              </div>
              <div className="thumb">
                <img src={publicUrl + "assets/img/blog/8.png"} alt="blog" />
              </div>
              <div className="single-blog-details">
                <h4 className="title">{plan.location}</h4>
                <p className="content">
                  Bước xuống xe là cảm giác không lẫn vào đâu được, không khí se
                  se lạnh....
                </p>
                <a className="btn-read-more" href="#">
                  <span>
                    Add more activities
                    <i className="la la-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlandetailsTri;
