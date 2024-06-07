import React from "react";
import { icons } from "../../../shared/libs/icons";

const SingleGallery = ({ gallery_img, heading, sub_heading, icon }) => {
  return (
    <div className="gallery mx-3">
      <img
        className="w-full h-full object-cover"
        src={gallery_img}
        alt="slide image"
      />
      {/* content */}

      <div className="flex flex-col justify-center items-center contant">
        <div className="rounded-full w-[50px] h-[50px] p-3 bg-[#3498db] text-3xl flex justify-center items-center text-white hover:bg-primary hover:text-white cursor-pointer transition-all duration-150 ease-out">
          {icon}
        </div>
        <div className="flex flex-col gap-1 justify-center items-center pt-3">
          <h2 className="text-2xl font-bold text-title">{heading}</h2>
          <p className="text-grays text-sm">{sub_heading}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleGallery;
