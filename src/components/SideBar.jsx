import React from "react";
import { NavLink } from "react-router-dom";

//react icon import
import { FaHome, FaGraduationCap } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { PiSignInFill } from "react-icons/pi";
import { HiUserAdd } from "react-icons/hi";

function SideBar({ open }) {
  return (
    <div
      id="MobileSideBar"
      className={`fixed flex z-50 justify-between items-center w-full top-13 lg:hidden transition-all duration-300 -translate-x-full ${
        open ? "!translate-x-0" : ""
      }`}
    >
      <div className="bg-white w-1/2 sm:w-2/5 md:w-1/3 h-screen shadow-lg">
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
        </div>
      </div>
      <div className="bg-black opacity-20 h-screen w-1/2 sm:w-3/5 md:w-2/3"></div>
    </div>
  );
}

export default SideBar;
