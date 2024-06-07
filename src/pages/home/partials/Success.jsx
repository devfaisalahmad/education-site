import React from "react";
import { icons } from "../../../shared/libs/icons";
import { Home_data } from "../config/constands";
import SuccesBox from "../helpers/SuccesBox";

const Success = () => {
  const { Success_data } = Home_data;
  return (
    <section className="w-full py-8 md:py-16 bg-[#F8F9FA]">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 md:gap-10 gap-5">
          {Success_data.data.map((item,i) => (
            <SuccesBox
              key={i}
              heading={item.heading}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
