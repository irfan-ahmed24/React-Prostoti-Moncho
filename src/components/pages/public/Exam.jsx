import React from "react";
import NeedSignIn from "../NeedSignIn";

export default function Exam() {
  return (
    <div className="p-5">
      <h1 className="my-3 font-semibold dark:text-gray-300">পরীক্ষা</h1>
      <p className="h-[1px] w-full bg-black dark:bg-gray-100 opacity-30"></p>
      <NeedSignIn />
    </div>
  );
}
