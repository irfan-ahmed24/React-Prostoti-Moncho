import React from "react";
import { NavLink } from "react-router-dom";

//import react icon
import { FaHome, FaGraduationCap } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { GrTest } from "react-icons/gr";
import { BsFillTrophyFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="my-3 font-semibold">ড্যাশবোর্ড</h1>
      <p className="h-[1px] w-full bg-black opacity-30"></p>

      <div className="mx-auto w-full md:w-[45rem] p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-galada pt-5 sm:pt-10 text-center text-blue-700">
          শিক্ষা, অনুপ্রেরণা ও সাফল্যের মঞ্চ!
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-center p-0 sm:p-2 mt-2 opacity-80">
          প্রস্তুতি মঞ্চ-এ যোগ দিন, যেখানে শিক্ষার্থীরা একসাথে শিখে, অনুশীলন করে
          এবং নিজেদের দক্ষতা বাড়ায়। আপনার স্বপ্নের পথে এগিয়ে যেতে আজই আমাদের
          সাথে যুক্ত হোন।
        </p>
        <div className="text-center mt-5">
          <NavLink
            to={"/SignUp"}
            className={
              "text-md sm:text-lg transition-all text-white opacity-70 font-semibold rounded-4xl gradient-bg py-2 px-5"
            }
          >
            এখনই সাইন আপ করুন
          </NavLink>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-5">
          <div className="text-center">
            <div className="flex justify-center">
              <FaGraduationCap className="text-4xl text-pink-700" />
            </div>
            <h1 className="text-xl font-semibold mt-2">পড়াশোনা</h1>
            <p className="text-sm mt-2 opacity-80">
              আপনার অ্যাকাডেমিক সাবজেক্ট খুঁজুন এবং এখান থেকে পড়ুন।
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <div className="text-center">
            <div className="flex justify-center">
              <BsPencilSquare className="text-4xl text-red-700" />
            </div>

            <h1 className="text-xl font-semibold mt-2">পরীক্ষা</h1>
            <p className="text-sm mt-2 opacity-80">
              প্রতিটি অধ্যায় শেষ করার পর নিজেকে বিচার করো।
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <div className="text-center">
            <div className="flex justify-center">
              <GrTest className="text-4xl text-blue-700" />
            </div>

            <h1 className="text-xl font-semibold mt-2">দ্রুত প্র্যাকটিস</h1>
            <p className="text-sm mt-2 opacity-80">
              নিয়মিত অনুশীলনে দক্ষতা বাড়ান সহজেই।
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <div className="text-center">
            <div className="flex justify-center">
              <BsFillTrophyFill className="text-4xl text-yellow-500" />
            </div>

            <h1 className="text-xl font-semibold mt-2">লিডারবোর্ড</h1>
            <p className="text-sm mt-2 opacity-80">
              আপনার অগ্রগতি দেখুন ও অন্যদের সাথে প্রতিযোগিতা করুন।
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <div className="text-center">
            <div className="flex justify-center">
              <HiMiniUserGroup className="text-4xl text-blue-700" />
            </div>
            <h1 className="text-xl font-semibold mt-2">কমিউনিটি</h1>
            <p className="text-sm mt-2 opacity-80">
              সহযোগিতামূলক পরিবেশে শিখুন ও শেয়ার করুন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
