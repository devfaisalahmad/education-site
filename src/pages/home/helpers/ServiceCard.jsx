import React from "react";

const ServiceCard = ({card_img,title,description}) => {
  return (
    <div className="flex items-center gap-5 box-shadow xl:px-6 lg:px-4 xl:py-8 lg:py-6 md:px-4 md:py-6 px-4 py-6">
      <div className="xl:w-[100px] xl:h-[50px] lg:w-[90px] lg:h-[40px]">
        <img
          className="w-full h-full"
          src={card_img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between gap-3">
        <h2 className="lg:text-2xl text-xl  font-bold text-title font-primary">{title}</h2>
        <p className="text-grays">
         {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
