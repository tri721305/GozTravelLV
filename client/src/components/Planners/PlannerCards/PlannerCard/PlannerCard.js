import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import dateFormat from "dateformat";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePlan } from "../../../../actions/plans";
import { Link, useHistory } from "react-router-dom";
import useStyles from "./styles";
import { UserContext } from "../../../../App";
const PlannerCard = ({ plan, setCurrentId }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";

  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { userState } = useContext(UserContext);
  const user = userState.currentUser;
  // const user = JSON.parse(localStorage.getItem("profile"));

  // const userId = user?.result?.googleId || user?.result?._id;

  // const openPlan = () => history.push(`/plans/${plan._id}`);

  const openPlan = () => history.push(`/plans/${plan._id}`);

  return (
    <div className="tour-list-area  viaje-go-top">
      <div className="container">
        <div className="row">
          {/* <ButtonBase className={classes.cardAction} onClick={openPlan}> */}
          <div className="col-lg-10">
            <div
              className="single-destinations-list style-four"
              style={{ borderRadius: "30px", width: "400px" }}
            >
              <div
                className="blur-thumb"
                style={{
                  backgroundImage:
                    "url(" + publicUrl + "assets/img/destination-list/16.png)",
                }}
              />

              <div className="details">
                <p className="location">
                  <img src={publicUrl + "assets/img/icons/1.png"} alt="map" />
                  VietNam
                </p>
                <h4 className="title">
                  <Link onClick={openPlan}>{plan.location}</Link>
                </h4>

                <div className="list-price-meta">
                  <ul className="tp-list-meta d-inline-block">
                    <li>
                      <i className="fa fa-calendar-o" />{" "}
                      {dateFormat(plan.startDate, "mmmm dS, yyyy ")}
                    </li>
                    <li>
                      <i className="fa fa-clock-o" />
                      {(parseInt(Date.parse(plan.endDate)) -
                        parseInt(Date.parse(plan.startDate))) /
                        86400000}{" "}
                      days
                    </li>
                    {/* {(user?.result?.googleId === plan?.creator ||
                      user?.result?._id === plan?.creator) && ( */}
                    {(user?.googleId === plan?.creator ||
                      user?._id === plan?.creator) && (
                      <li>
                        <Button
                          size="small"
                          color="inherit"
                          onClick={() => dispatch(deletePlan(plan._id))}
                        >
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </li>
                    )}
                  </ul>
                  <div className="tp-price-meta d-inline-block">
                    {/* <p>Price</p> */}
                    {/* <h2>
                      620 <span>$</span>
                    </h2> */}
                    {/* <Button>Hi</Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </ButtonBase> */}
        </div>
      </div>
    </div>
  );
};

export default PlannerCard;
