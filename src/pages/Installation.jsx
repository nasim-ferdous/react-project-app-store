import React, { useEffect, useState } from "react";
import downloadImg from "../assets/fi_18110198.png";
import starImg from "../assets/star.png";
import { toast, ToastContainer } from "react-toastify";
import useApps from "../hooks/useApps";
import LoadingSpinner from "../components/LoadingSpinner";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState("none");
  const { loading } = useApps;
  useEffect(() => {
    const installedApp = JSON.parse(localStorage.getItem("installed"));
    if (installedApp?.length) {
      setInstalled(installedApp);
    }
  }, []);
  const sortedApp = (() => {
    if (sort === "Size asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sort == "Size dsc") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();
  const handleUninstall = (id) => {
    const existingApp = JSON.parse(localStorage.getItem("installed"));
    const updatedApp = existingApp.filter((a) => a.id !== id);
    setInstalled(updatedApp);
    localStorage.setItem("installed", JSON.stringify(updatedApp));
    toast.error("the app is Uninstalled");
  };
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="bg-gray-100">
      <div className="max-w-11/12 mx-auto py-10">
        <h1 className="text-center font-bold text-5xl my-5">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex flex-col gap-2 md:flex-row justify-between items-center mt-5">
          <p className="text-2xl font-semibold">
            <span className="text-sm">({sortedApp.length}) </span>Apps Found
          </p>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="Size asc">Low-&gt;High</option>
              <option value="Size dsc">High-&gt;Low</option>
            </select>
          </label>
        </div>
        {/* installed list */}
        <div className="space-y-5 mt-8">
          {sortedApp.map((i) => (
            <div
              key={i.id}
              className=" flex justify-between items-center bg-base-100 shadow-sm p-5"
            >
              <div className="flex gap-3">
                <div>
                  <img
                    className="h-16 w-16 rounded-xl"
                    src={i.image}
                    alt="app"
                  />
                </div>

                <div>
                  <h2 className="">{i.title}</h2>
                  <div className="flex text-xs gap-4 mt-3">
                    <div className="flex gap-1 text-[#00d390]">
                      <img className="w-3 h-3" src={downloadImg} alt="" />
                      <p>{i.downloads}</p>
                    </div>
                    <div className="flex gap-1 text-[#FF8811]">
                      <img className="w-3 h-3" src={starImg} alt="" />
                      <p>{i.ratingAvg}</p>
                    </div>
                    <div className="text-[#627382]">
                      <p>{i.size} mb</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <button
                  onClick={() => handleUninstall(i.id)}
                  className="btn text-white bg-[#00d390]"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
          <ToastContainer
            position="top-center"
            theme="colored"
          ></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Installation;
