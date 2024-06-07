import React from "react";

const RecentTitle = ({
  title_span,
  title_span_2,
  title_span_3,
  description,
}) => {
  return (
    <div className="flex flex-col md:gap-5 gap-2 justify-center items-center text-center w-full md:w-1/2 mx-auto">
      <h2 className="xl:text-[45px] lg:text-[35px] md:text-[25px] text-xl uppercase font-bold flex items-center justify-center gap-3">
        <span className="text-title">{title_span}</span>
        <span className="text-primary">{title_span_2}</span>
        <span className="text-title">{title_span_3}</span>
      </h2>
      <p className="text-grays pt-1 lg:pt-3">{description}</p>
    </div>
  );
};

export default RecentTitle;
