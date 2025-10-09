import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center p-50  ">
      <FadeLoader color="#632ee3"></FadeLoader>
    </div>
  );
};

export default LoadingSpinner;
