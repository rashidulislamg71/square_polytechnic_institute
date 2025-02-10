/* eslint-disable no-unused-vars */

import styles from "./Header.module.css";
import { CiYoutube } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format time
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedHours = hours === 12 ? 0 : hours > 12 ? hours - 12 : hours;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  const timeString = `${formattedHours
    .toString()
    .padStart(2, "0")}:${formattedMinutes}:${formattedSeconds} ${
    hours >= 12 ? "PM" : "AM"
  }`;

  // Format date
  const dateString = currentTime.toLocaleDateString("en-BD", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
  });

  return (
    <header id="header_section">
      <div className="">
        <div className=" flex flex-wrap justify-between items-center bg-white-500 border">
          <div className=" flex justify-start items-center gap-3">
            <p className=" text-xl border px-2 rounded-sm">{timeString}</p>
            <p className=" text-xl border px-2 rounded-sm">{dateString}</p>
            <a
              className="flex justify-center items-center gap-1 "
              href="tel:+8801782841671"
            >
              <span className=" text-xl text-green-400">
                <FaPhoneAlt />
              </span>
              <p className="">01782841671</p>
            </a>
          </div>

          <div className="divide-x-2 flex justify-center items-center gap-5">
            <a className="flex justify-center items-center pl-4" href="#">
              <span className="text-2xl text-blue-500">
                <IoLogoFacebook />
              </span>
              <p className="text-sm bold sm:hidden"> Facebook</p>
            </a>
            <a className="flex justify-center items-center pl-4" href="#">
              <span className=" text-2xl text-red-500">
                <CiYoutube />
              </span>
              <p className="text-sm bold sm:hidden">Youtube</p>
            </a>
            <button
              title="ভর্তি সংক্রান্ত সকল তথ্য"
              className="btn apply_now_btn"
            >
              ভর্তি আবেদন
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
