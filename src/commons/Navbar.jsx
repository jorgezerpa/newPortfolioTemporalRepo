import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { TiThMenu } from 'react-icons/ti'

export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()

    const handleClick = () => {
        setShowMenu(!showMenu)
    }

    return (
    <>
        <nav className="hidden sm:flex w-full pt-5 px-2 pb-10 sm:pt-14 sm:px-36 justify-between">
            <Link to={'/'}>
                <div className="text-2xl">
                    <img width='120px' src="/images/logo.png" />
                </div>
            </Link>
            <ul className="flex justify-center gap-3 text-md text-gray-600 font-semibold">
                <Link to={'/'}>
                    <div className={`${location.pathname==='/' && 'hidden'}`} href="#home">home</div>
                </Link>
                <a className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#home">home</a>
                <a className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#about">about</a>
                <a className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#portfolio">portfolio</a>
                <a className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#contact">contact</a>
            </ul>
        </nav>

        <nav className="w-full pt-5 px-2 pb-10 sm:pt-14 sm:px-36 flex sm:hidden justify-between">
            <Link to={'/'}>
                <div className="text-2xl">
                <img width='90px' src="/images/logo.png" />
                </div>
            </Link>
            <div className="text-2xl z-50" onClick={handleClick}>
                <TiThMenu size={30} color={showMenu ? '#fff' : '#000'} />
            </div>
            <div id="mobileMenu" className={`w-full ${showMenu ? 'block' : 'hidden'} z-40 absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.7)]`}>
                <ul className="w-full h-full text-lg text-white font-bold flex flex-col justify-center items-center gap-3">
                    <Link to={'/'}>
                        <div onClick={handleClick} className={`${location.pathname==='/' && 'hidden'}`} href="#home">home</div>
                    </Link>
                    <a onClick={handleClick} className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#home">home</a>
                    <a onClick={handleClick} className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#about">about</a>
                    <a onClick={handleClick} className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#portfolio">portfolio</a>
                    <a onClick={handleClick} className={`${location.pathname==='/personalProjects' && 'hidden'}`} href="#contact">contact</a>
                </ul>
            </div>
        </nav>
    </>
  )
}
