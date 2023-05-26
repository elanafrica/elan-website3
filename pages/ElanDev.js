import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";
import Logoh from "../public/elandev3.jpg";

import Elandev1 from "../public/elandev2.jpg";
import Elandev2 from "../public/elandev2.jpg";
import Elandev3 from "../public/elandev2.jpg";
import Elandev4 from "../public/elandev2.jpg";
import Elandev5 from "../public/elandev2.jpg";
import Elandev6 from "../public/elandev2.jpg";
import Elandevcard1 from "../public/elandev2.jpg";
import Elandevcard2 from "../public/elandev2.jpg";
import Elandevcard3 from "../public/elandev2.jpg";
import Elandevcard4 from "../public/elandev2.jpg";

function ElanDev() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <Layout title="ElanDev">
      <div className="m-4">
        <div className="  ">
          <div className="relative">
            <Image className="w-full" src={Logoh} alt="Logo" priority />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="px-6 pb-6 text-3xl font-bold">
                  Where we build the right tech ecosystem that helps your
                  business scale.
                </p>
                <p>
                  We would not just identify the tech needs but also implement
                  them.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center">
            <div className="w-full sm:w-1/2 pr-5 mt-7 animate-fade-in-left">
              <h2 className="text-3xl font-bold text-center animate-fade-in">
                Choosing the right web development stack is not an easy feat.
              </h2>
              <div className="mt-9 animate-fade-in">
                <p>
                  Top companies and startups achieve their business needs by
                  working with trusted tech-stack developers to impact business
                  goals & revenue positively and augment their programming teams
                  for all tech development, web development, and other software
                  development projects.
                </p>
                <p>
                  In today's business world, it goes without saying that the
                  success and major factor for growth both internally and
                  externally rely on the deliberate and accurate use of the
                  right tools or technology.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 pr-5 animate-fade-in-right elandev2">
              <Image
                className="w-full"
                src={Elandev1}
                alt="elandev2"
                priority
              />
            </div>
          </div>

          <div className="mt-9 mb-5">
            <div className="text-center">
              <h2 className="text-[#0b2546] text-4xl mb-2 elandev2">
                Our Process
              </h2>
              <p>
                We would leverage the{" "}
                <span className="font-bold">Elan Clock Model</span> to identify
                your business's tech needs as a way of providing solutions to
                developing a proper tech stack that would take care of your
                business needs and help it scale. Free growth consultancy for
                African businesses.
              </p>
            </div>
            <div className="m-4 mt-9 grid grid-cols-1 sm:grid-cols-2 gap-6 text-white mb-5">
              <div className="rounded-lg bg-[#47817F] border border-gray-300 p-6">
                <div className="flex items-center justify-center mb-5">
                  <p className="font-bold text-lg rounded-full bg-[#0b2546] w-10 h-10 flex items-center justify-center text-center">
                    1
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold">DEFINE</p>
                  <p className="font-bold">
                    Kick off development by defining all system requirements,
                    making initial technology decisions, and capturing user
                    roles and personas.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-[#47817F] border border-gray-300 p-6">
                <div className="flex items-center justify-center mb-5">
                  <p className="font-bold text-lg rounded-full bg-[#0b2546] w-10 h-10 flex items-center justify-center text-center">
                    2
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold">DESIGN</p>
                  <p className="font-bold">
                    Determine your product's initial look and feel, model the
                    user experience and journey, prioritize features, and plan
                    for the release.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-[#47817F] border border-gray-300 p-6">
                <div className="flex items-center justify-center mb-5">
                  <p className="font-bold text-lg rounded-full bg-[#0b2546] w-10 h-10 flex items-center justify-center text-center">
                    3
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold">DELIVER</p>
                  <p className="font-bold">
                    Move forward with detailed, development-ready specs, time
                    and cost estimates, a launch plan, and a team of experts
                    ready to execute your plan.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-[#47817F] border border-gray-300 p-6">
                <div className="flex items-center justify-center mb-5">
                  <p className="font-bold text-lg rounded-full bg-[#0b2546] w-10 h-10 flex items-center justify-center text-center">
                    4
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold">DEVELOP</p>
                  <p className="font-bold">
                    Throughout the product development phase, track quality
                    assurance, DevOps, and deployment updates using your
                    preferred project management tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 text-center mb-9">
          <h2 className="text-4xl font-bold mb-5 text-[#82A0AA]">
            Our Industry-Specific Full-Stack Development Services
          </h2>
          <p className="text-xl mb-5">
            Hire ElanDev for your full-stack development services, we conduct a
            thorough assessment of all factors to ensure the delivery of
            high-quality web development, along with testing applications and
            products.{" "}
          </p>
        </div>

        <div className="mt-9 bg-[#EEEDFF]">
          <div className="mt-7 mb-5">
            <h4 className="text-2xl font-bold text-center mt-7 mb-5">
              It all starts with your UI/UX design!
            </h4>
            <p className="text-xl mt-7 mb-3">
              Taking you on a journey of future possibilities.
            </p>
            <p className="mb-3">
              Here we show you what we propose your new web identity should be.
            </p>
            <p className="mb-3">
              The days of building without design are long gone. We aim to show
              you how your tech stack can gain increased user experience and
              conversions.
            </p>
            <p className="mb-5">
              Every company's need is unique and we design from scratch ensuring
              your speed is commensurate with expected business outcomes.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">
                Tech Stack Development
              </p>
            </div>
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">
                E-Commerce Development
              </p>
            </div>
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">Web Design</p>
            </div>
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">
                Mobile App Development
              </p>
            </div>
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">
                Software Development
              </p>
            </div>
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">UI/UX</p>
            </div>
            <div className="bg-[#000000] rounded-lg p-4">
              <p className="text-white font-medium text-sm">Testing Services</p>
            </div>
          </div>
          <div className="mt-9 mb-5">
            <Image
              className="w-full homepage22"
              src={Elandev2}
              alt="elandev2"
              priority
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between text-white mt-9">
          <div className="bg-[#47817F] rounded-lg p-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0">
            <p className="text-xl font-bold mb-5">Agile Development</p>
            <p className="">
              Work with Scrum teams using agile methodologies to bring
              transparency and flexibility to product development. ElanDev can
              help your company easily build a new Scrum team or bring
              additional talent to an existing one.
            </p>
          </div>
          <div className="bg-[#47817F] rounded-lg p-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0">
            <p className="text-xl font-bold mb-5">Tailored Web Development</p>
            <p className="">
              Having an intuitive and responsive website is the difference
              between hitting goals and losing engagement. Top developers allow
              you to effectively improve your performance and scalability by
              building additional functionalities, integrating APIs, and
              increasing engagement on site.
            </p>
          </div>
          <div className="bg-[#47817F] rounded-lg p-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <p className="text-xl font-bold mb-5">Customized Solutions</p>
            <p className="">
              From requirements review to development, ElanDev’s full-stack
              experts ensure your team will employ the latest technologies in
              Javascript frameworks (e.g. React.js, Ember.js, Node.js,
              Backbone.js), mean stack, and database technologies such as MySQL,
              NoSQL, PostgreSQL, and MongoDB.
            </p>
          </div>
        </div>

        <div className="mt-9 mb-5">
          <h4 className="text-2xl font-bold mb-7 text-center">
            Expertly Matched Talent
          </h4>
          <p>
            We build teams with top software developers, designers, and product
            managers from our global talent network, customized to fit your
            business needs and business processes. Each person is selected for
            subject matter expertise and their years of experience working in
            managed teams.
          </p>
          <div className="mt-9 flex justify-center flex-wrap gap-4">
            <Image
              className="w-72"
              src={Elandevcard1}
              alt="elandevcard1"
              priority
            />
            <Image
              className="w-72"
              src={Elandevcard2}
              alt="elandevcard2"
              priority
            />
            <Image
              className="w-72"
              src={Elandevcard3}
              alt="elandevcard3"
              priority
            />
            <Image
              className="w-72"
              src={Elandevcard4}
              alt="elandevcard4"
              priority
            />
          </div>
        </div>

        <div className="mt-9 text-center">
          <h2
            className="text-4xl font-bold"
            data-aos="fade-down"
            data-aos-delay="400"
            style={{ animation: "scaleIn 1s ease-in-out" }}
          >
            Some Case Studies
          </h2>
        </div>

        <div className="flex flex-col mt-9 elandev4 sm:flex-row">
          <div className="mt-7 w-full pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-left sm:w-1/2">
            <Image className="w-full" src={Elandev3} alt="elandev3" priority />
          </div>
          <div className="w-full pr-5 animate-fade-in-right sm:w-1/2">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              <span className="animate-flicker">Aerix Group</span>
            </h2>
            <div>
              <p className="mb-4">
                We build teams with top software developers, designers, and
                product managers from our global talent network, customized to
                fit your business needs and processes. Each person is selected
                for their subject matter expertise and years of experience
                working in managed teams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-9 elandev4 sm:flex-row">
          <div className="w-full pr-5 animate-fade-in-right sm:w-1/2">
            <h2 className="animate-flicker text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Ruff 'N' Tumble
            </h2>
            <div>
              <p className="mb-4">
                We build teams with top software developers, designers, and
                product managers from our global talent network, customized to
                fit your business needs and business processes. Each person is
                selected for subject matter expertise and their years of
                experience working in managed teams.
              </p>
            </div>
          </div>
          <div className="mt-7 w-full pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-1/2">
            <Image className="w-full" src={Elandev4} alt="elandev4" priority />
          </div>
        </div>

        <div className="flex flex-col mt-9 elandev4 sm:flex-row">
          <div className="animate-fade-in-right w-full pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-1/2">
            <Image className="w-full" src={Elandev5} alt="elandev5" priority />
          </div>
          <div className="w-full pr-5 sm:w-1/2">
            <h2 className="animate-flicker text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Xirea Apparel
            </h2>
            <div>
              <p className="mb-4">
                We build teams with top software developers, designers, and
                product managers from our global talent network, customized to
                fit your business needs and business processes. Each person is
                selected for subject matter expertise and their years of
                experience working in managed teams.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-9 elandev4 sm:flex-row">
          <div className="w-full pr-5 sm:w-1/2">
            <h2 className="animate-flicker text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Financial Planning with Kalu Aja
            </h2>
            <div>
              <p className="mb-4">
                We build teams with top software developers, designers, and
                product managers from our global talent network, customized to
                fit your business needs and business processes. Each person is
                selected for subject matter expertise and their years of
                experience working in managed teams.
              </p>
            </div>
          </div>
          <div className="animate-fade-in-right w-full pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:w-1/2">
            <Image className="w-full" src={Elandev6} alt="elandev6" priority />
          </div>
        </div>
      </div>

      <div className="mt-7  py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              Do you want to understand your tech needs or build great products?
            </h2>
            <p className="text-black-300">Schedule a Consultation.</p>
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

export default ElanDev;
