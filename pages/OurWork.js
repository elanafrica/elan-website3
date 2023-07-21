import React, { useEffect, useRef } from "react";

import Layout from "../components/Layout";
//importing animate on scrol
import Aos from "aos";
import "aos/dist/aos.css";

import ElanWork1 from "../public/erma.jpg";
import ElanWork2 from "../public/eaerix.jpg";
import ElanWork3 from "../public/efazison.jpg";
import ElanWork4 from "../public/egomarket.jpg";
import ElanWork5 from "../public/eeace.jpg";
import ElanWork6 from "../public/entel.jpg";
import ElanWork7 from "../public/epaj.jpg";
// import ElanWork8 from "../public/erma.jpg";
// import ElanWork9 from "../public/erma.jpg";
import ElanWork10 from "../public/errfl1.jpg";

import Image from "next/image";
import Link from "next/link";

import Testimonials from "@/components/Testimonials";

function OurWork() {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="OurWork">
      <div className="m-4 relative">
        <div className="w-full h-full player-wrapper">
          <video ref={videoRef} loop muted controls>
            <source src={"/videos/elanvideo.mp4"} />
          </video>
        </div>

        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-[#0b2546]">
          <div className="text-center">
            <p className="px-6 pb-6 text-3xl  text-white font-bold">
              We build timeless experiences.
            </p>
          </div>
        </div> */}
      </div>

      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 homepage22 mt-9"
          style={{ animation: "fadeIn 1s ease-in-out" }}
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="relative">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork1}
              alt="Work 1"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork2}
              alt="Work 2"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork3}
              alt="Work 3"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork4}
              alt="Work 4"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork5}
              alt="Work 5"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork6}
              alt="Work 6"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork7}
              alt="Work 7"
              priority
            />
          </div>
          {/* <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork8}
              alt="Work 8"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork9}
              alt="Work 9"
              priority
            />
          </div> */}
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork10}
              alt="Work 10"
              priority
            />
          </div>
          {/* <div className="relative ">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork11}
              alt="Work 11"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork12}
              alt="Work 12"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork13}
              alt="Work 13"
              priority
            />
          </div>
          <div className="relative">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork14}
              alt="Work 14"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork15}
              alt="Work 15"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork16}
              alt="Work 16"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork17}
              alt="Work 17"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork18}
              alt="Work 18"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork19}
              alt="Work 19"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork20}
              alt="Work 20"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork21}
              alt="Work 21"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork22}
              alt="Work 22"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork23}
              alt="Work 23"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork24}
              alt="Work 24"
              priority
            />
          </div>
          <div className="relative ">
            <Image
              className="max-w-full rounded-lg shadow-md transition-transform duration-500 transform hover:scale-105"
              src={ElanWork25}
              alt="Work 25"
              priority
            />
          </div> */}
        </div>
        <div className="mt-9 mb-7  flex justify-center">
          <div
            className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex  md: flex justify-center"
            style={{ animation: "scaleIn 1s ease-in-out" }}
          >
            <Link href="/">
              <button
                className="block mt-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto"
                data-aos="fade-down"
                data-aos-delay="400"
                type="submit"
              >
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Testimonials />
      </div>
      <div className="mt-7  py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              {" "}
              Start a project with us today
            </h2>
            <p className="text-black-300">
              Free growth consultancy for African businesses.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-0 sm:flex sm:justify-center animate-scale-in">
            <Link href="/ContactUs">
              <button className="block mt-5 mb-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto animate-fade-in">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default OurWork;
