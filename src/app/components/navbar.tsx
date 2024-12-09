'use client';

import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header Container */}
      <div className="h-[50px] w-full bg-[#7E33E0] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 space-x-4">
        {/* Left Section: Envelope and Phone */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <RxEnvelopeClosed className="w-4 h-4 text-white" />
            <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
              mhhasanul@gmail.com
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <PiPhoneCallBold className="w-4 h-4 text-white" />
            <span className="hidden sm:inline text-white font-[Josefin Sans] font-semibold text-sm md:text-base">
              (12345)67890
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-1">
            <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
              English
            </span>
            <RiArrowDropDownLine className="w-4 h-4 text-white" />
          </div>

          <div className="hidden sm:flex items-center space-x-1">
            <span className="text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
              USD
            </span>
            <RiArrowDropDownLine className="w-4 h-4 text-white" />
          </div>

          <div className="flex items-center space-x-1">
            <span className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
              Login
            </span>
            <FiUser className="w-4 h-4 text-white" />
          </div>

          <div className="flex items-center space-x-1">
            <span className="hidden sm:inline text-[#F1F1F1] font-[Josefin Sans] font-semibold text-sm md:text-base">
              Wishlist
            </span>
            <CiHeart className="w-4 h-4 text-white" />
          </div>

          <FiShoppingCart className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Navbar Container */}
      <div className="w-full h-[60px] bg-white flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        {/* Hekto Logo */}
        <div className="text-[#0D0E43] font-[Josefin Sans] font-bold text-lg md:text-xl lg:text-2xl">
          Hekto
        </div>

        {/* Navbar Links */}
        <div className="hidden sm:flex items-center space-x-4 ml-8 relative">
          {/* Home Link with Dropdown */}
          <div className="relative flex items-center space-x-1">
          <Link href="/"><span className="text-[#FB2E86] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
            Home
          </span></Link>
            <span
              className="text-[#FB2E86] font-[Lato] text-sm md:text-base hover:text-[#e0336a] cursor-pointer"
              onClick={toggleDropdown}
            >
               <RiArrowDropDownLine className="w-5 h-5 text-[#FB2E86]" />
            </span>
           
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-[100%] left-0 bg-white shadow-md rounded-md w-48 mt-2 z-50">
                <Link href="/shopList">
                  <span className="block px-4 py-2 text-[#0D0E43] hover:bg-gray-100 cursor-pointer">
                    Shop List
                  </span>
                </Link>
                <Link href="/shopLeftSidebar">
                  <span className="block px-4 py-2 text-[#0D0E43] hover:bg-gray-100 cursor-pointer">
                    Shop LSB
                  </span>
                </Link>
                <Link href="/shopGrid">
                  <span className="block px-4 py-2 text-[#0D0E43] hover:bg-gray-100 cursor-pointer">
                    Shop Grid
                  </span>
                </Link>
              </div>
            )}
          </div>

          <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
            Pages
          </span>

          <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
            Products
          </span>

          <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
            Blog
          </span>

          <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
            Shop
          </span>

          <span className="text-[#0D0E43] font-[Lato] text-sm md:text-base hover:text-[#e03333] cursor-pointer">
            Contact
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex items-center ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-block w-[200px] lg:w-[300px] h-[40px] border border-[#aea6a6] px-4 text-sm md:text-base rounded-l"
          />
          <div className="w-[40px] h-[40px] bg-[#FB2E86] flex items-center justify-center rounded-r">
            <CiSearch className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
