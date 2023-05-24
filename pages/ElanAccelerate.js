import React, { useEffect } from "react";
import Layout from "@/components/Layout";

import Aos from "aos";
import "aos/dist/aos.css";

import Logoh from "../public/elanaccehero.jpg";
import ElanAcce1 from "../public/elanaccehero.jpg";
import ElanAcce2 from "../public/elanaccehero.jpg";
import ElanAcce3 from "../public/elanaccehero.jpg";
import ElanAcceimg from "../public/elanaccehero.jpg";

import Image from "next/image";
import Link from "next/link";

function ElanAccelerate() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="ElanAccelerate">
      <div className="m-4">
        <div className="  ">
          <div className="relative">
            <Image className="w-full" src={Logoh} alt="Logo" priority />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-center absolute top-1/3 left-1/2  transform -translate-x-1/2 -translate-y-1/2">
                <p className="px-6 pb-6 text-3xl font-bold">
                  We are launching a new kind of growth affiliate system.
                </p>
                <p>
                  One that makes growth and scale integral to your company’s
                  roadmap.
                </p>
              </div>
              <div
                className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex  md: flex justify-center "
                style={{ animation: "scaleIn 1s ease-in-out" }}
              >
                <Link href="/">
                  <button
                    className="block  px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-7 ">
            <div className="text-center">
              <h2 className="text-[#0b2546] font-bold text-4xl mb-2">
                Who Can Take Part?
              </h2>
            </div>
            <div className="m-4  mt-7 flex flex-wrap items-center justify-center g-2 mt-7">
              <div className="w-1/3 pr-5 text-center ">
                <div className=" rounded-lg shadow-lg p-6 mb-4 ">
                  <Image className="w-72" src={ElanAcce1} alt="Logo" priority />
                  <h4 className=" text-xl font-bold">STARTUPS</h4>
                </div>
              </div>
              <div className="w-1/3 pr-5 text-center">
                <div className=" rounded-lg shadow-lg p-6  mb-4 ">
                  <Image className="w-72" src={ElanAcce2} alt="Logo" priority />
                  <h4 className=" text-xl font-bold">TECH VISIONARIES</h4>
                </div>
              </div>

              <div className="  w-1/3 pr-5 text-center">
                <div className=" rounded-lg shadow-lg p-6  mb-4 ">
                  <Image className="w-72" src={ElanAcce3} alt="Logo" priority />
                  <h4 className=" text-xl font-bold">SME's</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9" style={{ animation: "fadeIn 1s ease-in-out" }}>
          <div
            className="  pr-5 mt-7 bg-[#151414] p-4 text-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h2 className="text-3xl font-bold text-center mb-7">
              <div className="">
                <p
                  className="text-3xl font-bold  inline-block"
                  style={{
                    writingMode: "horizontal",
                  }}
                >
                  How This Works
                </p>
              </div>
            </h2>
            <div className="mt-9 flex justify-between gap-2">
              <div className=" w-2/3 pr-5">
                <Image
                  className="w-full "
                  src={ElanAcceimg}
                  alt="elanacce"
                  priority
                />
              </div>
              <div className="w-1/3 pr-5">
                <div>
                  <p className="font-bold text-xl mb-4">STEP 1</p>
                  <p>
                    Once we are a fit, we get straight to work. We build out
                    growth pipelines.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl  mt-4 mb-4">STEP 2</p>
                  <p>
                    Full-scale business analysis. Assess applicants and match
                    them up with relevant tech, sales, marketing, and capital.
                  </p>
                </div>
                <div>
                  <p className="font-bold  text-xl  mt-4 mb-4">STEP 3</p>
                  <p>
                    Brands Fed Through Funnel. Launch pilots between consumer
                    brands & technology.
                  </p>
                  <p>Fix integrations, design, and marketing</p>
                </div>
                <div>
                  <p className="font-bold  text-xl  mt-4 mb-4">STEP 4</p>
                  <p>
                    Happy, innovative companies with happy customers and
                    accelerated, sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-9">
        <div className="border-b-2 border-gray-500 px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div>
              <p className="text-xl font-bold">Go-To Market</p>
              <p>
                Our Go-to-market strategies help anticipate the challenges of
                your product's competitive space by thoroughly identifying the
                target market, articulating the product’s value proposition,
                crafting a marketing plan, and developing a strategy for your
                product's sales and distribution channels.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-500 px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center">
            <div>
              <p className="text-xl font-bold">HyperGrowth</p>
              <p>
                This is your Service description. Use this space to describe
                what the service entails, its benefits for users, and any other
                important information.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-500 px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div>
              <p className="text-xl font-bold">Product Dev</p>
              <p>
                We would take your idea from concept to delivery. This would
                involve brainstorming the initial concept to strategically
                planning, building, and releasing your product to the market and
                then measuring its success.
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-gray-500 px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center">
            <div>
              <p className="text-xl font-bold">Partnerships</p>
              <p>
                At ELAN we are open to collaborations Which would in turn
                increase brand awareness, generate more website and social media
                traffic, grow your number of conversions, and aid customer
                acquisition and retention.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div>
              <p className="text-xl font-bold">Team Building</p>
              <p>
                We would help you create and organize a simple method of
                connecting your employees and colleagues with the mission of
                your organization and with each other, a fun, simple way to
                share ideas, and engage with one another. If you haven’t
                considered integrating team-building activities into your
                workplace grind, now is your chance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4  mt-7 flex flex-wrap items-center justify-center">
        <div className="w-1/2 pr-5 mt-7 mb-5">
          <h2 className="text-4xl mb-5">Let's talk</h2>
          <p>about the hopes and dreams for your business! ​</p>
          <p>Book a time for your free 30-minute growth consultation call. </p>
        </div>
        <div className="w-1/2 pr-5">
          <form className="bg-gray-100 p-6 rounded-lg">
            <h4 className="text-xl text-center">Contact Us</h4>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="phone">
                Phone number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                for="message"
              >
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
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
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default ElanAccelerate;
