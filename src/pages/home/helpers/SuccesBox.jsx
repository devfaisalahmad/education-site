import React from "react";

const SuccesBox = ({ icon, description, heading }) => {
  return (
    <div className="flex flex-col md:py-12 py-8 justify-center items-center text-center md:px-8 px-6 gap-3 relative gradients z-20 group">
      <div>
        <span className="text-5xl text-primary group-hover:text-white">{icon}</span>
      </div>
      <h2 className="text-title text-[25px] font-bold capitalize group-hover:text-white">{heading}</h2>
      <p className="text-grays text-md font-[400] md:leading-7 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default SuccesBox;
