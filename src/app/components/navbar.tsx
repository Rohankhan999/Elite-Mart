'use client';

import { RxEnvelopeClosed } from "react-icons/rx";
import { PiPhoneCallBold } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiUser, FiMenu } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <div>
      {/* Top Header */}
      <div className="h-[50px] w-full bg-[#7E33E0] flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Left Section */}
        <div className="flex items-center space-x-4 text-white">
          <div className="flex items-center space-x-2">
            <RxEnvelopeClosed className="w-4 h-4" />
            <span className="hidden sm:inline font-[Josefin Sans] text-sm">
              mhhasanul@gmail.com
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <PiPhoneCallBold className="w-4 h-4" />
            <span className="hidden sm:inline font-[Josefin Sans] text-sm">
              (12345)67890
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-1">
            <span className="text-sm">English</span>
            <RiArrowDropDownLine className="w-4 h-4" />
          </div>
          <div className="hidden sm:flex items-center space-x-1">
            <span className="text-sm">USD</span>
            <RiArrowDropDownLine className="w-4 h-4" />
          </div>
          <Link href="/loign" className="flex items-center space-x-1">
            <span className="hidden hover:text-white sm:inline text-sm">Login</span>
            <FiUser className="w-4 h-4 hover:text-white" />
          </Link>
          <Link href="/wishlist" className="flex items-center space-x-1">
            <span className="hidden sm:inline text-sm">Wishlist</span>
            <CiHeart className="w-4 h-4" />
          </Link>
          <Link href="/cart">
            <FiShoppingCart className="w-5 h-5 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <div className="w-full h-[60px] bg-white flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Logo */}
        <div className="text-[#0D0E43] font-bold text-lg sm:text-xl">
          Hekto
        </div>

        {/* Navbar Links */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="relative flex items-center ml-[10] space-x-1">
            <Link href="/" className="text-[#FB2E86] text-sm hover:text-pink-500">
              Home
            </Link>
            <span onClick={toggleDropdown} className="cursor-pointer">
              <RiArrowDropDownLine className="w-5 h-5 text-[#FB2E86]" />
            </span>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md w-40 mt-2 z-50">
                <Link href="/shopList" className="block px-4 py-2 hover:bg-gray-100">
                  Shop List
                </Link>
                <Link href="/shopLeftSidebar" className="block px-4 py-2 hover:bg-gray-100">
                  Shop LSB
                </Link>
                <Link href="/shopGrid" className="block px-4 py-2 hover:bg-gray-100">
                  Shop Grid
                </Link>
              </div>
            )}
          </div>
          <Link href="/pages" className="text-[#0D0E43] text-sm hover:text-pink-500">
            Pages
          </Link>
          <Link href="/shopList" className="text-[#0D0E43] text-sm hover:text-pink-500">
            Products
          </Link>
          <Link href="/blog" className="text-[#0D0E43] text-sm hover:text-pink-500">
            Blog
          </Link>
          <Link href="/shopList" className="text-[#0D0E43] text-sm hover:text-pink-500">
            Shop
          </Link>
          <Link href="/contact" className="text-[#0D0E43] text-sm hover:text-pink-500">
            Contact
          </Link>
        </div>

        {/* Search */}
        <div className="flex items-center ml-auto">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block w-[150px] lg:w-[300px] h-[40px] border px-4 text-sm rounded-l"
          />
          <button className="w-[40px] h-[40px] bg-[#FB2E86] flex items-center justify-center rounded-r">
            <CiSearch className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

       {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="sm:hidden">
          <FiMenu className="w-6 h-6 text-[#0D0E43]" />
        </button>
      

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md flex flex-col items-start px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-[#FB2E86]">Home</Link>
          <Link href="/pages" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D0E43]">Pages</Link>
          <Link href="/shopList" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D0E43]">Products</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D0E43]">Blog</Link>
          <Link href="/shopList" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D0E43]">Shop</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#0D0E43]">Contact</Link>
        </div>
      )}
      </div>
  );
}
