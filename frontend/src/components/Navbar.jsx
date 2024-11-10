import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import {Menu, X} from "lucide-react"

const Navbar = () => {

  const linkClass = ({isActive}) => 
    isActive 
  ? 'rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900' 
  : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white';

  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };

  return (
    <>
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button onClick={handleMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              {/* NAV Left*/}
           {/*   
              <div className="flex space-x-4">
                <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-white bg-gray-900"  to="/" >
                  Home
                </NavLink>
                <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/about" >
                  About
                </NavLink>
                <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/summary" >
                  Summary
                </NavLink>
              </div>
              */}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* NAV Right */}
          <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink className={linkClass}  to="/" >
                  Home
                </NavLink>
                <NavLink className={linkClass} to="/about" >
                  About
                </NavLink>
                <NavLink className={linkClass} to="/summary" >
                  Summary
                </NavLink>
                <NavLink className={linkClass} to="/form" >
                  Form
                </NavLink>
                <NavLink className={linkClass} to="/card" >
                  Card
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="sm:hidden" id="mobile-menu">

       {/* Mobile Menu open */}
       {open ? (
          <>
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink onClick={handleMenu}  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/" >
            Home
          </NavLink>
          <NavLink onClick={handleMenu}  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/about" >
            About
          </NavLink>
          <NavLink onClick={handleMenu}  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/summary" >
            Summary
          </NavLink>
          <NavLink onClick={handleMenu}  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/form" >
            Form
          </NavLink>
        </div>
          </>
        ) : null}
        {/* Mobile Menu close */}



      </div>
    </nav>
    </>
  )
}

export default Navbar
