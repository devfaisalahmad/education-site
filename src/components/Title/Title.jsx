import React from "react";

const Title = ({ heading, heading_2, description }) => {
  return (
    <div className="flex flex-col lg:gap-8 md:gap-5 gap-3 md:w-1/2 w-full m-auto text-center justify-center items-center">
      <div className="flex items-center gap-2">
        <span className="xl:text-[45px] lg:text-[35px] md:text-[25px] text-xl text-title uppercase font-bold">
          {heading}
        </span>
        <span className="xl:text-[45px] lg:text-[35px] md:text-[25px] text-xl text-primary uppercase font-bold">
          {heading_2}
        </span>
      </div>
      <p className="text-grays text-md font-[400] md:leading-7 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default Title;
