import React, { useState, useEffect, useContext } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
// import "react-date-range/dist/styles.css"; // main css file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRange } from "react-date-range";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { createPlan, updatePlan } from "../../../actions/plans";
import { UserContext } from "../../../App";
const FormPlan = ({ currentId, setCurrentId }) => {
  const [planData, setPlanData] = useState({
    location: "",
    message: "",
    startDate: "",
    endDate: "",
    selectedFile: "",
  });

  const { userState } = useContext(UserContext);
  const plan = useSelector((state) =>
    currentId
      ? state.plans.plans.find((message) => message._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  // const user = JSON.parse(localStorage.getItem("profile"));
  const user = userState.currentUser;
  const history = useHistory();

  useEffect(() => {
    if (plan) setPlanData(plan);
  }, [plan]);

  const clear = () => {
    setCurrentId(0);
    setPlanData({
      location: "",
      message: "",
      startDate: "",
      endDate: "",
      selectedFile: "",
    });
  };
  console.log(user, plan);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (currentId === 0) {
      // dispatch(createPlan({ ...planData, name: user?.result?.name }, history));
      dispatch(createPlan({ ...planData, name: user?.name }, history));
      clear();
    } else {
      dispatch(
        // updatePlan(currentId, { ...planData, name: user?.result?.name })
        updatePlan(currentId, { ...planData, name: user?.name })
      );
      clear();
    }
  };

  if (!user?.name) {
    // if (!userState.currentUser.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to Create your Trip Planners
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${plan.title}"` : "Creating a Trip Planner"}
        </Typography>
        {/* <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={planData.creator}
          onChange={(e) =>
            setPlanData({ ...planData, creator: e.target.value })
          }
        /> */}

        <TextField
          id="startdate"
          label="StartDate"
          type="date"
          InputLabelProps={{ shrink: true, required: true }}
          fullWidth
          variant="outlined"
          name="begindate"
          value={planData.startDate}
          onChange={(e) => {
            setPlanData({ ...planData, startDate: e.target.value });
            // console.log(planData.startDate);
          }}
        />
        <TextField
          id="enddate"
          label="EndDate"
          type="date"
          InputLabelProps={{ shrink: true, required: true }}
          fullWidth
          variant="outlined"
          name="enddate"
          value={planData.endDate}
          onChange={(e) =>
            setPlanData({ ...planData, endDate: e.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Point of departure"
          fullWidth
          multiline
          // rows={4}
          value={planData.message}
          onChange={(e) => {
            setPlanData({ ...planData, message: e.target.value });
            console.log(planData);
          }}
        />

        <TextField
          name="title"
          variant="outlined"
          label="Destination"
          fullWidth
          value={planData.location}
          onChange={(e) =>
            setPlanData({ ...planData, location: e.target.value })
          }
        />

        {/* <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={planData.tags}
          onChange={(e) =>
            setPlanData({ ...planData, tags: e.target.value.split(",") })
          }
        /> */}
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPlanData({ ...planData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          style={{ backgroundColor: "#F39142" }}
        >
          Submit
        </Button>
        {/* <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button> */}
      </form>
    </Paper>
  );
};

export default FormPlan;
