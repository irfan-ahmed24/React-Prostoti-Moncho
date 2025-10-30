import React from 'react'

function MobileSideBar({open}) {
  return (
    <div id='MobileSideBar' className={`fixed flex z-50 justify-between items-center w-full top-13 lg:hidden transition-all duration-300 -translate-x-full ${open ? "!translate-x-0" : ""}`}>
        <div className='bg-white w-1/2 sm:w-2/5 md:w-1/3 h-screen shadow-lg'>
             MobileSideBar
        </div>
        <div className='bg-black opacity-20 h-screen w-1/2 sm:w-3/5 md:w-2/3'></div>
     
    </div>
  )
}

export default MobileSideBar
