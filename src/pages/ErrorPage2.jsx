import React from "react";
import error2img from "../assets/error-con.jpg";
import { Link } from "react-router";

const ErrorPage2 = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-6 justify-center items-center">
        <img className="w-60" src={error2img} alt="error" />
        <h1 className="text-5xl font-bold">App is not found</h1>
        <p className="text-[#627382]">
          The app you are looking for does not exist or remove.
        </p>
        <Link
          to={"/"}
          className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage2;
