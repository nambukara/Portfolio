import { useState, useEffect } from "react";
import DataImage from "../data"; 

const Navbar = () => {
    const[active,setActive]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        };  
    },[]);

  return (
    <div className="nevbar py-7 flex items-center justify-between">
        <div classname="logo">
            <img src={DataImage.Logo} alt="Hero Image" className="w-10 rounded-md" />
        </div>
        <ul className={'menu flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transit $(active ? "top-0 opacity-100 " : "-top-10 opacity-0")'}>
            <li>
                <a href="#" className="sm:text-lg text-lg font-medium">Home</a>
            </li>
            <li>
                <a href="#"className="text-lg font-medium">About</a>
            </li>
            <li>
                <a href="#"className="text-lg font-medium">Projects</a>
            </li>
            <li>
                <a href="#"className="text-lg font-medium">Contact</a>
            </li>
        </ul>
    </div>
  )
};
 
export default Navbar