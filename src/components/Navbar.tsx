import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiOutlineShoppingCart } from "react-icons/ai";
import { BsWalletFill, BsFillPersonFill } from "react-icons/bs";
import { FaUserFriends, FaTruck } from "react-icons/fa"
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    return (
        <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Small
                    <span className="font-bold"> Chops</span>
                </h1>
            </div>
            <div className="bg-gray-200 flex rounded-full items-center px-2 w-[200px] sm:w-[400px] lg:w-[500]">
                <AiOutlineSearch size={25} />
                <input className="bg-transparent w-full p-2 focus:outline-none"
                    type='text' placeholder="search foods" />
            </div>
            <button className="bg-orange-900 hidden md:flex items-center text-white py-2 rounded-full gap-2">
                <AiOutlineShoppingCart size={20} />
                Cart
            </button>
            {sideNav && (
                <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
                    onClick={() => setSideNav(!sideNav)}
                />
            )}

            <div className={sideNav ? "fixed top-0 left-0 h-screen w-[300px] z-10 duration-300 bg-white"
                : "fixed top-0 left-[-100%] h-screen w-[300px] z-10 duration-300 bg-white"}>
                <AiOutlineClose onClick={() => setSideNav(!sideNav)} size={25} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">Small<span className="text-orange-900"> Chops</span></h2>
                <nav>

                    <ul className="flex flex-col p-4 text-gray-900">
                        <li className="text-xl py-2 flex">
                            <FaTruck size={25} className="mr-4 rounded-full" />
                            Food Delivery
                        </li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-900">
                        <li className="text-xl py-2 flex">
                            <MdOutlineFavorite size={25} className="mr-4 rounded-full" />
                            Favourite
                        </li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-900">
                        <li className="text-xl py-2 flex">
                            <BsWalletFill size={25} className="mr-4 rounded-full" />
                            My Balance
                        </li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-900">
                        <li className="text-xl py-4 flex">
                            <MdHelp size={25} className="mr-4 rounded-full" />
                            Help
                        </li>
                    </ul>
                    <ul className="flex flex-col p-4 text-gray-900">
                        <li className="text-xl py-2 flex">
                            <BsFillPersonFill size={25} className="mr-4 rounded-full" />
                            Account
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar