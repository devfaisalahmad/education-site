import React from "react";

const HeroBox = ({ icons, title, links, rightArrow }) => {
  return (
    <div className="bg-black/80 hover:bg-blacks flex md:gap-5 gap-10 lg:gap-10 p-4 items-center md:justify-between justify-start w-full ">
      <div>
        <span className="lg:text-6xl text-5xl  text-yellows">{icons}</span>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="xl:text-[1.5rem] lg:text-lg text-lg text-white font-semibold uppercase font-roboto !leading-[35px] lg:w-[90%]">
          {title}
        </h2>
        <a
          className="flex items-center text-md text-yellows gap-2 hover:underline"
          href="#"
        >
          {links} <span className="text-md">{rightArrow}</span>
        </a>
      </div>
    </div>
  );
};

export default HeroBox;
