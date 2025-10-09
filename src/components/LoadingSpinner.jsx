import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-195px)] ">
      <FadeLoader color="#632ee3"></FadeLoader>
    </div>
  );
};

export default LoadingSpinner;
