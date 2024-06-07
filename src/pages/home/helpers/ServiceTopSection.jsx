import React from "react";

const ServiceTopSection = ({
  title_span,
  title_span_2,
  title_span_3,
  description,
  male_img,
  female_img,
}) => {
  return (
    <div className="flex items-center justify-between md:gap-10 gap-5 md:mt-[-45px]">
      <img
        className="lg:h-[360px] md:h-[300px] object-cover md:block hidden"
        src={male_img}
        alt="male teacher"
      />
      <div className="flex flex-col md:gap-5 gap-2 justify-center items-center text-center">
        <h2 className="xl:text-[45px] lg:text-[35px] md:text-[25px] text-xl uppercase font-bold flex items-center justify-center gap-3">
          <span className="text-title">{title_span}</span>
          <span className="text-primary">{title_span_2}</span>
          <span className="text-title">{title_span_3}</span>
        </h2>
        <p className="text-grays">{description}</p>
      </div>
      <img
        className="lg:h-[360px] md:h-[300px] object-cover md:block hidden"
        src={female_img}
        alt="female teacher"
      />
    </div>
  );
};

export default ServiceTopSection;
