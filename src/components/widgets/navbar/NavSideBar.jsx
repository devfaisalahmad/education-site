import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//
import { menuData } from "../../../shared/config/constands";
import { icons } from "../../../shared/libs/icons";

const NavSideBar = () => {
  return (
    <ul className="flex flex-col pt-4">
      {menuData.map((menuItem, index) => (
        <li className="group relative" key={index}>
          <NavLink
            to={menuItem.href}
            className="py-2 px-4 last:pr-0 text-blacks group-hover:text-primary flex items-center gap-2 text-md font-semibold justify-between"
          >
            {menuItem.label}
            {menuItem.subItems?.length > 0 && (
              <span className="text-[12px]">{icons.downArrow}</span>
            )}
          </NavLink>
          {menuItem.subItems && (
            <ul className="ml-4 hidden group-hover:block absolute bg-white w-[200px]  py-2 -left-4 shadow z-10">
              {menuItem.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <NavLink
                    to={subItem.href}
                    className="block py-2 px-4 text-title hover:bg-primary hover:text-white text-md font-semibold"
                  >
                    {subItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavSideBar;
