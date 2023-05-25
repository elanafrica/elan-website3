import React, { useEffect } from "react";
import Layout from "@/components/Layout";

import ServicesHero from "../public/services.jpg";
import Services1 from "../public/elandev2.jpg";
import Services2 from "../public/elandev2.jpg";
import Services3 from "../public/elandev2.jpg";
import Services4 from "../public/elandev2.jpg";

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
      <div className="bg-[rgb(7,39,78)] text-white">
        <section className="container items-center px-4 pb-12 mt-9 lg:flex md:px-40 g-5">
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1
              className="text-4xl font-bold text-teal-400 md:justify-center lg:justify-start"
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
              Elan Africa is your expert growth and execution partner. We are a
              team of innovators across industries and we partner with the best.
              We help many growth organizations reach their full potential.
            </p>
          </div>
          <div className="hidden md:inline lg:h-[550px] lg:w-[500px]">
            <Image
              src={ServicesHero}
              className="w-full mt-9 sm:w-10/12 lg:w-full"
              data-aos="fade-down"
              data-aos-delay="400"
              alt="hero"
              priority
            />
          </div>
        </section>
      </div>

      <div className="mt-7 g-2 flex flex-wrap items-center justify-center">
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
          <div className="flex flex-wrap justify-center mt-4">
            <div className="homepage22 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Image
                src={Services1}
                alt="Services"
                className="rounded-lg object-cover object-center w-full h-64 mb-4"
              />
              <div className="text-xl font-semibold text-black">Product 1</div>
              <p className="text-black-300">Description for Product 1</p>
            </div>
            <div className="homepage22 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Image
                src={Services2}
                alt="Services"
                className="rounded-lg object-cover object-center w-full h-64 mb-4"
              />
              <div className="text-xl font-semibold text-black">Product 2</div>
              <p className="text-black-300">Description for Product 2</p>
            </div>
            <div className="homepage22 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Image
                src={Services3}
                alt="Services"
                className="rounded-lg object-cover object-center w-full h-64 mb-4"
              />
              <div className="text-xl font-semibold text-black">Product 3</div>
              <p className="text-black-300">Description for Product 3</p>
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
