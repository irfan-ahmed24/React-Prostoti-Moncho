import React from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-5">
      <h1 className="my-3 font-semibold">সাইন আপ</h1>
      <p className="h-[1px] w-full bg-black opacity-30"></p>
      <div className="w-full py-7 flex justify-center">
        <div className="bg-white p-8 w-full max-w-[43rem] rounded-3xl shadow-2xl">
          <h1 className="text-2xl font-galada text-center text-blue-700">
            সাইন আপ করুন
          </h1>
          <form action="">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div>
              <label htmlFor="institution">প্রতিষ্ঠানের নাম</label>
              <br />
              <input
                type="text"
                className="w-full border-b-emerald-400 border-2 outline-none"
              />
            </div>
            <div></div>
            <div></div>
            <button
              type="submit"
              className="text-md w-full sm:text-lg transition-all text-white opacity-70 font-semibold rounded-xl gradient-bg py-2 px-5"
            >
              সাইন আপ করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
