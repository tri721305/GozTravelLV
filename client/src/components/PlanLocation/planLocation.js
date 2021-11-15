import React, { useState } from "react";
import "./search/style.css";
import { Link } from "react-router-dom";
const LocationForm = () => {
  const [isActive, setIsActive] = useState("false");
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="locationform">
      <form className="content" onSubmit={handleClick}>
        <input
          type="text"
          name="input"
          className={isActive ? "inputform" : "square"}
          // id="search-input"
        />
        <button
          type="reset"
          className={isActive ? "searchform" : "close"}
          // id="search-btn"
          onClick={handleClick}
        ></button>
        <button className="square1" type="submit">
          <Link to="/plandate">Submit</Link>
        </button>
      </form>
    </div>
    // <form>
    //   <label>
    //     Name:
    //     <input type="text" name="name" />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
  );
};

export default LocationForm;
