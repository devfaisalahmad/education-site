import React from "react";
import { NavLink } from "react-router-dom";
// 
import MenuItems from "./MenuItems";
import LogoImg from "../../../assets/brand/logo.png";

const Navbar = () => {
  return (
    <div className="w-full absolute bg-transparent top-0 py-4 mt-[40px] z-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img
                className="h-[35px] object-cover"
                src={LogoImg}
                alt="brand"
              />
            </NavLink>
          </div>
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
