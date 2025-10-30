import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'

//react icon import
import { IoMenu } from "react-icons/io5";
import MobileSideBar from './MobileSideBar';

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <MobileSideBar open={isOpen} />
     <div className='fixed flex justify-between items-center py-3 px-5 top-0 bg-white w-full lg:hidden'>
      <div className='text-2xl' onClick={()=> setIsOpen(!isOpen)}>
        <IoMenu />
      </div>
      <div>
        <h1><a href="#" className="galada-regular font-extrabold italic text-black"><span class="text-xl text-red-700">প্র</span><span class=" text-blue-700 text-lg">স্তুতি </span><span class="text-lg text-red-500">ম</span><span className='text-sm'>ঞ্চ</span></a></h1>
      </div>
      <div>
        <NavLink to={"/Login"} className={"bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full font-medium"}
       >সাইন ইন</NavLink>
      </div>
     </div>
    </>
   
  )
}

export default MobileNav
