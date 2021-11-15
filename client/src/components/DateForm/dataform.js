// import "./App.css";
import React, { useState } from "react";
import { addDays } from "date-fns";
import Button from "@material-ui/core/Button";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./style.css";
import { Link } from "react-router-dom";
function DateForm() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <div className="DateForm">
      <form className="dates-form">
        <DateRangePicker
          onChange={(item) => {
            setState([item.selection]);
            console.log(state);
          }}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        />
        {/* <Link className="btn btn-yellow" to="/tour-details">
          Book Now <i className="fa fa-paper-plane" />
        </Link> */}
        <Button
          style={{
            backgroundColor: "#836529",
            marginTop: "5%",
            width: "10%",
            backgroundColor: "#F39142",
            color: "white",
          }}
          // className="btn btn-yellow"
          type="submit"
          to="/planners"
        >
          <Link to="planners">Submit</Link>
        </Button>
      </form>
    </div>
  );
}

export default DateForm;
