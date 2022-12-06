import React from 'react'
import '../styles/cube.css'

export const Header = () => {
  return (
     <section className="w-full flex flex-col md:flex-row min-h-[70vh]">
        <div className="flex-1 flex justify-start md:justify-center items-start md:items-center">
            <div className="inline-block px-6 sm:px-0 sm:pl-36">
                <p className="text-gray-600 text-md font-normal">Hi! I am Jorge and I am a</p>
                <h2 className="text-gray-900 font-black text-3xl md:text-4xl lg:text-5xl mb-5">Full Stack <br />Web Developer</h2>
                <p className="text-gray-500 font-light text-md max-w-[420px]">I love to help people and solve problems, and coding satisfy both necessities.</p>
                <a href="#contact" className="hover:scale-105 hover:shadow-md hover:shadow-gray-700 mt-5 inline-block bg-blue-900 text-white px-4 py-2 font-bold rounded-lg">contact me</a>
            </div>
        </div>
        <div className="overflow-hidden relative flex-1 flex justify-center items-center py-14 md:py-0">
            <div className="relative w-[200px] h-[200px] rounded-[50%] animate-orbit border-gray-600 border-[1px]">
                <div className="top-0 left-0 w-[50px] h-[50px] rounded-[50%] bg-blue-300"></div>
            </div>
            <div className="scene absolute top-1/2 left-1/2 w-[80px] h-[80px] translate-x-[-40px] translate-y-[-40px]">
                <div className="scene">
                    <div className="cube">
                        <div className="front"></div>
                        <div className="back"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                        <div className="top"></div>
                        <div className="shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

