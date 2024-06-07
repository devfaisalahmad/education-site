import React from "react";
import { icons } from "../../../shared/libs/icons";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full bg-[#252c41] py-2 ">
      <div className="container">
        <div className="flex items-center  gap-5 justify-between">
          <div className="flex lg:gap-5 md:gap-[10px] gap-3 items-center">
            <a
              href="mailto: example@gmail.com"
              className="text-sm text-white flex items-center gap-2"
            >
              <span>{icons.email}</span>{" "}
              <span className="md:block hidden">Email: example@gmail.com</span>
            </a>
            <a
              href="tel:2222-333-7889"
              className="text-sm text-white flex items-center gap-2"
            >
              <span>{icons.call}</span>{" "}
              <span className="md:block hidden">Contact: 2222-333-7889</span>
            </a>
            <p className="text-sm text-white md:flex items-center gap-2  hidden">
              <span>{icons.clock}</span> Work time: 9:00AM - 16:00PM
            </p>
            <p className="text-sm text-white flex items-center gap-2  md:hidden">
              <span>{icons.clock}</span>
              <span className="sm:block hidden">Work time: </span>
              <span className="text-[11px] sm:text-sm">9:00AM - 16:00PM</span>
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-5 mb-1">
            <NavLink
              className="text-white hover:text-gray-100 md:text-md text-sm font-semibold"
              to="/teacher-login"
            >
              Teacher
            </NavLink>
            <span className="text-white">|</span>
            <NavLink
              className="text-white hover:text-gray-100 md:text-md text-sm font-semibold"
              to="/student-login"
            >
              Student
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
