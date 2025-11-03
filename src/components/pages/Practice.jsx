import React from "react";
import { NavLink } from "react-router-dom";

export default function Practice() {
  return (
    <div className="p-5">
      <h1 className="my-3 font-semibold">দ্রুত প্র্যাকটিস</h1>
      <p className="h-[1px] w-full bg-black opacity-30"></p>

      <div className="mx-auto w-full md:w-[45rem] p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-galada pt-5 sm:pt-10 text-center text-blue-700">
          শিক্ষা, অনুপ্রেরণা ও সাফল্যের মঞ্চ!
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-center p-0 sm:p-2 mt-2 opacity-80">
          আপনার অ্যাকাডেমিক বা শিক্ষাগত পাঠ খুঁজে পেতে হলে প্রথমে আপনাকে লগইন
          করতে হবে।
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
    </div>
  );
}
