import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

//react icon import
import { FaHome, FaGraduationCap } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { PiSignInFill } from "react-icons/pi";
import { HiUserAdd } from "react-icons/hi";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdOutlineDarkMode } from "react-icons/md";

//component import

export default function DesktopSideBar({ onIsClick }) {
  const [isClicked, setisClicked] = useState(false);
  onIsClick(isClicked);
  return (
    <div
      id="sideBar"
      className={`fixed hidden shadow-xl rounded-r bg-white lg:block lg:w-65 h-screen transition-all duration-200 ${
        isClicked ? "-translate-x-24" : "-translate-x-0"
      }`}
    >
      <div className="p-5 flex justify-between">
        <h1>
          <a href="#" className="font-galada text-black">
            <span class="text-2xl text-red-700">প্র</span>
            <span class=" text-blue-700 text-xl">স্তুতি </span>
            <span class="text-xl text-red-500">ম</span>
            <span className="text-md">ঞ্চ</span>
          </a>
        </h1>
        <div className="text-xl">
          <div onClick={() => setisClicked(!isClicked)} className="p-2">
            {isClicked ? <FaAnglesRight /> : <FaAnglesLeft />}
          </div>
        </div>
      </div>
      <p className="h-[1px] w-full bg-black opacity-30"></p>

      <div className="flex justify-between">
        <div className="mx-1">
          <div className="w-full relative my-2">
            <NavLink
              to={"/"}
              className={
                "w-full flex hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaHome className="text-xl mr-2" /> ড্যাশবোর্ড
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Academic"}
              className={
                "w-full flex hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaGraduationCap className="text-xl mr-2" /> পড়াশোনা
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Exam"}
              className={
                "w-full flex hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <BsPencilSquare className="text-xl mr-2" /> পরীক্ষা
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Practice"}
              className={
                "w-full flex hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <GrTest className="text-xl mr-2" /> দ্রুত প্র্যাকটিস
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/SignUp"}
              className={
                "w-full flex hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <HiUserAdd className="text-xl mr-2" /> সাইন আপ
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Login"}
              className={
                "w-full flex hover:bg-gray-200 px-5 py-2 rounded-2xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <PiSignInFill className="text-xl mr-2" /> সাইন ইন
            </NavLink>
          </div>

          <div className="w-full relative my-2 pl-6">
            <button className="bg-gray-500 border-2 border-blue-950 w-16 p-0.5 rounded-2xl shadow-md shadow-black">
              <MdOutlineDarkMode className="bg-blue-950 p-0.5 text-2xl rounded-2xl text-white font-bold shadow shadow-white" />
            </button>
          </div>
        </div>

        <div className={`mx-1 ${!isClicked ? "hidden" : ""}`}>
          <div className="w-full relative my-2">
            <NavLink
              to={"/"}
              className={
                "flex items-center justify-center mx-2 px-4 py-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaHome className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Academic"}
              className={
                "flex items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <FaGraduationCap className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Exam"}
              className={
                "flex items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <BsPencilSquare className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Practice"}
              className={
                "flex items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <GrTest className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/SignUp"}
              className={
                "flex items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <HiUserAdd className="text-xl" />
            </NavLink>
          </div>
          <div className="w-full relative my-2">
            <NavLink
              to={"/Login"}
              className={
                "flex items-center justify-center mx-2 p-2 hover:bg-gray-200 rounded-xl text-[14px] transition-all duration-200 font-bold"
              }
            >
              <PiSignInFill className="text-xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
