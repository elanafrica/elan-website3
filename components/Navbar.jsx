import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font">
      <div className=" mx-auto flex flex-wrap items-center justify-between py-4 px-6 relative z-10">
        <div className="flex items-center ">
          <Link href="/" className="flex items-center">
            <Image className="" src={Logo} alt="logo" width={150} priority />
          </Link>
        </div>
        <button
          className="hamburger-menu ml-auto md:hidden relative z-20"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav
          className={`${
            isOpen ? "flex flex-col items-start mt-4" : "hidden"
          } absolute top-0 left-0 right-0 bg-white p-4 mt-1 rounded-md shadow-lg z-10 md:static md:flex md:flex-row md:items-center md:mt-0`}
        >
          <Link
            href="/"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/AboutUs"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            href="/OurWork"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Our Work
          </Link>
          <Link
            href="/Blog"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Blog
          </Link>
          <Link
            href="/Careers"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Careers
          </Link>

          <div className="relative ml-3">
            <button
              className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMenu}
            >
              <Link href="/Services" className="">
                Services
              </Link>
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute z-10 bg-white p-4 mt-1 rounded-md shadow-lg`}
            >
              <Link
                href="/ElanAccelerate"
                className="block py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Accelerate
              </Link>
              <Link
                href="/ElanDev"
                className="block py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Dev
              </Link>
              <Link
                href="/ElanGrowth"
                className="block py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Growth
              </Link>
              <Link
                href="/ElanStudio"
                className="block py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Studio
              </Link>
              <Link
                href="/ElanTraining"
                className="block py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Training
              </Link>
            </div>
          </div>
          <Link
            href="/ContactUs"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact US
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
