import React from "react";
import Navbar from "../widgets/navbar/Navbar";
import Footer from "../widgets/footer/Footer";
import { Outlet } from "react-router-dom";
import Topbar from "../widgets/topbar/Topbar";

const Layout = () => {
  return (
    <>
    <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
