import React from "react";
import { Route, Routes } from "react-router-dom";

//import components
import Home from "../components/pages/public/Home";
import Login from "../components/pages/public/Login";
import SignUp from "../components/pages/public/SignUp";
import Academic from "../components/pages/public/Academic";
import Exam from "../components/pages/public/Exam";
import Practice from "../components/pages/public/Practice";
import Index from "../components/pages/protected/Index";

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
        {/* Protected Route */}
        <Route path="/protected/Index" element={<Index />} />
      </Routes>
    </div>
  );
}

export default PageRoute;
