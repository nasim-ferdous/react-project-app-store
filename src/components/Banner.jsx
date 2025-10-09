import React from "react";
import playStoreLogo from "../assets/playStore.png";
import appStoreLogo from "../assets/appStore.png";
import heroImg from "../assets/hero.png";
import { Link } from "react-router";
import useApps from "../hooks/useApps";

const Banner = () => {
  const { apps } = useApps();
  console.log(apps);
  const totalDownload = (apps ?? []).reduce((acc, app) => {
    acc + (app.downloads ?? 0);
  }, 0);
  console.log(totalDownload);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen ">
        <div className=" text-center ">
          <div className="">
            <h1 className="text-5xl font-bold mt-5">We Build</h1>
            <h1 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="text-[#627382] mt-5">
              At App Store, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex gap-3 justify-center mt-5">
              <Link
                to={"https://play.google.com/store/games?device=windows&pli=1"}
                className="btn"
              >
                <img src={playStoreLogo} alt="" />
                Google Play
              </Link>
              <Link to={"https://www.apple.com/app-store/"} className="btn">
                <img src={appStoreLogo} alt="" />
                App Store
              </Link>
            </div>
            <div className="flex justify-center mt-5">
              <img src={heroImg} alt="" />
            </div>
            <div className="min-h-84 bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
              <div className="max-w-3xl mx-auto py-10">
                <h1 className="text-4xl text-white font-bold">
                  Trusted by Millions, Built for You
                </h1>
                <div className="flex flex-col md:flex-row justify-between mt-8">
                  <div className="text-white space-y-3">
                    <p>Total Downloads</p>
                    <p className="text-7xl">29.6M</p>
                    <p>21% more than last month</p>
                  </div>
                  <div className="text-white space-y-3">
                    <p>Total Reviews</p>
                    <p className="text-7xl">906K</p>
                    <p>46% more than last month</p>
                  </div>
                  <div className="text-white space-y-3">
                    <p>Active Apps</p>
                    <p className="text-7xl">132+</p>
                    <p>31 more will Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
