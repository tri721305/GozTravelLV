import React from "react";

import PageHeader from "./global-components/page-header";
import UserProfile from "./section-components/user-profile";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import NavbarVS2 from "./Navbar/navbarvs2";
const UserProfilePage = () => {
  return (
    <div>
      <NavbarVS2 />
      <PageHeader headertitle="User Profile" />
      <UserProfile />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default UserProfilePage;
