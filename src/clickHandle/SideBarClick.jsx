import React, { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

function SideBarClick() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return isClicked;
}

export default SideBarClick;
