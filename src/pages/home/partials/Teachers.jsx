import React from "react";
import Title from "../../../components/Title/Title";
import { Home_data } from "../config/constands";
import TeachersCard from "../helpers/TeachersCard";

const Teachers = () => {
  const { Teacher_section_data } = Home_data;
  return (
    <section className="w-full py-6 md:py-10">
      <div className="container">
        {/* title */}
        <Title
          heading={Teacher_section_data.heading}
          heading_2={Teacher_section_data.heading_2}
          description={Teacher_section_data.description}
        />
        {/* teacher cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8">
          {/* card */}
          {Teacher_section_data.data.map((item, i) => (
            <TeachersCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
