import React from "react";
import DataImage from "../data"; 

const Hero = () => {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 grid-cols-1">
        <div>
            <div className="flex items-center gap-3 mb-6 bg-zinc-400 w-fit p-4 rounded-2xl">
                <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
                <q>Thisen Melaka Nambukara</q>
            </div>
            <h1 className="text-5xl/tight font-bold mb-6">Hi,I'm Thisen Nambukara</h1>
            <p className="text-base/loose mb-6 opacity-50">A passionate Full-Stack Developer crafting seamless web experiences.</p>
            <div className="flex items-center sm:gap-4 gap-2">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-700 transition">Hire Me</button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">Download CV</button>
            </div>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto"/>
      </div>
    </>
  )
}

export default Hero