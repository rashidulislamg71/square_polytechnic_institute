import { CiYoutube } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";

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

  const formattedHours = hours === 12 ? 12 : hours > 12 ? hours - 12 : hours;
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
    <header id="header_section" className="relative">
      <div className="fixed top-0 left-0 w-full bg-slate-300 ">
        <div className=" flex flex-wrap justify-center items-center gap-2 px-2 py-1  lg:px-10 md:justify-between">
          <div className=" flex justify-start items-center gap-4 ">
            <p className=" border px-2 rounded-sm hidden md:block">
              {timeString}
            </p>
            <p className="border px-2 rounded-sm hidden md:block">
              {dateString}
            </p>
            <div className="divide-x-2 flex justify-start items-center gap-3">
              <a title="ফোন করুন"
                className="flex justify-center items-center gap-1 pr-1"
                href="tel:+8801782841671"
              >
                <span title="ফোন করুন" className=" text-green-400">
                  <FaPhoneAlt />
                </span>
                <p >
                  01782841671
                </p>
              </a>
              <a
                title="ইমেল পাঠান"
                className="flex justify-center items-center gap-1"
                href="mailto:squarpoly@gmail.com"
              >
                <span className="text-xl text-orange-500 pl-4">
                  <MdOutlineMarkEmailRead />
                </span>
                <p className="mb-1">squarepoly@gmail.com</p>
              </a>
            </div>
          </div>

          <div className="flex justify-between items-center gap-2">
            <div className="divide-x-2 flex justify-center items-center gap-2">
              <a
                title="ফেসবুকে যান"
                className="flex justify-center items-center "
                href="https://www.facebook.com/squarepolytechnic"
                target="_blank"
              >
                <span className="text-xl text-blue-500">
                  <IoLogoFacebook />
                </span>
                <p>Facebook</p>
              </a>
              <a
                title="ইউটুবে যান"
                className="flex justify-center items-center pl-2"
                href="#"
                target="_blank"
              >
                <span className="text-xl text-red-500">
                  <CiYoutube />
                </span>
                <p >YouTube</p>
              </a>
            </div>

            <div>
              <button
                title="ভর্তি সংক্রান্ত সকল তথ্য"
                className="btn apply_now_btn"
              >
                ভর্তি আবেদন
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
