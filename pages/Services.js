import React, { useEffect } from "react";
import Layout from "@/components/Layout";

import ServicesHero from "../public/sevices.jpg";
import Home2 from "../public/elandev2.jpg";
import Home3 from "../public/elandev2.jpg";
import Home4 from "../public/elandev2.jpg";
import Home5 from "../public/elandev2.jpg";

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
      <div className="m-4">
        <div className="  ">
          <div className="bg-[rgb(7,39,78)] text-white">
            <section className="container items-center px-4 pb-12 mt-9 lg:flex md:px-40 g-5">
              <div className="flex-1 space-y-4 sm:text-center lg:text-left">
                <h1
                  className="text-4xl font-bold text-teal-400 md: flex justify-center lg:justify-start"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  INTELLIGENT WINS. EARLY RESULTS. LONG-TERM GROWTH.
                </h1>
                <p
                  className="max-w-xl leading-relaxed text-gray-300 text-2xl font-bold sm:mx-auto lg:ml-0 lg:mr-15"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Elan Africa is your expert growth and execution partner. We
                  are a team of innovators across industries and we partner with
                  the best. We help many growth organizations reach their full
                  potential.
                </p>
              </div>
              <div className="hidden h-[450px] w-[450px] md:inline lg:h-[550px] lg:w-[500px]">
                <Image
                  src={ServicesHero}
                  className="w-72 mt-6 sm:w-10/12 lg:w-full"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  alt="hero"
                  priority
                />
              </div>
            </section>
          </div>

          <div className="mt-7 g-2 flex flex-wrap items-center justify-center">
            <div className="w-1/2 pr-5">
              <h4 className="text-[] text-3xl mb-2">
                You’ve got business goals?
              </h4>
              <h2 className="text-[#00C9AA] text-2xl mb-5">
                We’ll build the roadmap.
              </h2>
              <p>
                Hyper-growth businesses need a data-driven vision. More
                importantly, they need a clear, action-packed game plan. We
                partner with you to strategize, prioritize, link up
                cross-channel insights, and, ultimately, grow.
              </p>
            </div>
            <div
              className="w-1/2 pr-5"
              style={{ animation: "fadeIn 1s ease-in-out" }}
              ata-aos="fade-down"
              data-aos-delay="400"
            >
              <div className="flex g-2 hpmepage2">
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6   mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">Simplicity</h4>
                  <p>
                    Our process is simple: learn, activate, analyze,
                    optimize,repeat. There’s no blueprint for growth. Over the
                    years, we've built a process that allows us to start lean
                    and quickly identify what works.
                  </p>
                </div>
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">Execution</h4>
                  <p>
                    Execution happens in the hands of a network of deeply
                    experienced experts who continuously test, optimize, and
                    uncover new opportunities. ​
                  </p>
                </div>
              </div>
              <div className="flex g-2 homepage2">
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6 mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">Clear Goals</h4>
                  <p>
                    Before we deploy any strategy or spend, we’ll get detailed
                    about what success looks like. Most often, we’re
                    laser-focused on revenue. ​
                  </p>
                </div>
                <div className="bg-[#0b2546] rounded-lg shadow-lg p-6  mb-4 text-white">
                  <h4 className="text-white text-xl mb-4">We Start Lean</h4>
                  <p>
                    We’re ruthless and relentless with results. Ultimately,
                    we’ll end up with the right channel mix that sets the stage
                    for true, sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 bg-star-sprinkles  text-white ">
          <div className="p-6 text-3xl font-bold text-center">
            Our Product Suite
          </div>

          <div className="mt-7 g-2 flex flex-wrap items-center justify-center">
            <Link href="/ElanGrowth">
              <Image
                className="w-32 homepage22"
                src={Home2}
                alt="home1"
                priority
              />
            </Link>
            <Link href="/ElanDev">
              <Image
                className="w-32 homepage22"
                src={Home3}
                alt="home1"
                priority
              />
            </Link>
            <Link href="/ElanTraining">
              <Image
                className="w-32 homepage22"
                src={Home4}
                alt="home1"
                priority
              />
            </Link>
            <Link href="/ElanStudio">
              <Image
                className="w-32 homepage22"
                src={Home5}
                alt="home1"
                priority
              />
            </Link>
            <Link href="/ElanAccelerate">
              <Image
                className="w-32 homepage22"
                src={Home5}
                alt="home1"
                priority
              />
            </Link>
          </div>
          <div
            className="space-y-3 sm:space-x-6 sm:space-y-0 sm:flex  md: flex justify-center mb-5"
            style={{ animation: "scaleIn 1s ease-in-out" }}
          >
            <Link href="/">
              <button
                className="block mt-5 px-6 py-2 text-center text-white bg-[#0b2546] rounded-md mx-auto mb-5"
                data-aos="fade-down"
                data-aos-delay="400"
                type="submit"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-7 g-2 flex flex-wrap items-center justify-center  ">
          <div className="w-1/2 pr-5">
            <div className="flex g-2 flex-wrap items-center justify-center">
              <div className="rounded-lg shadow-lg p-6  mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Go-To Market
                </h4>
                <p className="text-black">
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information.
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-6   mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Hyper-Growth
                </h4>
                <p>
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information. ​
                </p>
              </div>
            </div>
            <div className="flex g-2 flex-wrap items-center justify-center">
              <div className=" rounded-lg shadow-lg p-6 mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Partnerships
                </h4>
                <p>
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information. ​
                </p>
              </div>
              <div className="rounded-lg shadow-lg p-6 mb-4 ">
                <h4 className="text-[#346294] font-bold text-xl">
                  Team Building
                </h4>
                <p>
                  This is your Service description. Use this space to describe
                  what the service entails, benefits for users and any other
                  important information. ​
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 pr-5">
            <h2 className="text-red text-3xl mb-5">
              Elan Africa comes with proven experience and a network of top
              talent to help your team in varying areas.
            </h2>
          </div>
        </div>
      </div>
      <div className="m-4  mt-7 flex flex-wrap items-center justify-center">
        <div className="w-1/2 pr-5">
          <h2 className="text-2xl">
            Like what you see and not just sure how to get started?
          </h2>
          <p>Our very diverse customer success team is one mail away.</p>
        </div>
        <div className="w-1/2 pr-5">
          <form className="bg-gray-100 p-6 rounded-lg">
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

export default Services;
