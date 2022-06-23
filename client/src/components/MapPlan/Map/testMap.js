import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";
const TestMap = () => {
  const classes = useStyles();

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC4H3jphRRtJXihFdct0X71n0TvDt3-fSM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default TestMap;
