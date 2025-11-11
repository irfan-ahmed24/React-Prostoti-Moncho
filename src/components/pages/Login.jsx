import React from "react";

export default function Login() {
  return (
    <div className="p-5">
      <h1 className="my-3">সাইন ইন</h1>
      <p className="h-[1px] w-full bg-black opacity-30"></p>
      <div className="flex justify-center items-center">
        <div className="bg-white w-full rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all mt-14 p-8 sm:max-w-[30rem]">
          <h1 className="text-3xl font-bold text-center mb-6">লগইন করুন</h1>
          <form action="">
            <div className="mb-4">
              <label htmlFor="username">ইউজারনেম অথবা ইমেইল</label>
              <br />
              <input
                type="text"
                name="username"
                className="w-full border border-gray-500 py-2 px-3 rounded-lg focus:outline-blue-700"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password">পাসওয়ার্ড</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border border-gray-500 py-2 px-3 rounded-lg focus:outline-blue-700"
              />
            </div>
            <button className="text-md w-full sm:text-lg transition-all text-white opacity-70 font-semibold rounded-xl gradient-bg py-2 px-5 my-2">
              লগইন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
