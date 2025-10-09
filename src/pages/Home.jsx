import React from "react";
import Banner from "../components/Banner";
import useApps from "../hooks/useApps";
import AppCard from "../components/appCard";
import { Link } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { apps, loading } = useApps();
  // console.log(apps);
  const homeApp = apps.slice(0, 8);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <Banner></Banner>
      <div className="max-w-11/12 mx-auto mt-8">
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-bold">Trending Apps</h1>
          <p className="text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {homeApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="flex justify-center my-5">
          <Link
            to={"/apps"}
            className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
          >
            Show All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
