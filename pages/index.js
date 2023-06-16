import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Home1 from "../public/africanmap.jpg";
import Home2 from "../public/egrowth.jpg";
import Home3 from "../public/edev.jpg";
import Home4 from "../public/etraining.jpg";
import Home5 from "../public/estudio.jpg";
import Home6 from "../public/eaccel8.jpg";
import Show1 from "../public/errfl1.jpg";
import Show2 from "../public/eaerix.jpg";
import Show3 from "../public/efazison.jpg";
import Show4 from "../public/egomarket.jpg";
import Show5 from "../public/ekobo1.jpg";
import Show6 from "../public/entel.jpg";
import Show7 from "../public/epaj.jpg";
import Show8 from "../public/erma.jpg";
import Show9 from "../public/eeace.jpg";
import businessgrowth2 from "../public/hero.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import jumia from "../public/assets/jumia.png";
import aerix from "../public/assets/aerix.png";
import max from "../public/assets/max.png";
import gomarket from "../public/assets/gomarket.png";
import microsoft from "../public/assets/microsoft.png";
import kobo from "../public/assets/kobo.png";
import konga from "../public/assets/konga.png";
import fazsion from "../public/assets/fazsion.png";
import mrprice from "../public/assets/mrprice.png";
import playns from "../public/assets/playns.png";

import Image from "next/image";
import Link from "next/link";

