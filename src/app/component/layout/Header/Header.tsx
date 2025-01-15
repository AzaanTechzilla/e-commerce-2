'use client'
import { useState } from "react";
import Para from "../../typography/Para";
import { FaRegHeart } from "react-icons/fa";
import { FaCartFlatbed } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { FaHome } from "react-icons/fa";
export default function Header() {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    return(
        <>
         <header>
                <nav className="md:py-3 md:px-3 lg:p-5 p-3">
                  <div className="flex items-center justify-between">
                    <div className="">
                      <Para title="Ryst." className="text-2xl font-semibold" />
                    </div>
                    <div className="flex items-center justify-between hidden  md:flex">
                      <label className="relative block">
                        <span className="absolute inset-y-0 left-5 flex items-center ">
                          <FaMagnifyingGlass />
                        </span>
                        <input
                          className="placeholder:text-slate-400 hover:bg- block bg-white md:min-w-[15rem] lg:min-w-[25rem] border-[1.5px] border-black rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-2"
                          placeholder="Search for anything..."
                          type="text"
                          name="search"
                        />
                      </label>
                      <FaRegHeart className="text-xl mx-2 cursor-pointer" />
                      <FaCartFlatbed className="text-xl mx-2 cursor-pointer" />
                      <button className="border-2 px-4 py-1 uppercase rounded-full text-sm md:text-sm lg:text-md border-black font-bold mx-2">
                        log in
                      </button>
                      <button className="border-2 px-4 py-1 uppercase rounded-full md:text-sm lg:text-md border-black font-bold ">
                        menu
                      </button>
                      <div className="relative mx-2 group inline-block">
                        {/* Trigger Button */}
                        <button className=" ">
                          <figure className="max-w-[50px] h-auto ">
                          <img src="/assets/image/fakeprofilephoto.png" alt="profile photo" className="w-full rounded-full h-auto" />
                          </figure>
                        </button>
        
                        {/* Dropdown Content */}
                        <div className="absolute right-0 hidden group-hover:block bg-white text-black mt-2 rounded-md shadow-lg transition-transform duration-3000 ease-in-out transform -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                          <ul className="py-2">
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 rounded"
                              >
                                Home
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 rounded"
                              >
                                About
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 rounded"
                              >
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <button
                      className="fixed right-4 top-1 md:hidden p-2 "
                      onClick={toggleSidebar}
                    >
                      <HiBars3CenterLeft className="text-3xl" />
                    </button>
                    <div
                      className={`fixed top-0 right-0 h-full sm:w-64 w-full bg-black text-white transform ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                      } transition-transform duration-300 ease-in-out`}
                    >
                      <div className="p-4">
                        <div className="flex items-center justify-between border-b-2 border-white">
                          <h2 className="text-xl font-bold">Ryst.</h2>
                          <button className="  text-white " onClick={toggleSidebar}>
                            <VscChromeClose className="text-white text-2xl" />
                          </button>
                        </div>
                        <ul className="mt-4 space-y-2">
                          <li>
                            <label className="relative block">
                              <span className="absolute inset-y-0 left-5 flex items-center ">
                                <FaMagnifyingGlass className="text-black" />
                              </span>
                              <input
                                className="placeholder:text-slate-400 hover:bg- block bg-white w-full border-[1.5px] border-black rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mx-2"
                                placeholder="Search for anything..."
                                type="text"
                                name="search"
                              />
                            </label>
                          </li>
                          <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                              About
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
                <nav className="fixed md:hidden  bottom-0 left-0 right-0 bg-black text-white shadow-md">
                  <div className="max-w-7xl mx-auto flex justify-between items-center p-2">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-2"><FaHome className="text-lg" />
        <p className="text-sm">Home</p>            </div>
                    <div className="flex flex-col items-center gap-2 "><FaCartFlatbed className="text-lg" /> <p className="text-sm">Add To Cart</p></div>
                    <div className="flex flex-col items-center gap-2"><FaRegHeart className="text-lg"/><p className="text-sm">Wishlist</p></div>
        
                    {/* Mobile Menu Button */}
                    <a href="#" className="">
                    <figure className="max-w-[50px] h-auto ">
                          <img src="/assets/image/fakeprofilephoto.png" alt="profile photo" className="w-full rounded-full h-auto" />
                          </figure>
                    </a>
                  </div>
                </nav>
              </header>
        </>
    )
}