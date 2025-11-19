import React from "react";
import { Route, Routes } from "react-router-dom";

//import components
import Home from "../components/pages/public/Home";
import Login from "../components/pages/public/Login";
import SignUp from "../components/pages/public/SignUp";
import Academic from "../components/pages/public/Academic";
import Exam from "../components/pages/public/Exam";
import Practice from "../components/pages/public/Practice";
// Protected pages
import Index from "../components/pages/protected/Index";
import UserAcademic from "../components/pages/protected/Academic";
import UserExam from "../components/pages/protected/Exam";
import UserPractice from "../components/pages/protected/Practice";
import LeaderBoard from "../components/pages/protected/LeaderBoard";
import Profile from "../components/pages/protected/Profile";

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
        <Route path="/User/Index" element={<Index />} />
        <Route path="/User/Academic" element={<UserAcademic />} />
        <Route path="/User/Exam" element={<UserExam />} />
        <Route path="/User/Practice" element={<UserPractice />} />
        <Route path="/User/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/User/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default PageRoute;
