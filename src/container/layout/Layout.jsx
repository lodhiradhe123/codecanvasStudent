import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const Layout = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-b from-blue-200 to-white">
      <Navbar />
      <div className="">
        <Outlet /> {/* This will render the selected component */}
      </div>
    </div>
  );
};

export default Layout;
