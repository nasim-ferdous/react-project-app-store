import React from "react";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import LoadingSpinner from "../components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar></Navbar>
      {navigation?.state === "loading" ? (
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
