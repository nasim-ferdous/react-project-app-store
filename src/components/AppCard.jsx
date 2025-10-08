import { Download, Star } from "lucide-react";
import React from "react";

const AppCard = ({ app }) => {
  //   console.log(app);
  const { title, image, downloads, ratingAvg } = app;

  return (
    <div className="card bg-base-100  shadow-lg border hover:scale-105 cursor-pointer transition ease-in-out">
      <figure className=" p-10 h-48 overflow-hidden bg-gray-200">
        <img src={image} alt="app" className="rounded-xl w-full object-cover" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
      </div>
      <div className=" flex justify-between p-8">
        <p className="btn flex gap-2 text-[#00d390]">
          <Download></Download>
          {downloads}
        </p>
        <p className="btn flex gap-2 text-[#FF8811]">
          <Star></Star>
          {ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
