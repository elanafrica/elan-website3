import React, { useEffect } from "react";
import Layout from "@/components/Layout";

import Aos from "aos";
import "aos/dist/aos.css";

import Logoh from "../public/elanaccehero.jpg";
import ElanAcce1 from "../public/startups.jpg";
import ElanAcce2 from "../public/techvisionaries.jpg";
import ElanAcce3 from "../public/smes.jpg";
import ElanAcceimg from "../public/howthisworks.jpg";

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
          <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
            <Image
              className="absolute w-full h-full object-cover mix-blend-overlay"
              src={Logoh}
              alt="accelerate hero"
              priority
            />
            <div className="p-6 md:p-24 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                We are launching a new kind of growth affiliate system.
              </h1>
              <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
                One that makes growth and scale integral to your company’s
                roadmap
              </p>
              <div className="flex justify-center mt-7">
                <Link href="/ContactUs">
                  <button
                    className="px-6 mt-10 py-2 text-center hover:text-white hover:bg-[#0b2546] bg-white rounded-md mx-auto"
                    data-aos="fade-down"
                    data-aos-delay="400"
                  >
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="text-center">
              <h2 className="text-[#0b2546] font-bold text-4xl mb-2">
                Who Can Take Part?
              </h2>
            </div>
            <div className="m-4 mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="rounded-lg shadow-lg p-6 mb-4">
                  <Image
                    className="w-72 mx-auto"
                    src={ElanAcce1}
                    alt="Logo"
                    priority
                  />
                  <h4 className="text-xl font-bold">STARTUPS</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="rounded-lg shadow-lg p-6 mb-4">
                  <Image
                    className="w-72 mx-auto"
                    src={ElanAcce2}
                    alt="Logo"
                    priority
                  />
                  <h4 className="text-xl font-bold">TECH VISIONARIES</h4>
                </div>
              </div>
              <div className="text-center">
                <div className="rounded-lg shadow-lg p-6 mb-4">
                  <Image
                    className="w-72 mx-auto"
                    src={ElanAcce3}
                    alt="Logo"
                    priority
                  />
                  <h4 className="text-xl font-bold">SME's</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <div className="pr-5 mt-7 bg-[#151414] p-4 text-white">
            <h2 className="text-3xl font-bold text-center mb-7">
              <div className="">
                <p
                  className="text-3xl font-bold inline-block"
                  style={{ writingMode: "horizontal" }}
                >
                  How This Works
                </p>
              </div>
            </h2>
            <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="pr-5">
                <Image
                  className="w-full"
                  src={ElanAcceimg}
                  alt="elanacce"
                  priority
                />
              </div>
              <div className="pr-5">
                <div>
                  <p className="font-bold text-xl mb-4">STEP 1</p>
                  <p>
                    Once we are a fit, we get straight to work. We build out
                    growth pipelines.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl mt-4 mb-4">STEP 2</p>
                  <p>
                    Commence full-scale business analysis. We assess your needs
                    and match you up with relevant resources including tech,
                    sales, marketing, and capital.
                    {/* Full-scale business analysis. Assess applicants and match
                    them up with relevant tech, sales, marketing, and capital. */}
                  </p>
                </div>
                <div>
                  <p className="font-bold text-xl mt-4 mb-4">STEP 3</p>
                  <p>
                    We create, fix and implement integrations, designs, and
                    marketing.
                    {/* Brands Fed Through Funnel. Launch pilots between consumer
                    brands & technology. */}
                  </p>
                  <p>Fix integrations, design, and marketing</p>
                </div>
                <div>
                  <p className="font-bold text-xl mt-4 mb-4">STEP 4</p>
                  <p>
                    We ensure happy, innovative companies with happy customers
                    and accelerated, sustainable growth.
                    {/* Happy, innovative companies with happy customers and
                    accelerated, sustainable growth. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-9">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div>
                <p className="text-xl font-bold">Go-To Market</p>
                <p>
                  Our Go-to-market strategies help anticipate the challenges of
                  your product's competitive space. We identify the target
                  market, articulate the product’s value proposition, craft a
                  marketing plan, and develop a strategy for your product's
                  sales and distribution channels.
                  {/* Our Go-to-market strategies help anticipate the challenges of
                  your product's competitive space by thoroughly identifying the
                  target market, articulating the product’s value proposition,
                  crafting a marketing plan, and developing a strategy for your
                  product's sales and distribution channels. */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div>
                <p className="text-xl font-bold">HyperGrowth</p>
                <p>
                  Our strategies are structured to drive business growth. We
                  review growth pipelines and implement strategies to grow your
                  business.
                  {/* This is your Service description. Use this space to describe
                  what the service entails, its benefits for users, and any
                  other important information. */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div>
                <p className="text-xl font-bold">Team Building</p>
                <p>
                  Our exclusive training programs are tailored to fit your
                  team's needs and culture. Enjoy the robust curriculum with
                  current industry insights provided by seasoned professionals
                  across various disciplines. If you haven’t considered
                  integrating team-building activities into your workplace
                  grind, now is your chance.
                  {/* We would help you create and organize a simple method of
                  connecting your employees and colleagues with the mission of
                  your organization and with each other, a fun, simple way to
                  share ideas, and engage with one another. If you haven’t
                  considered integrating team-building activities into your
                  workplace grind, now is your chance. */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div>
                <p className="text-xl font-bold">Partnerships</p>
                <p>
                  At Elan, we are open to collaborations. We believe
                  collaborations can increase brand awareness, generate website
                  and social media traffic, grow your number of conversions, and
                  aid customer acquisition and retention.
                  {/* At ELAN we are open to collaborations. This can increase brand
                  awareness, generate more website and social media traffic,
                  grow your number of conversions, and aid customer acquisition
                  and retention. */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div>
                <p className="text-xl font-bold">Product Development</p>
                <p>
                  Your idea could be the next game-changer. We leverage our
                  trusted product development strategies to bring your concepts
                  to products. Our strategies are tailored to fit your industry
                  and growing market demand for the product. We follow the
                  concept's lifecycle from plans, product creation, release, and
                  review.
                  {/* We would take your idea from concept to delivery. This would
                  involve brainstorming the initial concept to strategically
                  planning, building, and releasing your product to the market
                  and then measuring its success. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7  py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              Let's bring your business dreams to life!
            </h2>
            <p className="text-black-300">
              Book a time for your free 30-minute growth consultation call.
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

export default ElanAccelerate;
