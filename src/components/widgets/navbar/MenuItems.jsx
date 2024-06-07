import React from "react";
import { NavLink } from "react-router-dom";
//
import { menuData } from "../../../shared/config/constands";
import { icons } from "../../../shared/libs/icons";
//
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from "@mantine/core";
import NavSideBar from "./NavSideBar";

const MenuItems = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      {/* mobile view start*/}
      <div className="mb-1 md:hidden block">
        <Drawer opened={opened} onClose={close} title="">
          <NavSideBar />
        </Drawer>
        <span
          className="text-white text-3xl cursor-pointer hover:text-gray-100"
          onClick={open}
        >
          {icons.menu}
        </span>
      </div>
      {/* mobile view end*/}

      {/* dasktop start*/}
      <ul className="md:flex hidden">
        {menuData.map((menuItem, index) => (
          <li className="group relative" key={index}>
            <NavLink
              to={menuItem.href}
              className="py-2 px-4 last:pr-0 text-white group-hover:text-primary flex items-center gap-2 text-sm font-semibold font-roboto"
            >
              {menuItem.label}
              {menuItem.subItems?.length > 0 && (
                <span className="text-[10px]">{icons.downArrow}</span>
              )}
            </NavLink>
            {menuItem.subItems && (
              <ul className="ml-4 hidden group-hover:block absolute bg-white w-[200px]  py-2 -left-4 shadow font-roboto">
                {menuItem.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <NavLink
                      to={subItem.href}
                      className="block py-2 px-4 text-title hover:bg-primary hover:text-white text-sm font-semibold"
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
      {/* dasktop end*/}
    </>
  );
};

export default MenuItems;
