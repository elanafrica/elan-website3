import React, { useEffect } from "react";
import Layout from "@/components/Layout";

import ServicesHero from "../public/services.jpg";
import Home2 from "../public/egrowth.jpg";
import Home3 from "../public/edev.jpg";
import Home4 from "../public/etraining.jpg";
import Home5 from "../public/estudio.jpg";
import Home6 from "../public/eaccel8.jpg";

import Image from "next/image";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="Services">
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={ServicesHero}
          alt="home hero"
          priority
        />
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            INTELLIGENT WINS. EARLY RESULTS. LONG-TERM GROWTH.
          </h1>
          <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
            Elan Africa is your expert growth and execution partner. We are a
            team of innovators across industries and we partner with the best.
            We help many growth organizations reach their full potential.
          </p>
        </div>
      </div>

      <div className="mt-7 m-4 g-2 flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 pr-5">
          <h4 className="text-[#00C9AA] text-3xl mb-2">
            You’ve got business goals?
          </h4>
          <h2 className="text-[#00C9AA] text-2xl mb-5">
            We’ll build the roadmap.
          </h2>
          <p>
            Hyper-growth businesses need a data-driven vision. More importantly,
            they need a clear, action-packed game plan. We partner with you to
            strategize, prioritize, link up cross-channel insights, and,
            ultimately, grow.
          </p>
        </div>
        <div
          className="w-full md:w-1/2 pr-5"
          style={{ animation: "fadeIn 1s ease-in-out" }}
        >
          <div className="flex flex-col mt-7">
            <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 mb-4 text-white">
              <h4 className="text-white text-xl mb-4">Simplicity</h4>
              <p>
                Our process is simple: learn, activate, analyze, optimize,
                repeat. There’s no blueprint for growth. Over the years, we've
                built a process that allows us to start lean and quickly
                identify what works.
              </p>
            </div>
            <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 mb-4 text-white">
              <h4 className="text-white text-xl mb-4">Execution</h4>
              <p>
                Execution happens in the hands of a network of deeply
                experienced experts who continuously test, optimize, and uncover
                new opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-9">
        <div className="container">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C9AA] mb-4">
              Our Product Suite
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
                  src={Home2}
                  alt=""
                  priority
                />
                <div className="text-xl font-bold">Elan Growth</div>
                Elan Growth is your expert business strategy and execution
                partner.
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
                <div className="text-xl font-bold">Elan Dev</div>
                We would not just identify your tech needs but also implement
                them.
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
                <div className="text-xl font-bold">Elan Training</div>
                Keep your team updated with current industry trends.
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
                <div className="text-xl font-bold">Elan Studio</div>
                Where we get obsessed with your brands' storytelling and our
                creativity is at its peak!
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
                <div className="text-xl font-bold">Elan Accelera8</div>
                Our unique growth affiliate system. Growth and scale are
                integral to your company’s roadmap.
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

      <div className="mt-7  py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">Get in touch</h2>
            <p className="text-black-300">
              Ready to take your business to the next level?
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

export default Services;
