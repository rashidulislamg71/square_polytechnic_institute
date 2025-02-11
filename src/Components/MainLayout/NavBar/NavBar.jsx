/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import SPILogo from "../../SPILogo/SPILogo";

import {
  IoMdArrowDropdown,
  IoMdMenu,
  IoMdPeople,
  IoMdNotifications,
  IoIosSchool,
} from "react-icons/io";
import { FaHome, FaBookOpen, FaBuilding } from "react-icons/fa";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  // Toggel Menu Function
  const openMenuHandeling = () => {
    setOpenMenu(!openMenu);
  };

  // Close Menu Function
  const closeMenuHandeling = () => {
    setOpenMenu(false);
  };

  // NavLink Menu Array
  const menuItems = [
    { id: 1, text: "Home", link: "/", hasDropdown: false, icon: <FaHome /> },
    {
      id: 2,
      text: "Departments",
      link: "/departments",
      hasDropdown: true,
      icon: <FaBuilding />,
    },
    {
      id: 3,
      text: "Class Room",
      link: "/classroom",
      hasDropdown: true,
      icon: <FaBookOpen />,
    },
    {
      id: 4,
      text: "Success",
      link: "/success",
      hasDropdown: true,
      icon: <IoIosSchool />,
    },
    {
      id: 5,
      text: "About",
      link: "/about",
      hasDropdown: true,
      icon: <IoMdPeople />,
    },
    {
      id: 6,
      text: "Notice",
      link: "/notice",
      hasDropdown: true,
      icon: <IoMdNotifications />,
    },
  ];

  return (
    <header className="relative">
      <div className="fixed w-full top-24 left-0 right-0 bg-white shadow-md md:top-11">
        <nav className="text-xl flex justify-between items-center gap-3 px-2 py-1 md:px-10">
          {/* Logo  */}
          <div onClick={closeMenuHandeling}>
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <SPILogo />
            </div>
          </div>

          {/* Big Screen Menu */}
          <div className="md:flex items-center">
            <ul className="hidden  md:flex items-center justify-center gap-10 ">
              {menuItems.map((item) => (
                <li
                  onClick={closeMenuHandeling}
                  key={item.id}
                  className="flex items-center"
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#25755c] flex items-center gap-1"
                        : "text-black hover:text-[#1f8383] flex items-center gap-1"
                    }
                  >
                    {item.text}
                    {item.hasDropdown && <IoMdArrowDropdown />}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Icon */}
            <div className="block md:hidden text-3xl cursor-pointer">
              <button onClick={openMenuHandeling}>
                {openMenu ? <VscChromeClose /> : <IoMdMenu />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="">
        <ul
          className={
            openMenu
              ? "fixed md:hidden left-0 top-40 w-[65%] bg-[#ffff] ease-in-out duration-500 opacity-100 translate-x-0"
              : "fixed md:hidden top-40 left-[-100%] w-[65%] bg-[#ffff] ease-in-out duration-500 opacity-0 translate-x-[-100%]"
          }
        >
          {menuItems.map((item) => (
            <li
              onClick={closeMenuHandeling}
              key={item.id}
              className="p-4 border-b  hover:bg-[#bbbdbc96] duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#00df9a] font-bold flex items-center gap-1"
                    : "text-black hover:text-[#00df9a] flex items-center gap-1"
                }
              >
                <div className="flex justify-center items-center gap-2 ">
                  <p className="text-[#7c7e7de1] text-xl mb-1">{item.icon}</p>
                  {item.text}
                </div>
                {item.hasDropdown && <IoMdArrowDropdown />}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
