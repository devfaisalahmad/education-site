import React, { useState } from "react";
//
import Title from "../../../components/Title/Title";
import { Home_data } from "../config/constands";
import { tabs } from "../../../shared/config/constands";
import Button from "../../../components/Button/Button";
//
import ReactPlayer from "react-player";

const Educourse = () => {
  const { Title_data } = Home_data;
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const addStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <section className="w-full sm:py-8 py-4 md:py-16 bg-[#FDFDFD]">
      <div className="container">
        {/* title data */}
        <Title
          heading={Title_data.heading}
          heading_2={Title_data.heading_2}
          description={Title_data.description}
        />

        <div className="flex flex-col lg:mt-16 md:mt-10 mt-6">
          {/* tabs */}
          <div className="flex mb-4 md:space-x-4 sm:justify-start sm:items-start gap-3 justify-center items-center  lg:justify-between flex-wrap">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${
                  activeTab === tab.id
                    ? "bg_common uppercase font-semibold text-white flex flex-col justify-center items-center border md:border-none"
                    : "bg-white uppercase font-semibold text-grays flex flex-col justify-center items-center border"
                } md:rounded-[50%] px-4 rounded-md py-2 md:py-[30px] md:px-[30px] justify-center  lg:w-[150px] lg:h-[120px] md:w-[150px] md:h-[100px] cursor-pointer gap-2 group common z-20`}
                onClick={() => handleTabClick(tab.id)}
              >
                <span
                  className={`${
                    activeTab === tab.id
                      ? "lg:text-4xl md:text-3xl text-white group-hover:text-white"
                      : "text-primary lg:text-4xl md:text-3xl group-hover:text-white "
                  } md:block hidden`}
                >
                  {tab.icon}
                </span>
                <span className="group-hover:text-white lg:text-md md:text-sm text-sm">
                  {tab.title}
                </span>
              </div>
            ))}
          </div>
          {/* content */}
          <div className="bg-white box-shadow lg:mt-8 md:mt-5 mt-4 grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 lg:px-10 md:px-5 md:py-8 lg:py-12 px-4 py-6">
            {/* left side text */}
            <div className="flex flex-col lg:pr-10 md:pr-7 pb-5 md:pb-0">
              {tabs
                .find((tab) => tab.id === activeTab)
                .data.map((item) => {
                  return (
                    <>
                      <h2 className="md:text-2xl text-xl font-bold text-title font-primary capitalize">
                        {item.title}
                      </h2>
                      <p className="text-grays border-l-2 border-primary pl-4 md:my-5 my-3">
                        {item.description}
                      </p>
                      <div className="flex flex-col gap-1 md:gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-primary text-[12px]">
                            {item.icon}
                          </span>
                          <p className="text-grays">{item.text}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-primary text-[12px]">
                            {item.icon}
                          </span>
                          <p className="text-grays">{item.text_2}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-primary text-[12px]">
                            {item.icon}
                          </span>
                          <p className="text-grays">{item.text_3}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-primary text-[12px]">
                            {item.icon}
                          </span>
                          <p className="text-grays">{item.text_4}</p>
                        </div>
                      </div>

                      <div className="md:pt-8 pt-6">
                        <Button className="bg-primary text-white hover:bg-[#c94303] font-primary">
                          {item.btn_text}
                        </Button>
                      </div>
                    </>
                  );
                })}
            </div>
            {/* right side video */}
            <div className="w-full h-full box-shadow">
              {tabs
                .find((tab) => tab.id === activeTab)
                .data.map((item) => {
                  return (
                    <>
                      <div style={addStyle} className="w-full h-full ">
                        <ReactPlayer
                          url={item.link}
                          controls
                          height={addStyle.height}
                          width={addStyle.width}
                        />
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educourse;
