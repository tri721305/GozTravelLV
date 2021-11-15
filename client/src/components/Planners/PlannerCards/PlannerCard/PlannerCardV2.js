import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { likePlan, deletePlan } from "../../../../actions/plans";
import useStyles from "./styles";

const PlannerCardV2 = ({ plan, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  const [likes, setLikes] = useState(plan?.likes);

  const userId = user?.result?.googleId || user?.result?._id;
  const hasLikedPlan = plan.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePlan(plan._id));

    if (hasLikedPlan) {
      setLikes(plan.likes.filter((id) => id !== userId));
    } else {
      setLikes([...plan.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      // console.log(post.likes.length);
      return likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    } else {
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPlan = () => history.push(`/plans/${plan._id}`);

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPlan}>
        <CardMedia
          className={classes.media}
          image={
            plan.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={plan.location}
        />
        <div className={classes.overlay}>
          <Typography variant="h7">{plan.name}</Typography>
          <Typography variant="body2">
            {moment(plan.createdAt).fromNow()}
          </Typography>
        </div>
      </ButtonBase>
      {(user?.result?.googleId === plan?.creator ||
        user?.result?._id === plan?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(plan._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <ButtonBase className={classes.cardAction} onClick={openPlan}>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {/* {plan.tags.map((tag) => `#${tag} `)} */}
            {/* {post.tags} */}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h7"
          component="h3"
        >
          {plan.location}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {plan.message}
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          // onClick={() => dispatch(likePost(post._id))}
          onClick={handleLike}
        >
          <Likes />
          {plan.likeCount}{" "}
        </Button>
        {(user?.result?.googleId === plan?.creator ||
          user?.result?._id === plan?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePlan(plan._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PlannerCardV2;
