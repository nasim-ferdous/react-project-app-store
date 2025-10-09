import { Search } from "lucide-react";
import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/appCard";
import { Link } from "react-router";

const Apps = () => {
  const [search, setSearch] = useState("");
  const { apps } = useApps();
  const term = search.trim().toLocaleLowerCase();
  const searchedApp = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  // console.log(searchedApp);

  return (
    <div className="bg-gray-100">
      <div className="max-w-11/12 mx-auto py-10">
        <h1 className="text-center font-bold text-5xl my-5">
          Our All Applications
        </h1>
        <p className="text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between items-center mt-5">
          <p className="text-2xl font-semibold">
            <span className="text-sm">({searchedApp.length}) </span>Apps Found
          </p>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
        {searchedApp.length !== 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {searchedApp.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        ) : (
          <div className="text-5xl font-bold flex  justify-center items-center">
            <p>No App Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
