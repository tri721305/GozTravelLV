import React from "react";
import NavbarVS2 from "./Navbar/navbarvs2";
import PageHeader from "./global-components/page-header";
import X from "./section-components/tour-details";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
// import x from './secti'
const AdminDetail = () => {
  return (
    <div>
      <NavbarVS2 />
      <PageHeader headertitle="Đà Lạt" />
      <X />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AdminDetail;
