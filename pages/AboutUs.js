import React from "react";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import aboutHero from "../public/whatweare.jpg";
import about1 from "../public/ourbusiness.jpg";
import founder1 from "../public/assets/afam.jpg";
import founder2 from "../public/assets/kelechi.jpg";
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

import { DiUnitySmall } from "react-icons/di";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillCartCheckFill, BsFillPeopleFill, BsSteam } from "react-icons/bs";
import { FaAccessibleIcon, FaTripadvisor } from "react-icons/fa";
import { TiBusinessCard } from "react-icons/ti";
import { GrBusinessService } from "react-icons/gr";

import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <Layout title="AboutUs">
      <div>
        <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={aboutHero}
            alt="home hero"
            priority
          />
          <div className="p-6 md:p-24 text-center">
            <h1 className="text-3xl text-4xl font-bold text-[#0b2546] md:text-4xl lg:text-5xl  font-bold">
              What we are
            </h1>
            <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
              Elan Africa is a hybrid agency & consultancy. We are made up of a
              team of experts vast in the areas of growth strategy, sales,
              marketing, tech development, and multimedia production. We build a
              team tailored to your goals at the right budget and offer
              strategic insights to scale your business.
              {/* Your business is unique, likewise your growth, technology and your
              brand communication. You are in the right place for your business
              ecosystem reflection .. */}
            </p>
            {/* <div className="flex justify-center mt-7">
              <Link href="/ContactUs">
                <button
                  className="px-6 mt-10 py-2 text-center text-white  bg-[#0b2546] hover:text-[#0b2546] hover:bg-white rounded-md mx-auto"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Learn More
                </button>
              </Link>
            </div> */}
          </div>
        </div>

        <div className="container items-center px-4 pb-12 mt-20 lg:flex md:px-40">
          <div className="hidden h-[450px] w-[450px] md:inline lg:h-[550px] lg:w-[500px]">
            <Image
              src={about1}
              className="w-full mt-12 sm:w-10/12 lg:w-25"
              data-aos="fade-down"
              data-aos-delay="400"
              alt="our business image"
              priority
            />
          </div>
          <div className="flex-1 space-y-4 sm:text-center lg:text-left mt-0">
            <h1
              className="text-4xl font-bold text-[rgb(7,39,78)]  md: flex justify-center lg:justify-start ml-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Our Business
            </h1>
            <p
              className="leading-relaxed text-black-300 text-1xl sm:mx-auto lg:ml-0"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Our approach is lean and streamlined and is a delight for your
              budget. We build growth and marketing systems for long-term
              success while maximizing revenue potential.
              {/* Elan Africa is a hybrid agency & consultancy. We are made up of a
              team of experts vast in the areas of growth strategy, sales,
              marketing, tech development, and multimedia production. We support
              your execution and offer strategic 'experienced' insight to scale
              your business. We work on a monthly retainer or specific projects.
              We build a team tailored to your goals at the right budget. Our
              approach is lean and streamlined and should be a . */}
            </p>
          </div>
        </div>

        <div className="text-center lg:mb-20 lg:mt-20 sm:mb-20 md:mb-20">
          <h1
            className="text-[rgb(7,39,78)] font-bold text-2xl"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            WE ARE ON A MISSION
          </h1>
          <p data-aos="fade-down" data-aos-delay="400">
            We work with companies of every size, growth stage, and business
            model.
          </p>
          <p data-aos="fade-down" data-aos-delay="400">
            Tell us where you are, and we’ll meet you there.
          </p>
        </div>
        <div>
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-2">
            <div className="col-span-1 w-full h-full">
              <div className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-2 md:pl-4">
                <h1
                  className="text-white text-xl font-medium py-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  1. Brand & Product Validation
                </h1>
                <p
                  className="text-gray-100 sm:text-sm text-xs"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Our team will identify the winning strategy and mix for your
                  product launch or brand validation.
                </p>
              </div>
            </div>

            <div className="col-span-1 w-full h-full">
              <div className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-2 md:pl-4">
                <h1
                  className="text-white text-xl font-medium py-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  2. Growth Acceleration
                </h1>
                <p
                  className="text-gray-100 sm:text-sm text-xs"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  From beating the competition to helping your business achieve
                  its growth KPIs. We've got you covered.
                </p>
              </div>
            </div>

            <div className="col-span-1 w-full h-full">
              <div className="w-full h-full bg-[rgb(7,39,78)] rounded-md p-2 md:pl-4">
                <h1
                  className="text-white text-xl font-medium py-2"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  3. Market Expansion
                </h1>
                <p
                  className="text-gray-100 sm:text-sm text-xs"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Expanding into a new market, business model, or growth
                  territory? We've got your back.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <DiUnitySmall />
              </span>
              <h1 className="text-xl font-bold mb-3">STARTUP</h1>
              <p>
                Conducting thorough market research, identifying a unique value
                proposition, and developing a solid business plan.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BiCodeAlt />
              </span>
              <h1 className="text-xl font-bold mb-3">TECH</h1>
              <p>
                Leveraging technological advancements to streamline operations,
                enhance productivity and unlock more growth opportunities.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <TiBusinessCard />
              </span>
              <h1 className="text-xl font-bold mb-3">SMEs</h1>
              <p>
                Facilitating access to markets and networks and implementing
                business development strategies.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BsFillCartCheckFill />
              </span>
              <h1 className="text-xl font-bold mb-3">E-COMMERCE</h1>
              <p>
                Harnessing the power of e-commerce to unlock exponential
                business growth, expanding reach, and driving sales across
                borders.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <FaAccessibleIcon />
              </span>
              <h1 className="text-xl font-bold mb-3">B2B</h1>
              <p>
                Attracting leads and automating the appointment booking process.
                Improve customer success and engagement.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <GrBusinessService />
              </span>
              <h1 className="text-xl font-bold mb-3">SALES</h1>
              <p>
                Ensuring maximum customer engagement & retention. Generate
                leads, and automate the sales process.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BsFillPeopleFill />
              </span>
              <h1 className="text-xl font-bold mb-3">STAFFING</h1>
              <p>
                Attracting and retaining top talents, ensuring a skilled
                workforce that delivers exceptional results, drives innovation,
                and propels business growth.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <BsSteam />
              </span>
              <h1 className="text-xl font-bold mb-3">PARTNERSHIP</h1>
              <p>
                Collaborating with like-minded organizations, aligning goals to
                create win-win opportunities that propel businesses to new
                heights and unlock untapped potentials.
              </p>
            </div>
            <div
              className="shadow-md p-6 rounded-md bg-slate-100"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <span className="border rounded-full inline-block p-4 border-slate-800 text-3xl mb-3">
                <FaTripadvisor />
              </span>
              <h1 className="text-xl font-bold mb-3">CONSULTANCY</h1>
              <p>
                Providing guidance, insights, and tailored solutions to optimize
                operations, overcome challenges and maximize profitability.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 bg-[rgb(7,39,78)] lg:h-full md:h-full text-white">
          <div className="text-center">
            <h2
              className="text-3xl text-center font-bold mx-auto py-10"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Experienced Leadership.
            </h2>
            <p>
              Our leadership comprises decades of experience in sales, growth,
              marketing, and technology.
            </p>
            <p>
              They have an extensive network of top professionals that can bring
              critical value to your project.
            </p>
            <p>
              We believe in building partnerships that create exceptional value
              for brands across Africa.
            </p>
          </div>

          <div className="flex flex-wrap p-2">
            <h3
              className="text-2xl font-bold mx-auto text-white py-10"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Meet Our Founders
            </h3>
          </div>
          <hr />
          <div className="flex flex-wrap justify-center mt-3">
            <div className="w-full mx-auto md:w-1/2 justify-center  py-10">
              <div className=" mx-auto bg-[rgb(7,39,78)]  rounded-full w-40 h-40 ">
                <Image
                  src={founder1}
                  alt="founder"
                  className="rounded-full "
                  data-aos="fade-down"
                  data-aos-delay="400"
                  priority
                />
                <h3
                  className="font-bold text-xl  mt-5 text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  AFAM ANYIKA
                </h3>
                {/* <p
                  className="m-2  text-xl text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Co-Founder
                </p> */}
              </div>
              <div className="ml-4 mt-7">
                <p>
                  Afam Anyika is an expert in marketing, communications,
                  branding, and growth. With over 14 years of experience, he has
                  held senior management positions in startups and technology
                  sectors across Africa. His expertise spans public relations,
                  communications, marketing, media, and various industries,
                  including entertainment, construction, eCommerce, retail,
                  telecommunications, and health tech.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 mx-auto justify-center py-10">
              <div className="mx-auto bg-[rgb(7,39,78)] p-0.5 rounded-full w-40 h-40 ">
                <Image
                  src={founder2}
                  alt="founder"
                  className="rounded-full "
                  data-aos="fade-down"
                  data-aos-delay="400"
                  priority
                />
                <h3
                  className="font-bold text-xl  mt-5 text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  KELECHI ONWUMERE
                </h3>
                {/* <p
                  className="m-2  text-xl text-white"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Co-Founder
                </p> */}
              </div>
              <div className="ml-4 mt-7">
                <p>
                  Kelechi Onwumere is a data-driven and creative Project and
                  Business manager with over 20 years of experience and 10 years
                  of management experience. He has advanced experience building
                  and strengthening teams of professionals to provide unique
                  campaigns that reach target audiences and engages users. He
                  has worked numerous organisations including May&Bakers,
                  Honeywell group, inlaks, konga.com, jumia.com.ng,  yudala.com,
                  and Genesis group. Kelechi is a strong and adaptable manager
                  always looking to bring his leadership skills to new teams of
                  driven professionals.Holds a BSc in Biochemistry from the
                  University of Calabar and an MBA from ESUT Business School
                  Enugu.Has 18 different professional international
                  certifications across project management, business analysis,
                  design thinking, Six sigma, Sales, Marketing, and Information
                  Security Management.Has a Black belt in Taekwondo from
                  Kukkiwon. He reads in his spare time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="slider my-10">
          <div className="slideTrack">
            <div className="slide">
              <Image src={aerix} className="imgPartner" alt="aerix" priority />
            </div>
            <div className="slide">
              <Image src={max} className="imgPartner" alt="max" priority />
            </div>
            <div className="slide">
              <Image
                src={gomarket}
                className="imgPartner"
                alt="gomarket"
                priority
              />
            </div>
            <div className="slide">
              <Image src={jumia} className="imgPartner" alt="jumia" priority />
            </div>
            <div className="slide">
              <Image
                src={microsoft}
                className="imgPartner"
                alt="microsoft"
                priority
              />
            </div>
            <div className="slide">
              <Image
                src={fazsion}
                className="imgPartner"
                alt="fazsion"
                priority
              />
            </div>
            <div className="slide">
              <Image src={kobo} className="imgPartner" alt="kobo" priority />
            </div>
            <div className="slide">
              <Image
                src={mrprice}
                className="imgPartner"
                alt="mrprice"
                priority
              />
            </div>
            <div className="slide">
              <Image
                src={playns}
                className="imgPartner"
                alt="playns"
                priority
              />
            </div>
            <div className="slide">
              <Image src={konga} className="imgPartner" alt="konga" priority />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
