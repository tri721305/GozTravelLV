import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import DestinationLIst from "./section-components/destination-list";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import PlanList from "./PlanList/PlanList";

const DestinationList = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Danh sách bài review" />
      <DestinationLIst />
      {/* <PlanList /> */}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default DestinationList;
