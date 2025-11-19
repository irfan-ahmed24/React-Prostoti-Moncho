import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//react icon import
import { IoMenu } from "react-icons/io5";
import ProtectedMobileSideBar from "./ProtectedMobileSideBar";

function ProtectedMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ProtectedMobileSideBar open={isOpen} />
      <div className="fixed flex shadow-md justify-between items-center py-3 z-30 px-5 top-0 bg-white dark:bg-[#1a3564] w-full lg:hidden">
        <div className="text-2xl" onClick={() => setIsOpen(!isOpen)}>
          <IoMenu className="dark:text-gray-300 cursor-pointer" />
        </div>
        <div>
          <h1>
            <a
              href="#"
              className="galada-regular font-extrabold italic text-black"
            >
              <span class="text-xl text-red-700">প্র</span>
              <span class=" text-blue-700 text-lg">স্তুতি </span>
              <span class="text-lg text-red-500">ম</span>
              <span className="text-sm dark:text-gray-300">ঞ্চ</span>
            </a>
          </h1>
        </div>
        <div>
          <NavLink
            to={"/User/Profile"}
            className={
              "bg-blue-700 gradient-bg opacity-70 text-white px-4 py-2 rounded-full font-medium"
            }
          >
            profile pic
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ProtectedMobileNav;
