import React from "react";

const TeachersCard = ({
  teacher_img,
  name,
  profession,
  facebook,
  twitter,
  googlePlus,
  linkedin,
}) => {
  return (
    <div className="flex flex-col box-shadow justify-center items-center text-center  pt-[30px] pb-[40px] bg-[#F8F9FE] cards">
      <div className="lg:h-[130px] lg:w-[130px] sm:w-[110px] sm:h-[110px] mb-[50px] card top h-[130px] w-[130px]">
        <img
          className=" rounded-[50%] scale-[1] w-full h-auto"
          src={teacher_img}
          alt="teacher image"
        />
      </div>
      <div className="flex flex-col gap-1 mb-[30px]">
        <h2 className="md:text-2xl text-xl font-bold text-title capitalize">
          {name}
        </h2>
        <p className="text-grays text-[15px]">{profession}</p>
      </div>
      {/* socail icons */}
      <div className="w-full absolute left-0  flex items-center justify-center gap-1 bg_common social">
        <a
          href="#"
          className="text-xl text-white hover:bg-white py-2 px-2 cursor-pointer hover:text-primary "
        >
          {facebook}
        </a>
        <a
          href="#"
          className="text-xl text-white hover:bg-white py-2 px-2 cursor-pointer hover:text-primary "
        >
          {twitter}
        </a>
        <a
          href="#"
          className="text-xl text-white hover:bg-white py-2 px-2 cursor-pointer hover:text-primary "
        >
          {googlePlus}
        </a>
        <a
          href="#"
          className="text-xl text-white hover:bg-white py-2 px-2 cursor-pointer hover:text-primary "
        >
          {linkedin}
        </a>
      </div>
    </div>
  );
};

export default TeachersCard;
