import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import downloadImg from "../assets/fi_18110198.png";
import starImg from "../assets/star.png";
import likeImg from "../assets/like.png";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../components/LoadingSpinner";

const AppDetails = () => {
  const [install, setInstall] = useState(false);
  const { id } = useParams();
  const { apps, loading } = useApps();

  const app = apps.find((ap) => ap.id === Number(id));
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    description,
    ratings,
  } = app;

  const handleInstallBtn = () => {
    setInstall(true);
    const existingApp = JSON.parse(localStorage.getItem("installed"));
    let updatedApp = [];
    if (existingApp) {
      const isDouble = existingApp.some((a) => a.id === app.id);
      if (isDouble) return toast.error("Already Installed");
      updatedApp = [...existingApp, app];
    } else {
      updatedApp.push(app);
    }

    localStorage.setItem("installed", JSON.stringify(updatedApp));
    toast.success("this app is installed");
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-11/12 mx-auto py-10">
        {/* detail Card */}
        <div className="card flex flex-col md:flex-row card-side bg-base-100 shadow-sm p-10">
          <figure className="h-82 overflow-hidden">
            <img className="w-full object-cover" src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <div className="flex w-full flex-col">
              <div className="card  rounded-box grid  ">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-gray-500">
                  Developed by :{" "}
                  <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
                    {companyName}
                  </span>
                </p>
              </div>
              <div className="divider"></div>
              <div className="card  rounded-box grid ">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="space-y-3">
                    <img src={downloadImg} alt="download" />
                    <p>Downloads</p>
                    <p className="text-4xl font-bold">{downloads}</p>
                  </div>
                  <div className="space-y-3">
                    <img src={starImg} alt="star" />
                    <p>Average Ratings</p>
                    <p className="text-4xl font-bold">{ratingAvg}</p>
                  </div>
                  <div className="space-y-3">
                    <img src={likeImg} alt="like" />
                    <p>Total Reviews</p>
                    <p className="text-4xl font-bold">{reviews}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions mt-5 ">
              <button
                disabled={install}
                onClick={handleInstallBtn}
                className="btn bg-[#00d390] text-white "
              >
                {install ? "Installed" : `Install Now (${size} MB)`}
              </button>
              <ToastContainer
                position="top-center"
                theme="colored"
              ></ToastContainer>
            </div>
          </div>
        </div>
        {/* barchart */}
        <div className="my-5">
          <h1 className="font-bold text-xl ">Ratings</h1>
          <div className="h-80 ">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                width={500}
                height={300}
                data={ratings}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" reversed />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="count"
                  fill="#ff8811"
                  activeBar={<Rectangle fill="gold" stroke="purple" />}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* description */}
        <div className=" space-y-3 mt-5">
          <h1 className="font-bold text-xl ">Description</h1>
          <p className="text-[#627382]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
