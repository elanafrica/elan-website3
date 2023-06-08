import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.png";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#0b2546] text-white">
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <Link href="/" className="flex title-font font-medium items-center">
              <Image
                className="bg-white mb-5"
                src={Logo}
                alt="logo"
                width={110}
                priority
              />
            </Link>
            <div className="flex gap-6 pb-5">
              <Link href="/">
                <button className="cursor-pointer text-4xl hover:text-gray-400">
                  <BsLinkedin />
                </button>
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-4xl hover:text-gray-400">
                  <BsInstagram />
                </button>
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-4xl hover:text-gray-400">
                  <BsTwitter />
                </button>
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-4xl hover:text-gray-400">
                  <BsFacebook />
                </button>
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-4xl hover:text-gray-400">
                  <BsYoutube />
                </button>
              </Link>
            </div>
          </ul>
        </div>

      <div className="p-5">
        <ul className="">
          <p className="text-gray-200 font-bold text-2xl pb-4">Company</p>
          <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
            <Link href="/AboutUs">About Us</Link>
          </li>
          <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
            <Link href="/OurWork">Our Work</Link>
          </li>
          <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
            <Link href="/Services">Services</Link>
          </li>
          <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
            <Link href="/Blog">Blog</Link>
          </li>
          <li className="text-gray-200 text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
            <Link href="/Careers">Careers</Link>
          </li>
        </ul>
      </div>

        <div className="p-5">
          <p className="text-gray-200 font-bold text-2xl pb-4">Contact US</p>
          <p className="text-gray-200 pb-4">
            team@elanafrica.com <br />
            Tel: +2347031150441 <br />
            <span className="ml-7">+2348023033175 </span> <br />
            Lagos, Nigeria. <br />
          </p>
        </div>
      </div>
      <hr />

      <p className="mt-6 text-3px text-lg flex justify-center">
        &copy; 2023 Elan Africa. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
