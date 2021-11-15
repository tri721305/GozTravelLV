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
import { getPlan, getPlansBySearch } from "../../actions/plans";
import Card from "./PlannerCard/card";
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

  function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = startDate;
    const addDays = function (days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }

  const songay = getDates(new Date(plan.startDate), new Date(plan.endDate));

  // console.log(songay);
  const songaynua = Object.values(songay);
  console.log(songaynua);
  console.log(typeof songaynua);

  const recommendedPlans = plans.filter(({ _id }) => _id !== plan._id);

  const openPlan = (_id) => history.push(`/plans/${_id}`);
  return (
    <div className="tour-details-area mg-top--70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tour-details-wrap">
              {/* Tao Plan Moi Ngay Di */}

              <div className="package-included-location">
                <div className="row">
                  {/* <div className="Main"> */}
                  {songaynua.map((x, i) => (
                    // <div className="Main2">
                    <Card
                      id={i}
                      plan={plan}
                      location={plan.location}
                      plandate={x}
                      endDate={plan.endDate}
                    />
                    // </div>
                  ))}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlandetailsTri;
