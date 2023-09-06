import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    return (
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Small
                    <span>chops</span>
                </h1>
            </div>
            <div className="bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent w-full p-2 focus:outline-none"
                    type='text' placeholder="search foods" />
            </div>
            <button className="bg-blue-600 hidden md:flex items-center text-white py-2 rounded-full gap-2">
                <AiOutlineShoppingCart size={20} />
                Cart
            </button>
            {sideNav && (
                <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" />
            )}
            <div className={sideNav ? "fixed top-0 left-0 h-screen w-[300px] z-10 duration-300 bg-white"
                : "fixed top-0 left-[-100%] h-screen w-[300px] z-10 duration-300 bg-white"}>
                <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">Smallchops</h2>
            </div>
        </div>
    )
}

export default Navbar