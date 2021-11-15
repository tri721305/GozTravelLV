import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./styles.css";
import trashIcon from ".././DuPhong/TodoItem/assets/trash.png";
import useStyles from "./styles";
import { commentPlan } from "../../../actions/plans";
const AddActivities = ({ plan, plandate }) => {
  const classes = useStyles();
  const [comments, setComments] = useState(plan?.comments);
  const [comment, setComment] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();

  const commentsRef = useRef();

  const user = JSON.parse(localStorage.getItem("profile"));

  const handleClick = async () => {
    // const finalComment = `${user.result.name}: ${comment} `;
    // const finalComment = `${plan.startDate}:${time}: ${comment} `;
    const finalComment = {
      date: plandate,
      time: time,
      comment: comment,
    };

    const newComments = await dispatch(commentPlan(finalComment, plan._id));

    setComments(newComments);
    setComment("");
    setTime("");
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  // const x = [];

  // RenderComment();
  return (
    // <div>
    <>
      <div
        className={classes.commentsOuterContainer}
        // style={{ overflow: "hidden" }}
        style={{ backgroundColor: "#F39142" }}
      >
        <div
          className={classes.commentsInnerContainer}
          // style={{ overflowY: "scroll" }}
        >
          {comments.map((c, i) =>
            Date.parse(c.date) === Date.parse(plandate) ? (
              <div
                id={c.time}
                className="TodoItem"
                style={{ background: "none" }}
              >
                <div className="TodoItem-dueTime">
                  <h4
                    className="TodoItem-dueTime__time"
                    style={{ fontSize: "15px" }}
                  >
                    {c.time}
                  </h4>
                  {/* <h5 className="TodoItem-dueTime__meridiem">AM</h5> */}
                </div>
                <div className="TodoItem-todo">
                  <div className="TodoItem-todo__text">{c.comment}</div>
                  <div className="TodoItem-todo__memo">{plan.location}</div>
                </div>
                <div className="TodoItem-delete">
                  <button
                    // onClick={() => onDeleteClick(id)}
                    className="TodoItem-delete__button"
                  >
                    <img
                      src={trashIcon}
                      alt="Delete"
                      className="TodoItem-delete__buttonIcon"
                    />
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )
          )}

          <div ref={commentsRef} />
        </div>
      </div>

      {user?.result?.name && (
        <div
          className="form-activities"
          style={{
            width: "100%",
            display: "grid",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          {/* <Typography gutterBottom variant="h6">
            Insert your Activities
          </Typography> */}
          <TextField
            fullWidth
            rows={3}
            variant="outlined"
            label="Activities"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            // style={{ border: "none" }}
          />
          <TextField
            fullWidth
            //   rows={4}
            type="time"
            variant="outlined"
            label="Time"
            //   multiline
            value={time}
            onChange={(e) => setTime(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />

          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#F39142",
              color: "white",
            }}
            fullWidth
            disabled={!(comment && time)}
            variant="contained"
            onClick={handleClick}
          >
            Add
          </Button>
        </div>
      )}
      {/* </div>
    </div> */}
    </>
  );
};

export default AddActivities;
