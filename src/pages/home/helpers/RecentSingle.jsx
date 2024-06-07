import React from "react";
import Button from "../../../components/Button/Button";

const RecentSingle = ({
  recent_img,
  heading,
  description,
  data,
  toData,
  icon,
  icon_2,
  btn_text,
}) => {
  return (
    <div className="flex flex-col mx-3">
      <img className="w-full h-auto" src={recent_img} alt="" />
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-1">
          <div className="text-primary text-sm">{icon}</div>
          <p className="text-grays text-[15px]"> {data}</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-primary text-sm">{icon_2}</div>
          <p className="text-grays text-[15px]"> {toData}</p>
        </div>
      </div>
      <h2 className="md:text-[24px] text-xl font-bold text-title py-3 ">{heading}</h2>
      <p className="text-grays sm:pb-6 pb-4">{description}</p>
      <div>
        <Button className="!px-5">{btn_text}</Button>
      </div>
    </div>
  );
};

export default RecentSingle;
