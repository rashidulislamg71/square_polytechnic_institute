/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";

import styles from "./NavBar.module.css";
import SPILogo from "../../SPILogo/SPILogo";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandeling = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenuHandeling = () => {
    setOpenMenu(false);
    console.log(openMenu);
  };

  return (
    <section className="relative">
      <div className=" fixed w-full top-11 left-0 right-0 continer bg-white shadow-md ">
        <nav className="flex justify-between items-center gap-3 px-2 py-1 md:px-10 ">
          <div className="">
            <SPILogo />
          </div>
          <div className="">
            <ul className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-10">
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center" to="/departments">
                  Departmentes
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center" to="/departments">
                  Class Room
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center" to="/success">
                  Success
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center" to="/about">
                  About us
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center" to="/departments">
                  Notice
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
