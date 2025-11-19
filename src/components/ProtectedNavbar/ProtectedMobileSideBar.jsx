import React from "react";
import SideBar from "../SideBar";
import ProtectedSideBar from "./ProtectedSideBar";

function ProtectedMobileSideBar({ open }) {
  return <ProtectedSideBar open={open} />;
}

export default ProtectedMobileSideBar;
