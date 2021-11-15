import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import BlogDetails from "./blog-components/blog-details";
import Subscribe from "./section-components/subscribe";
import Footer from "./global-components/footer";
import NavbarVS2 from "../components/Navbar/navbarvs2";
const BlogDetailsPage = () => {
  return (
    <div>
      <NavbarVS2 />
      <PageHeader headertitle="Blog" />
      <BlogDetails />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
