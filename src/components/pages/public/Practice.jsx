import React from "react";
import NeedSignIn from "../NeedSignIn";

export default function Practice() {
  return (
    <div className="p-5">
      <h1 className="my-3 font-semibold dark:text-gray-300">
        দ্রুত প্র্যাকটিস
      </h1>
      <p className="h-[1px] w-full bg-black dark:bg-gray-100 opacity-30"></p>

      <NeedSignIn />
    </div>
  );
}
