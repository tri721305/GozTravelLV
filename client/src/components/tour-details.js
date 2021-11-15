import React from "react";
import NavbarVS2 from "./Navbar/navbarvs2";
import PageHeader from "./global-components/page-header";
// import TourDetails from './section-components/tour-details';
import TourDetails from "./PlanList/Plandetails/activities";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import PlannersTri from "../components/PlannerDetails/plannerdetails";
const TourDetailsPage = () => {
  return (
    <div>
      <NavbarVS2 />
      <PageHeader headertitle="Planner" />
      <PlannersTri />
      {/* <Subscribe /> */}
      <Footer />
    </div>
  );
};

export default TourDetailsPage;
