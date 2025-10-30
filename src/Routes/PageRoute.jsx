import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import Academic from "../components/pages/Academic";
import Exam from "../components/pages/Exam";
import Practice from "../components/pages/Practice";

function PageRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Academic" element={<Academic />} />
        <Route path="/Exam" element={<Exam />} />
        <Route path="/Practice" element={<Practice />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default PageRoute;
