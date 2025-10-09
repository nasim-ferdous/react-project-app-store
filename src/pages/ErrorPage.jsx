import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col gap-6 justify-center items-center">
        <img src={errorImg} alt="error" />
        <h1 className="text-5xl font-bold">Oops, page not found!</h1>
        <p className="text-[#627382]">
          The page you are looking for is not available.
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

export default ErrorPage;
