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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
              <div>
                <label htmlFor="institution">নামের প্রথম অংশ</label>
                <br />
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="institution">নামের শেষ অংশ</label>
                <br />
                <input
                  type="text"
                  placeholder="আপনার পদবি লিখুন"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
              <div>
                <label htmlFor="institution">ইমেইল ঠিকানা</label>
                <br />
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="institution">মোবাইল নম্বর</label>
                <br />
                <input
                  type="text"
                  placeholder="01XXXXXXXXX"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
              <div>
                <label htmlFor="institution">ঠিকানা</label>
                <br />
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
              <div>
                <p>লিঙ্গ</p>

                <input
                  type="radio"
                  id="male"
                  className="mx-2"
                  name="sex"
                  value=""
                />
                <label htmlFor="male" className="mr-4">
                  পুরুষ
                </label>

                <input
                  type="radio"
                  id="female"
                  className="mx-2"
                  name="sex"
                  value=""
                />
                <label htmlFor="female" className="mr-4">
                  মহিলা
                </label>

                <input
                  type="radio"
                  id="other"
                  className="mx-2"
                  name="sex"
                  value=""
                />
                <label htmlFor="other" className="mr-4">
                  অন্যান্য
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="institution">প্রতিষ্ঠানের নাম</label>
              <br />
              <input
                type="text"
                placeholder="আপনার নাম লিখুন"
                className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
              <div>
                <label htmlFor="institution">শ্রেণি</label>
                <br />
                <select
                  name="class"
                  id="class"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                >
                  <option value="">ক্লাস নির্বাচন করুন</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div>
                <label htmlFor="institution">প্রোফাইল ছবি</label>
                <br />
                <input
                  type="file"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
              <div>
                <label htmlFor="institution">পাসওয়ার্ড</label>
                <br />
                <input
                  type="text"
                  placeholder="পাসওয়ার্ড লিখুন"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
              <div>
                <label htmlFor="institution">পাসওয়ার্ড নিশ্চিত করুন</label>
                <br />
                <input
                  type="text"
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  className="w-full border-emerald-300 border rounded-lg outline-none py-2 px-3"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-md w-full sm:text-lg transition-all text-white opacity-70 font-semibold rounded-xl gradient-bg py-2 px-5 my-2"
            >
              সাইন আপ করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
