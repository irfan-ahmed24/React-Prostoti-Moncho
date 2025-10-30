import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <div className='bg-amber-50'>
        <div  className='flex justify-between mx-auto container'>
            <div>
                prostoty moncho
            </div>
            <nav className=''>
                <NavLink to="/" className={"mx-2 transition-all duration-200"}>Home</NavLink>
                <NavLink to={"/Login"} className={"mx-2 transition-all duration-200"}>Login</NavLink>
                <NavLink to={"/SignUp"} className={"mx-2 transition-all duration-200"}>SignUp</NavLink>
            </nav>
        </div>
    </div>
  )
}
