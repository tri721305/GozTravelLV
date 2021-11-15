import React from "react";
import dateFormat from "dateformat";
import AddActivities from "./addplanactivities";
import "./styles.css";
const Card = ({ plandate, endDate, location, plan, id }) => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  let imagealt = "image";

  return (
    <div className="col-lg-4 col-md-4">
      <div className="single-blog" style={{ display: "grid" }}>
        <div className="p-list" style={{ backgroundColor: "#F39142" }}>
          {/* <div className="list">{id + 1}</div> */}
          <div className="Date">
            <h1 className="Date__day">{new Date(plandate).getDay}</h1>
            <h5 className="Date__full-date">
              {dateFormat(plandate, "mmm dS, yyyy")}
            </h5>
          </div>
          {/* <p>{dateFormat(plandate, "mmmm dS, yyyy ")}</p> */}
        </div>
        {/* <div className="thumb">
          <img src={publicUrl + "assets/img/blog/8.png"} alt="blog" />
        </div> */}
        <div className="single-blog-details" style={{ padding: 0 }}>
          {/* <p className="content">{dateFormat(plandate, "mmmm dS, yyyy ")}</p> */}
          {/* <h4 className="title">Welcome to {plan.location}</h4> */}
          {/* <div className="TodoItemList"> */}
          <AddActivities plandate={plandate} plan={plan} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
