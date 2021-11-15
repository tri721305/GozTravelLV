import React from "react";
// import { Container } from "@material-ui/core";

import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  Redirect,
} from "react-router-dom";
// import LocationForm from "./components/PlanLocation/planLocation";

import HomeCreate from "./components/Home/Home";
import Home from "./components/home-v1";
import Auth from "./components/Auth/Auth";
import About from "./components/about";
import TourDetails from "./components/tour-details";
import DestinationList from "./components/destination-list";
import DestinationListV2 from "./components/destination-list-v2";
import NavbarVS2 from "./components/Navbar/navbarvs2";
import UserProfilePage from "./components/user-profile";
import PlanDetails from "./components/PlanDetail/Plandetails";
import DateForm from "./components/DateForm/dataform";
import TourListPage from "./components/tour-list";
import Planners from "./components/Planners/Planners";
import Search from "./components/PlanLocation/Search";

import PlannersTri from "./components/PlannerDetails/plannerdetails";
import ReviewPost from "./components/section-components/tour-details";
import BlogDetails from "./components/blog-details";

import PostDetails from "./components/postDetails";
import AdminDetails from "./components/admindetails";
import MapPlan from "./components/MapPlan/MapPlan";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <div>
      {/* <HashRouter basename="/"> */}
      <BrowserRouter>
        {/* <Container maxWidth="lg"> */}

        <Switch>
          <Route path="/" exact component={MapPlan} />
          <Route path="/posts" exact component={HomeCreate} />
          <Route path="/posts/search" exact component={HomeCreate} />

          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/tourlist" component={TourDetails} />

          <Route path="/planlocation" component={Search} />
          <Route path="/plandate" component={DateForm} />
          <Route path="/plans" exact component={Planners} />

          <Route path="/plans/search" exact component={Planners} />
          <Route path="/plans/:id" component={TourDetails} />
          <Route path="/blogdetails" component={BlogDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route path="/about" component={About} />

          <Route path="/admindetail" component={AdminDetails} />
          <Route path="/destinationlist" component={DestinationListV2} />

          <Route path="/user-profile" component={UserProfilePage} />
        </Switch>
        {/* </Container> */}
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  );
};

export default App;
