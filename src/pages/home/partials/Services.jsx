import React from "react";
import ServiceTopSection from "../helpers/ServiceTopSection";
import ServiceCard from "../helpers/ServiceCard";
import { Home_data } from "../config/constands";

const Services = () => {
  const { Service_data } = Home_data;
  return (
    <section className="py-6 md:py-8 w-full bg-[#F8F9FA]">
      <div className="container">
        {/* service top section */}
        <ServiceTopSection
          title_span={Service_data.title_span}
          title_span_2={Service_data.title_spna_2}
          title_span_3={Service_data.title_span_3}
          description={Service_data.description}
          male_img={Service_data.male_img}
          female_img={Service_data.female_img}
        />
        {/* service cards section */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pt-10 md:pt-0">
          {/* card */}
          {
            Service_data.data.map((item,i)=>(
             <ServiceCard key={i} {...item} /> 
            ))
          }
          
        </div>
      </div>
    </section>
  );
};

export default Services;