function Home() {
  // slide effect animation
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <div container>
      <main>
        <Layout title="HomePage">
          <div className="m-4">
            {/* <div className="relative flex flex-col sm:flex-row bg-[#0b2546] text-white space-y-4 sm:text-center lg:text-left">
              <div className="w-full sm:w-1/2 pr-5 p-5">
                <h1 className="text-3xl sm:text-3xl font-bold capitalize mb-5">
                  Everyone Wants to Live on the Moon. Your Business Does Too.
                </h1>
                <p className="text-xl font-light sm:w-80 w-64">
                  We may just know how to make that happen.
                </p>
                <div className="flex justify-center mt-5">
                  <Link href="/ContactUs">
                    <button
                      className="px-6 py-2 text-center text-[#0b2546] bg-white rounded-md mx-auto"
                      data-aos="fade-down"
                      data-aos-delay="400"
                    >
                      Get Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:block w-full sm:w-1/2 pr-5">
                <div className="absolute inset-0 bg-star-sprinkles opacity-30"></div>
                <Image
                  className="w-full hero-container z-10"
                  src={Hero}
                  alt="hero"
                  priority
                />
              </div>
            </div> */}

            {/* hero section */}

            <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
              <Image
                className="absolute w-full h-full object-cover mix-blend-overlay"
                src={businessgrowth2}
                alt="home hero"
                priority
              />
              <div className="p-6 md:p-24 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                  Everyone Wants to Live on the Moon. Likewise your Business
                  Does Too.
                </h1>
                <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
                  We work towards making this happen.
                </p>
                <div className="flex justify-center mt-7">
                  <Link href="/ContactUs">
                    <button
                      className="px-6 mt-10 py-2 text-center hover:text-white hover:bg-[#0b2546] bg-white rounded-md mx-auto"
                      data-aos="fade-down"
                      data-aos-delay="400"
                    >
                      Get Free Consultation
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* section */}
            <div className="sm:text-center lg:text-left mt-7">
              <div className="text-center text-xl lg:mb-20 lg:mt-20 sm:mb-20 md:mb-20">
                <h2>
                  We foster growth and sales for{" "}
                  <span className="text-green-300">
                    Startups, Tech Companies and SME's
                  </span>{" "}
                  across Africa.
                </h2>
                <p>
                  Growth is our assertion. We take a data-driven approach to
                  ensure business progression.
                  <br /> We help generate scalable growth for ambitious
                  startups, e-commerce, and SMEs.
                </p>
                <p>Discover the best growth action plan for your business. </p>
              </div>

              <div
                className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-2 mt-7 "
                style={{ animation: "fadeIn 1s ease-in-out" }}
              >
                <div className="col-span-1 w-full h-full">
                  <div
                    className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-7 md:pl-4 text-gray-100 text-lg text-center"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Data-Driven Insights for Growth.
                  </div>
                </div>

                <div className="col-span-1 w-full h-full">
                  <div
                    className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-7 md:pl-4 text-gray-100 text-lg text-center"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Proven Experience in Growth Strategy.
                  </div>
                </div>

                <div className="col-span-1 w-full h-full">
                  <div
                    className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-7 md:pl-4 text-gray-100 text-lg text-center"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Hands-on Business Intelligence.
                  </div>
                </div>

                <div className="col-span-1 w-full h-full">
                  <div
                    className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-7 md:pl-4 text-gray-100 text-lg text-center"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    We take your Business quite personally.
                  </div>
                </div>
              </div>

              {/* <div className="mt-7 mb-7 text-center">
                <Link href="/AboutUs">
                  <button
                    className="px-6 py-2 mt-7  text-white bg-[#0b2546] rounded-md hover:bg-[#042f63]"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Read More
                  </button>
                </Link>
              </div> */}
            </div>

            {/* section */}

            <div className="flex-1 space-y-4 sm:text-center lg:text-left homepage1">
              <div className="mt-10 flex flex-col lg:flex-row space-y-4 lg:space-y-0">
                <div className="w-full lg:w-1/2 pr-5">
                  <Image
                    className="w-full h-auto"
                    src={Home1}
                    alt=""
                    data-aos="fade-down"
                    data-aos-delay="400"
                    priority
                  />
                </div>

                <div className="w-full lg:w-1/2 pl-5 mt-7">
                  <div
                    className="p-6 text-xl font-bold"
                    style={{ animation: "slideIn 1s ease-in-out" }}
                  >
                    Africa is a hub for entrepreneurs of many disciplines, with
                    the unique resilience that guides the African spirit.
                  </div>
                  <div
                    style={{ animation: "slideIn 1s ease-in-out" }}
                    className="ml-6"
                  >
                    We are driven by <span className="font-bold">Passion</span>{" "}
                    and <span className="font-bold">Performance,</span> made for
                    every business, we are ever ready to take that business to
                    the next level.
                  </div>
                  <div
                    style={{ animation: "slideIn 1s ease-in-out" }}
                    className="ml-6"
                  >
                    Our techniques focus on a measurable and clear understanding
                    of the basics that make a remarkable difference to your
                    business, whoever and wherever you are.
                    We are passionate about growing your business and putting it
                    on the map.
                  </div>
                  {/* <div className="space-y-3 sm: flex justify-center md:flex justify-center mt-12">
                    <Link href="/">
                      <button
                        className="px-6 py-2 text-center text-white bg-[#0b2546] hover:bg-[#042f63] rounded-md"
                        data-aos="fade-down"
                        data-aos-delay="400"
                      >
                        Read More
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="mt-9">
              <div className="" style={{ animation: "scaleIn 1s ease-in-out" }}>
                <div
                  className="text-4xl font-bold mb-7 text-center mt-7"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Our Business Solutions
                </div>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:text-center lg:text-left mt-7 mb-4 mt-7">
                  <div
                    className="flex flex-col w-full sm:w-1/3 mb-4 px-2"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <div className="rounded-lg shadow-lg p-6 text-center mb-4">
                      <Image
                        className="w-full homepage22"
                        src={Home2}
                        alt=""
                        priority
                      />
                      <div className="text-xl font-bold mt-2">Elan Growth</div>
                      {/* Elan Growth is your expert business strategy and execution
                      partner. */}
                      <div className="flex justify-center mt-5">
                        <Link href="/ElanGrowth">
                          <button
                            className="px-6 py-2 text-center text-white bg-[#0b2546] rounded-md"
                            data-aos="fade-down"
                            data-aos-delay="400"
                          >
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col w-full sm:w-1/3 mb-4 px-2"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <div className="rounded-lg shadow-lg p-6 text-center mb-4">
                      <Image
                        className="w-full homepage22"
                        src={Home3}
                        alt=""
                        priority
                      />
                      <div className="text-xl font-bold mt-2">Elan Dev</div>
                      {/* We would not just identify your tech needs but also
                      implement them. */}
                      <div className="flex justify-center mt-5">
                        <Link href="/ElanDev">
                          <button
                            className="px-6 py-2 text-center text-white bg-[#0b2546] rounded-md"
                            data-aos="fade-down"
                            data-aos-delay="400"
                          >
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col w-full sm:w-1/3 mb-4 px-2"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <div className="rounded-lg shadow-lg p-6 text-center mb-4">
                      <Image
                        className="w-full homepage22"
                        src={Home4}
                        alt=""
                        priority
                      />
                      <div className="text-xl font-bold mt-2">
                        Elan Training
                      </div>
                      {/* Keep your team updated with current industry trends. */}
                      <div className="flex justify-center mt-5">
                        <Link href="/ElanTraining">
                          <button
                            className="px-6 py-2 text-center text-white bg-[#0b2546] rounded-md"
                            data-aos="fade-down"
                            data-aos-delay="400"
                          >
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:text-center lg:text-left mt-7 mb-4 mt-7">
                  <div
                    className="flex flex-col w-full sm:w-1/3 mb-4 px-2"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <div className="rounded-lg shadow-lg p-6 text-center mb-4">
                      <Image
                        className="w-full homepage22"
                        src={Home5}
                        alt=""
                        priority
                      />
                      <div className="text-xl font-bold mt-2">Elan Studio</div>
                      {/* Where we get obsessed with your brands' storytelling and
                      our creativity is at its peak! */}
                      <div className="flex justify-center mt-5">
                        <Link href="/ElanStudio">
                          <button
                            className="px-6 py-2 text-center text-white bg-[#0b2546] rounded-md"
                            data-aos="fade-down"
                            data-aos-delay="400"
                          >
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col w-full sm:w-1/3 mb-4 px-2"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    <div className="rounded-lg shadow-lg p-6 text-center mb-4">
                      <Image
                        className="w-full homepage22"
                        src={Home6}
                        alt=""
                        priority
                      />
                      <div className="text-xl font-bold mt-2">
                        Elan Accelera8
                      </div>
                      {/* Our unique growth affiliate system. Growth and scale are
                      integral to your company’s roadmap. */}
                      <div className="flex justify-center mt-5">
                        <Link href="/ElanAccelerate">
                          <button
                            className="px-6 py-2 text-center text-white bg-[#0b2546] rounded-md"
                            data-aos="fade-down"
                            data-aos-delay="400"
                          >
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white mt-5 text-center">
              <div className="p-6 text-3xl font-bold">
                MADE FOR EVERY BUSINESS
              </div>
              <div className="p-6 text-3xl font-bold">
                We are driven by two things... Passion and Performance.
              </div>
              <div className="space-y-3 sm:space-y-0 sm:flex sm:justify-center animate-scale-in">
                <Link href="/">
                  <button className="block mt-5 mb-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto animate-fade-in">
                    Learn more
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-[#00626F]  text-white mt-5  mb-7 text-center homepage22">
              <div className=" p-6 text-4xl font-bold ">******</div>
              <div className=" p-6 text-xl font-bold ">
                It is rare to find an agency that is both creative and
                analytical, ELAN certainly is both. We saw significant
                improvement with ELAN and we recommend working with them if you
                are seeking for a growth team
              </div>
              <div className=" p-6 text-3xl font-bold">Jonathan O.</div>
              <div className="text-xl mb-7">JRIP UK</div>
            </div>

            <div className="mt-7  ">
              <div className="">
                <div className="p-6 text-3xl font-bold text-center pr-5  homepage2">
                  Brands we’ve built awesome memories with...
                </div>
                <hr></hr>
                <p className="p-6 text-xl text-center pr-5  homepage2">
                  Over the years we have consistently helped grow various
                  businesses through our professional, creative, and marketing
                  efforts.
                </p>
              </div>
              <div className="mt-7 homepage2">
                {/* <div className="p-6 text-3xl font-bold text-center">
                  What we get up to!
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pr-5">
                  <Image
                    className="w-full homepage22"
                    src={Show1}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show2}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show3}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show4}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show5}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show6}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show7}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show8}
                    alt=""
                    priority
                  />
                  <Image
                    className="w-full homepage22"
                    src={Show9}
                    alt=""
                    priority
                  />
                </div>

                <div className="flex justify-center mt-5 ">
                  <Link href="/ourwork">
                    <button
                      className="px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto"
                      data-aos="fade-down"
                      data-aos-delay="400"
                    >
                      View Showcase
                    </button>
                  </Link>
                </div>
              </div>
              <div className="slider my-10 ">
                <div className="slideTrack">
                  <div className="slide">
                    <Image src={aerix} alt="" className="imgPartner" priority />
                  </div>
                  <div className="slide">
                    <Image src={max} alt="" className="imgPartner" priority />
                  </div>
                  <div className="slide">
                    <Image
                      src={gomarket}
                      alt=""
                      className="imgPartner"
                      priority
                    />
                  </div>
                  <div className="slide">
                    <Image src={jumia} alt="" className="imgPartner" priority />
                  </div>
                  <div className="slide">
                    <Image
                      src={microsoft}
                      alt=""
                      className="imgPartner"
                      priority
                    />
                  </div>
                  <div className="slide">
                    <Image
                      src={fazsion}
                      alt=""
                      className="imgPartner"
                      priority
                    />
                  </div>
                  <div className="slide">
                    <Image src={kobo} alt="" className="imgPartner" priority />
                  </div>
                  <div className="slide">
                    <Image
                      src={mrprice}
                      alt=""
                      className="imgPartner"
                      priority
                    />
                  </div>
                  <div className="slide">
                    <Image
                      src={playns}
                      alt=""
                      className="imgPartner"
                      priority
                    />
                  </div>
                  <div className="slide">
                    <Image src={konga} alt="" className="imgPartner" priority />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
}

export default Home;
