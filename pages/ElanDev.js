import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import Aos from "aos";
import "aos/dist/aos.css";
import Logoh from "../public/elandev3.jpg";

import Elandev1 from "../public/elandev2.jpg";
// import Elandev2 from "../public/elandev2.jpg";
import Elandev3 from "../public/assets/elandev3.png";
import Elandev4 from "../public/assets/elandev4.png";
import Elandev5 from "../public/assets/elandev5.png";
import Elandev6 from "../public/assets/elandev6.png";

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
          <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
            <Image
              className="absolute w-full h-full object-cover mix-blend-overlay"
              src={Logoh}
              alt="Dev hero"
              priority
            />
            <div className="p-6 md:p-24 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                Where we build the right tech ecosystem that helps your business
                scale.
              </h1>
              <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
                We not only identify the tech needs but also implement them.
                {/* We would not just identify the tech needs but also implement
                them. */}
              </p>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center justify-center">
            <div className="w-full sm:w-1/2 pr-5 mt-7 animate-fade-in-left">
              <h2 className="text-3xl font-bold text-center animate-fade-in">
                Choosing the right web development stack is not an easy feat.
              </h2>
              <div className="mt-9 animate-fade-in">
                <p>
                  Top companies and startups achieve their business goals by
                  working with trusted tech-stack developers. Moreso, in today's
                  business world, internal and external success and growth rely
                  on the accurate use of the right tools or technology.
                  {/* Top companies and startups achieve their business needs by
                  working with trusted tech-stack developers to impact business
                  goals & revenue positively and augment their programming teams
                  for all tech development, web development, and other software
                  development projects. */}
                </p>
                <p>
                  Every company's need is unique and we design from scratch
                  ensuring your speed is commensurate with expected business
                  outcomes.
                  {/* In today's business world, it goes without saying that the
                  success and major factor for growth both internally and
                  externally rely on the deliberate and accurate use of the
                  right tools or technology. */}
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
              <h2 className="text-[#0b2546] text-4xl mb-2 ">Our Process</h2>
              <p>
                We would leverage the{" "}
                <span className="font-bold">Elan Clock Model</span> to identify
                your business's tech needs. We provide your tech solutions by
                developing a full tech stack to help your business scale.
                {/* to identify
                your business's tech needs as a way of providing solutions to
                developing a proper tech stack that would take care of your
                business needs and help it scale. Free growth consultancy for
                African businesses. */}
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
                    Kick-off development by defining all system requirements,
                    identifying business needs, and capturing user personas.
                    {/* Kick off development by defining all system requirements,
                    making initial technology decisions, and capturing user
                    roles and personas. */}
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
                    Determine your product's look and feel, model the user
                    experience and journey, and prioritize features.
                    {/* Determine your product's initial look and feel, model the
                    user experience and journey, prioritize features, and plan
                    for the release. */}
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
                    assurance, DevOps, and updates using your preferred project
                    management tool.
                    {/* Throughout the product development phase, track quality
                    assurance, DevOps, and deployment updates using your
                    preferred project management tool. */}
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
            Hire ElanDev for your full-stack development services. We conduct a
            thorough assessment to ensure the delivery of high-quality web
            development, along with testing applications and products.
            {/* Hire ElanDev for your full-stack development services, we conduct a
            thorough assessment of all factors to ensure the delivery of
            high-quality web development, along with testing applications and
            products.{" "} */}
          </p>
        </div>

        <div className="mt-9 bg-[#EEEDFF]">
          {/* <div className="mt-7 mb-5">
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
          </div> */}
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
          {/* <div className="mt-9 mb-5">
            <Image
              className="w-full homepage22"
              src={Elandev2}
              alt="elandev2"
              priority
            />
          </div> */}
        </div>

        <div className="flex flex-wrap justify-between text-white mt-9">
          <div className="bg-[#47817F] rounded-lg p-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0">
            <p className="text-xl font-bold mb-5">Agile Development</p>
            <p className="">
              Leverage agile methodologies to bring transparency and flexibility
              to your product development. We help build Scrum teams or add
              talents to an existing one to drive success.
              {/* Work with Scrum teams using agile methodologies to bring
              transparency and flexibility to product development. ElanDev can
              help your company easily build a new Scrum team or bring
              additional talent to an existing one. */}
            </p>
          </div>
          <div className="bg-[#47817F] rounded-lg p-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 sm:mb-0">
            <p className="text-xl font-bold mb-5">Tailored Web Development</p>
            <p className="">
              Create an intuitive and responsive website to improve your
              scalability.
              {/* Having an intuitive and responsive website is the difference
              between hitting goals and losing engagement. Top developers allow
              you to effectively improve your performance and scalability by
              building additional functionalities, integrating APIs, and
              increasing engagement on site. */}
            </p>
            <p className="">
              We provide access to top developers to build additional
              functionalities, integrate APIs, and provide technical support on
              your site.
              {/* Having an intuitive and responsive website is the difference
              between hitting goals and losing engagement. Top developers allow
              you to effectively improve your performance and scalability by
              building additional functionalities, integrating APIs, and
              increasing engagement on site. */}
            </p>
          </div>
          <div className="bg-[#47817F] rounded-lg p-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
            <p className="text-xl font-bold mb-5">Customized Solutions</p>
            <p className="">
              Enjoy tech services tailored to suit your needs from requirements
              review to development.
              {/* From requirements review to development, ElanDev’s full-stack
              experts ensure your team will employ the latest technologies in
              Javascript frameworks (e.g. React.js, Ember.js, Node.js,
              Backbone.js), mean stack, and database technologies such as MySQL,
              NoSQL, PostgreSQL, and MongoDB. */}
            </p>
            <p className="">
              Our full-stack experts employ the latest technologies in
              Javascript frameworks, and database technologies to provide
              customized solutions.
            </p>
          </div>
        </div>

        <div className="mt-9 mb-5">
          <h4 className="text-2xl font-bold mb-7 text-center">
            Expertly Matched Talent
          </h4>
          <p className="mt-2 mb-2 text-center">
            Hire the best subject matter talents suited to your team's needs,
            and values.{" "}
          </p>
          <p className="mt-2 mb-2 text-center">
            We build teams with top software developers, and product managers
            from our global talent network, customized to fit your business
            needs and business processes.
            {/* We build teams with top software developers, designers, and product
            managers from our global talent network, customized to fit your
            business needs and business processes. Each person is selected for
            subject matter expertise and their years of experience working in
            managed teams. */}
          </p>
          {/* <div className="mt-9 flex justify-center flex-wrap gap-4">
            <div className="card bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/4">
              <h4 className="text-lg font-bold">Developers</h4>
              <p className="mt-2">
                Senior software engineers, coders, and architects with expertise
                across hundreds of technologies.
              </p>
            </div>
            <div className="card bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/4">
              <h4 className="text-lg font-bold">Designers</h4>
              <p className="mt-2">
                Expert UI, UX, Visual, and Interaction designers as well as a
                wide range of illustrators, animators, and more.
              </p>
            </div>
            <div className="card bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/4">
              <h4 className="text-lg font-bold">Project Managers</h4>
              <p className="mt-2">
                Digital and technical project managers, scrum masters, and more
                with expertise in numerous PM tools, frameworks, and styles.
              </p>
            </div>
            <div className="card bg-white shadow-md rounded-lg p-4 w-full md:w-1/2 lg:w-1/4">
              <h4 className="text-lg font-bold">Product Managers</h4>
              <p className="mt-2">
                Digital product managers and scrum product owners with expertise
                in numerous industries like banking, healthcare, ecommerce, and
                more.
              </p>
            </div>
          </div> */}
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
