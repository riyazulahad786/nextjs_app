"use client";

import Image from "next/image";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state
  const [activeMenu, setActiveMenu] = useState("home"); // Active menu state

  const cartCount = 3;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const setActive = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="relative">
      {/* Header Bar */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6 lg:px-8">
        <div>
          <img src="/Logo.png" alt="Logo" />
        </div>
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex nav_menu">
          <ul className="flex gap-4 items-center text-sm md:text-base">
            <li>
              <Link href="/home" legacyBehavior>
                <a
                  className={`${
                    activeMenu === "home" ? "text-[#14B8A6]" : ""
                  }`}
                  onClick={() => setActive("home")}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-1 hover:text-blue-500"
              >
                Categories <span><RxCaretDown /></span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Electronics
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Fashion
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Home Appliances
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Books
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a
                  className={`${
                    activeMenu === "explore" ? "text-blue-500" : ""
                  }`}
                  onClick={() => setActive("explore")}
                >
                  Explore
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a
                  className={`${
                    activeMenu === "about" ? "text-blue-500" : ""
                  }`}
                  onClick={() => setActive("about")}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="#" legacyBehavior>
                <a
                  className={`${
                    activeMenu === "blog" ? "text-blue-500" : ""
                  }`}
                  onClick={() => setActive("blog")}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li>
              <Link href="/home" legacyBehavior>
                <a
                  className={`${
                    activeMenu === "contact" ? "text-blue-500" : ""
                  }`}
                  onClick={() => setActive("contact")}
                >
                  Contact us
                </a>
              </Link>
            </li>

            {/* Search icon */}
            <li className="bg-gray-100 p-2 rounded-md">
              <CiSearch />
            </li>

            {/* User icon */}
            <li className="bg-gray-100 p-2 rounded-md">
              <FaRegCircleUser />
            </li>

            {/* Cart icon */}
            <li className="bg-gray-100 p-2 flex items-center relative">
              <IoCartOutline className="mr-2" />
              <span className="bg-red-500 text-white absolute right-0 top-[-4px] text-xs rounded-full px-2">
                {cartCount}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <img src="/Logo.png" alt="Logo" />
          <button onClick={toggleMenu} className="text-2xl">
            <HiX />
          </button>
        </div>
        <ul className="mt-4 flex flex-col gap-4 px-4 cursor-pointer">
          <li>
            <Link href="/home" legacyBehavior>
              <a
                className={`${
                  activeMenu === "home" ? "text-[#14B8A6]" : ""
                }`}
                onClick={() => setActive("home")}
              >
                Home
              </a>
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-blue-500"
            >
              Categories <span><RxCaretDown /></span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Electronics
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Fashion
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Home Appliances
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Books
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/home" legacyBehavior>
              <a
                className={`${
                  activeMenu === "explore" ? "text-blue-500" : ""
                }`}
                onClick={() => setActive("explore")}
              >
                Explore
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home" legacyBehavior>
              <a
                className={`${
                  activeMenu === "about" ? "text-blue-500" : ""
                }`}
                onClick={() => setActive("about")}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home" legacyBehavior>
              <a
                className={`${
                  activeMenu === "blog" ? "text-blue-500" : ""
                }`}
                onClick={() => setActive("blog")}
              >
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/home" legacyBehavior>
              <a
                className={`${
                  activeMenu === "contact" ? "text-blue-500" : ""
                }`}
                onClick={() => setActive("contact")}
              >
                Contact us
              </a>
            </Link>
          </li>
          <li className="flex gap-2 items-center">
            <CiSearch />
            <span>Search</span>
          </li>
          <li className="flex gap-2 items-center">
            <FaRegCircleUser />
            <span>Profile</span>
          </li>
          <li className="flex gap-2 cursor-pointer items-center">
            <IoCartOutline />
            <span>Cart ({cartCount})</span>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
}

export default Header;
