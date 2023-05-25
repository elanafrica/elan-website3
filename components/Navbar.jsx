import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const buttontoggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-gray-600 body-font max-w-7xl mx-auto">
      <div className="container mx-auto flex p-5 items-center justify-between">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <Image className="" src={Logo} alt="logo" width={110} priority />
        </Link>
        <div className="md:hidden">
          <button
            className="hamburger-menu"
            aria-label="Open Menu"
            onClick={buttontoggleMenu}
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
        </div>

        <nav
          className={`md:ml-auto md:flex items-center text-base justify-center gap-4 ${
            isOpen ? "flex flex-col mt-4" : "hidden"
          } sm:flex-row`}
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
          <Link
            href="/ContactUs"
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact US
          </Link>
          <div className="relative">
            <button
              className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Link
                href="/Services"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                Services
              </Link>
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } absolute z-50 bg-white p-4 mt-1 rounded-md shadow-lg`}
            >
              <Link
                href="/ElanAccelerate"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Accelerate
              </Link>
              <Link
                href="/ElanDev"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Dev
              </Link>
              <Link
                href="/ElanGrowth"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Growth
              </Link>
              <Link
                href="/ElanStudio"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Studio
              </Link>
              <Link
                href="/ElanTraining"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-[rgb(7,39,78)] hover:text-white"
              >
                Elan Training
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
