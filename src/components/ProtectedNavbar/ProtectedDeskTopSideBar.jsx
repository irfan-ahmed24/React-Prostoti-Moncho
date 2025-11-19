import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkContext } from "../../USE_CONTEXT_HOOkS/DarkContext";
//react icon import
import { FaHome, FaGraduationCap } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { GrTest } from "react-icons/gr";

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";

//component import
export default function ProtectedDeskTopSideBar({ onIsClick }) {
  const { theme, setTheme } = useContext(DarkContext);
  const isDark = theme === "dark" ? true : false;
  const handleIsDark = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const [isClicked, setisClicked] = useState(false);
  onIsClick(isClicked);
  return (
    <div
      id="sideBar"
      className={`fixed hidden shadow-xl rounded-r bg-white dark:bg-[#021330] lg:block lg:w-65 h-screen transition-all duration-200 ${
        isClicked ? "-translate-x-46" : "-translate-x-0"
      }`}
    >
      <div className="p-5 flex justify-between">
        <h1>
          <a href="#" className="font-galada text-black">
            <span class="text-2xl text-red-700">প্র</span>
            <span class=" text-blue-700 text-xl">স্তুতি </span>
            <span class="text-xl text-red-500">ম</span>
            <span className="text-md dark:text-gray-300">ঞ্চ</span>
          </a>
        </h1>
        <div className="text-xl">
          <div
            onClick={() => setisClicked(!isClicked)}
            className="p-2 dark:text-gray-300"
          >
            {isClicked ? <FaAnglesRight /> : <FaAnglesLeft />}
          </div>
        </div>
      </div>
      <p className="h-[1px] w-full bg-white opacity-30"></p>

      <div className="flex justify-between">
        <div className="mx-1">
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Index"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaHome className="text-xl mr-2" /> ড্যাশবোর্ড
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Academic"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaGraduationCap className="text-xl mr-2" /> পড়াশোনা
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Exam"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <BsPencilSquare className="text-xl mr-2" /> পরীক্ষা
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Practice"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <GrTest className="text-xl mr-2" /> দ্রুত প্র্যাকটিস
            </NavLink>
          </div>

          <div className="w-full relative my-2">
            <NavLink
              to={"/User/LeaderBoard"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <MdLeaderboard className="text-xl mr-2" /> লিডারবোর্ড
            </NavLink>
          </div>

          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Profile"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <CgProfile className="text-xl mr-2" /> প্রোফাইল
            </NavLink>
          </div>

          <div className="w-full relative my-2">
            <NavLink
              to={"/Login"}
              className={
                "w-full flex dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <CiLogout className="text-xl mr-2" /> লগ আউট
            </NavLink>
          </div>

          <div className="w-full relative my-2 pl-6">
            <button
              onClick={handleIsDark}
              className={`bg-amber-50 dark:bg-black border-2 border-blue-950 w-14 p-0.5 rounded-2xl shadow-md shadow-black`}
            >
              <MdOutlineDarkMode
                className={`bg-blue-950 p-0.5 text-2xl rounded-2xl text-white font-bold shadow shadow-white ${
                  isDark ? "translate-x-full" : "translatex-0"
                } transition-all duration-200`}
              />
            </button>
          </div>
        </div>

        <div className={`mx-1 ${!isClicked ? "hidden" : ""}`}>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Index"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 px-4 py-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaHome className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Academic"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaGraduationCap className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Exam"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <BsPencilSquare className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Practice"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <GrTest className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/User/LeaderBoard"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <MdLeaderboard className="text-xl" />
            </NavLink>
          </div>

          <div className="w-full relative my-2">
            <NavLink
              to={"/User/Profile"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <CgProfile className="text-xl" />
            </NavLink>
          </div>

          <div className="w-full relative my-2">
            <NavLink
              to={"/Login"}
              className={
                "flex dark:text-gray-300 dark:hover:bg-gray-700 items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <CiLogout className="text-xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
