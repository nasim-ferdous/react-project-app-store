import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";
import useApps from "../hooks/useApps";

const MainLayout = () => {
  const { loading } = useApps();
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>
      {loading === true ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
