import React from 'react'
import { useState } from 'react';
import DataImage from "../data"; 
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

const Nevbar = () => {

  const[showMenu,setShowMenu] = useState(false);

  return (
    <nev className="fixed w-full z-0 bg-gray-100 backdrop-blur-sm py-2 px-8 text-black shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
            <div classname="logo">
                 <img src={DataImage.Logo} alt="Hero Image" className="w-10 rounded-md" />
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {
                showMenu ?
                <FaXmark onClick={()=>setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>:
                <FaBars onClick={()=>setShowMenu(!showMenu)} className="text-2xl cursor-pointer"/>
              }
                
                
            </div>
        </div>

        {/*Mobile Menue*/}
        {
          showMenu &&(
            <div className="md:hidden mt-4 bg-white/50 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-top">
              <a onClick={()=>setShowMenu(!showMenu)} href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
               </a> 
              <a onClick={()=>setShowMenu(!showMenu)} href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
              </a>
              <a onClick={()=>setShowMenu(!showMenu)} href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
              </a>
              <a onClick={()=>setShowMenu(!showMenu)} href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
              </a>
              <a onClick={()=>setShowMenu(!showMenu)} href="#" className="relative text-black/80 transition duration-300 hover:text-blue-600 group">
                <span>Home</span>
              </a>
            </div>
          )
        }
    </nev>
  )
}

export default Nevbar