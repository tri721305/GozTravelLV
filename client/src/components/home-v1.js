import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner";
import Searach from "./section-components/search";
import Intro from "./section-components/intro";
import Offer from "./section-components/offer";
import Video from "./section-components/video";
import HolidayPlan from "./section-components/holiday-plan";
import Review from "./section-components/review";
import BlogSection from "./blog-components/blog-section";
import Ads from "./section-components/ads-v2";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import NavbarVS2 from "./Navbar/navbarvs2";
import SearachV2 from "./section-components/search-v2";
const Home_V1 = () => {
  return (
    <div>
      {/* <NavbarVS2 /> */}
      <Banner />
      <Searach />
      <Intro />
      <Offer />
      <Video />
      <HolidayPlan />
      <Review />
      <BlogSection />
      <Ads />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home_V1;
