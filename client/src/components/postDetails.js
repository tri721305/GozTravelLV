import React from "react";
import NavbarVS2 from "./Navbar/navbarvs2";
import PageHeader from "./global-components/page-header";
// import TourDetails from './section-components/tour-details';
import DestinationDetails from "./PostDetails/PostDetails";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import PlannersTri from "../components/PlannerDetails/plannerdetails";
const PostDetails = () => {
  return (
    <div>
      <NavbarVS2 />
      <PageHeader headertitle="Details" />
      <DestinationDetails />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
};

export default PostDetails;
