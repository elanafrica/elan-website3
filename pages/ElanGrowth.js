import React, { useEffect } from "react";
import Layout from "@/components/Layout";

import Logoh from "../public/assets/growthhero.jpg";

import Elangrowth2 from "../public/assets/ourgrowthservices.jpg";
import Elangrowth3 from "../public/growth.jpg";
import Elangrowth4 from "../public/assets/growthmarketingagency.jpg";
import Elangrowth5 from "../public/productdevelopment.jpg";
import Elangrowth6 from "../public/brand.jpg";
import Elangrowth7 from "../public/ecommerceagency.jpg";
import Elangrowth8 from "../public/ondemandcmo.jpg";
// import Elangrowth9 from "../public/marketingprojects.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Link from "next/link";

function ElanGrowth() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <Layout title="ElanGrowth">
      <div className="m-4">
        <div className="  ">
          <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
            <Image
              className="absolute w-full h-full object-cover mix-blend-overlay"
              src={Logoh}
              alt="growth hero"
              priority
            />
            <div className="p-6 md:p-24 text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
                We boast of a vast network of top talent across various
                specializations.
              </h1>
              <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
                Elan Growth is your expert business strategy and execution
                partner.
              </p>
            </div>
          </div>

          <div className="mt-7">
            <div className="text-center">
              <h2 className="text-[#0b2546] font-bold text-4xl mb-2">
                We Go Above and Beyond
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full sm:w-1/2 lg:w-1/4 pr-5 mb-4">
                <div className="rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold">Ditch the to-do list!</h4>
                  <p>
                    We analyze where your business is right now and where you
                    want to be and then engineer your unique growth system.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 pr-5 mb-4">
                <div className="rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold">
                    Effective Testing Methodology
                  </h4>
                  <p>
                    We approach campaign management like scientists. We're
                    constantly testing, probing, experimenting, and seeking
                    iterative improvements.
                    {/* We approach campaign management like scientists. We're
                    constantly hypothesizing, experimenting, and seeking
                    iterative improvements. */}
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 pr-5 mb-4">
                <div className="rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold">Network of top talent.</h4>
                  <p>
                    We source and hire from our network of subject matter
                    experts to successfully implement your strategies. This is
                    why at its core, we have built a network of top talent
                    across varying disciplines and industries.
                    {/* Every strategy and its successful implementation relies on
                    the right expertise. It's why at its core, we have built a
                    network of top talent across varying disciplines and
                    industries. */}
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 pr-5 mb-4">
                <div className="rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold">
                    Fully transparent and responsive
                  </h4>
                  <p>
                    We stay autonomous or fully collaborative, becoming an
                    always-on extension of your team. And, bottom line: we are
                    always available and transparent.
                    {/* Built to be highly autonomous or fully collaborative,
                    becoming an always-on extension of your team. And, bottom
                    line: we’re laser-focused on revenue. */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-9 m-4 flex flex-wrap items-center justify-center"
            style={{ animation: "fadeIn 1s ease-in-out" }}
          >
            <div
              className="w-full sm:w-1/2 pr-5 mt-7"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <h2 className="text-3xl font-bold text-center">
                Elan Growth....Our Services
              </h2>
              <div className="mt-9">
                <p>
                  Every business need and strategy is 'unique'. Our growth
                  services are customized to solve your business needs.
                  {/* Every business need and strategy is 'unique'. With our growth
                  services, the days of the one size fits all approach is a
                  thing of the past. */}
                </p>
                {/* <p>
                  We’ve got you covered with a wide range of experiences and
                  knowledge, leveraging our team of experts and network of
                  hands-on experience.
                </p>
                <p>
                  If your growth expectations are yet to be set in motion, you
                  may want to ta speak with our team.
                </p> */}
              </div>
            </div>
            <div className="w-full sm:w-1/2 pr-5">
              <Image
                className="w-2/3 homepage22"
                src={Elangrowth2}
                alt="elangrowth2"
                priority
              />
            </div>
          </div>

          <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
            <div className="w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Image
                className="w-2/3 homepage22"
                src={Elangrowth3}
                alt="elangrowth3"
                priority
              />
            </div>
            <div
              className="w-full sm:w-1/2 pr-5"
              style={{ animation: "fadeIn 1s ease-in-out" }}
            >
              <h2 className="mt-7 text-3xl font-bold text-gray-800 mb-4">
                Business Growth Consultancy.
              </h2>
              <div>
                <p className="mb-4">
                  We help businesses to develop and reshape growth strategies.
                  Our consultations and solutions are personalized to fit your
                  needs.
                  {/* If you’ve never developed a strategy for growing your firm,
                  that’s okay. Or maybe your strategy needs help and an
                  end-to-end reshape? */}
                </p>
                <p>
                  At Elan Growth, we offer insights and strategies that help set
                  businesses across Africa into motion.
                  {/* At ELAN GROWTH, we offer strategies that help set businesses
                  across Africa into motion. We focus on helping you get the
                  growth strategy right, putting the systems or processes in
                  place and everything else becomes easier. Our approach will
                  replace random and opportunistic business development with a
                  reliable and systematic approach to growth across your
                  strategy, teams, output, and business. */}
                </p>
              </div>
              <div className="bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Approach
                  </h2>
                  <ul className="list-disc pl-6">
                    <li className="text-gray-700 mb-2">
                      Review your existing growth efforts.
                      {/* Boost your prospect penetrating into the market */}
                    </li>
                    <li className="text-gray-700 mb-2">
                      Boost your prospect penetrating into the market
                    </li>
                    <li className="text-gray-700 mb-2">
                      Gives you an edge over competitors
                    </li>
                    <li className="text-gray-700 mb-2">
                      Create a course of action to increase market share
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Growth Marketing Agency.
            </h2>
            <div>
              <p className="mb-4">
                At its core, we are responsible for the entire marketing funnel.
                From awareness, acquisition, retention, and referral, to
                marketing partnerships, we ensure there are no loose ends.
                {/* At its core, the goal is to be responsible for the entire
                marketing funnel. From awareness and acquisition all the way
                down to activation, revenue, retention, revenue, referral, and
                marketing partnerships. */}
              </p>
              {/* <p>
                We help businesses establish full-funnel approaches to reaching,
                converting, and retaining customers.
              </p> */}
              <p>
                Our marketing plans are diverse and agile, even when your budget
                is lean. Our key expertise includes Go-to-market, Market
                Expansion, Campaign Marketing across the board, Performance, and
                Digital Marketing.
                {/* A marketing plan should be diverse and agile, even when your
                budget is lean. That’s why we take on a growth marketing
                mentality and pursue results from all angles, starting with the
                low-hanging opportunities and optimizing further existing
                marketing channels and processes. */}
              </p>
              {/* <p className="text-[#0b2546]">
                Our key expertise includes Go to market, Market Expansion,
                Campaign Marketing across the board, Performance, and Digital
                Marketing.
              </p> */}
            </div>
            <div className="mt-9 homepage22 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">Analytics</p>
              </div>
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">
                  Conversion Optimization
                </p>
              </div>
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">Value Props</p>
              </div>
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">
                  Email Marketing
                </p>
              </div>
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">Google Ads</p>
              </div>
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">Social Ads</p>
              </div>
              <div className="bg-[#000000] rounded-lg p-4 shadow-lg">
                <p className="text-white font-medium text-sm">
                  Digital Advertising
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7 w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              className="w-2/3 homepage22"
              src={Elangrowth4}
              alt="elangrowth4"
              priority
            />
          </div>
        </div>

        <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
          <div className="mt-7 w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              className="w-2/3 homepage22"
              src={Elangrowth5}
              alt="elangrowth5"
              priority
            />
          </div>
          <div className="w-full sm:w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Product Development.
            </h2>
            <div>
              <p className="mb-4">
                We bring your product from ideation through market release and
                beyond.{" "}
              </p>
              <p className="mb-4">
                We provide a thorough process covering in-depth market research,
                user journey, and more. We also help you strategically plan,
                build and take your product to market and measure its success.
                {/* At ElanGrowth we bring your product from concept or idea through
                market release and beyond. We would help you strategically plan,
                build and take your product to market and measure its success. */}
              </p>
            </div>
            <div className="bg-gray-100 py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Approach
                </h2>
                <ul className="list-disc pl-6">
                  <li className="text-gray-700 mb-2">Strategize</li>
                  <li className="text-gray-700 mb-2">Ideate</li>
                  <li className="text-gray-700 mb-2">Plan</li>
                  <li className="text-gray-700 mb-2">Build</li>
                  <li className="text-gray-700 mb-2">Launch</li>
                  <li className="text-gray-700 mb-2">Analyze</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Brand & Creative Development.
            </h2>
            <div>
              <p className="mb-4">
                The most popular brands don't appear out of anywhere, fully
                developed. Their missions and values are created and then
                redefined to reflect their insight, analysis, and empathy.
                {/* The most popular brands don't appear out of anywhere, fully
                developed. Their missions are created and then redefined, their
                communications are written, tested, and fine-tuned, and their
                values change as a result of a combination of insight, analysis,
                and empathy. */}
              </p>
              <p>
                Our full brand strategy and design services include logo
                creation, branding, production, UI/UX designs, and company
                documentation, just to mention a few.
                {/* When we partner with clients to create a winning brand strategy,
                we get into the weeds. We’ll do a deep dive into the
                marketplace, find out where the currents are heading, develop a
                message that matters, and get ahead of the curve. */}
              </p>
            </div>
            {/* <div className="bg-gray-100 py-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="list-disc pl-6">
                  <li className="text-gray-700 mb-2">
                    Full brand strategy and design - logos, branding,
                    production, UI/UX designs, and company documentation, just
                    to mention a few.
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="mt-7 w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              className="w-2/3 homepage22"
              src={Elangrowth6}
              alt="elangrowth6"
              priority
            />
          </div>
        </div>

        <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
          <div className="mt-7 w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              className="w-2/3 homepage22"
              src={Elangrowth7}
              alt="elangrowth7"
              priority
            />
          </div>
          <div className="w-full sm:w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              E-Commerce Agency.
            </h2>
            <div>
              <p className="mb-4">
                We have a proven track record as a top-performing eCommerce
                marketing agency.
              </p>
              <p>
                We use an active management and marketing strategy and process
                to stay on top of the information you need to outperform your
                sales goals. At ELAN, we give you:
                {/* We use an active management and marketing process to stay on top
                of the information you need to outperform your sales goals. We
                would provide a sound e-commerce strategy that can help you
                build brand awareness, drive customer loyalty, and ultimately
                increase online sales. */}
              </p>
              {/* <p className="text-[#0b2546]">
                Some eCommerce marketing companies might try to sell you on a
                proprietary formula for the “magical potion” to successful
                advertising services. At ELAN, we’ll give it to you for free: ​
              </p> */}
            </div>
            <div className="bg-gray-100 py-10 text-[#0b2546]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="list-disc pl-6">
                  <li className="text-gray-700 mb-2">Traction</li>
                  <li className="text-gray-700 mb-2">Profit</li>
                  <li className="text-gray-700 mb-2">Scale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              On-Demand CMO, CSO & Growth Managers.
            </h2>
            <div>
              <p className="mb-4">
                Several organizations need very skilled expertise in the areas
                of sales, marketing, or growth to scale or solve a business case
                or need.
                {/* We have observed that many times organizations come to
                situations they need very skilled expertise in the areas of
                sales, marketing or growth to scale or solve a business case or
                need. So, we created a service that gives you access to a
                hands-on pool of experts and professionals to solve your
                immediate sales, marketing, and growth needs. */}
              </p>
              <p>
                Get access to a hands-on pool of subject matter experts and
                professionals to solve your immediate sales, marketing, and
                growth needs.
                {/* Our managers will be sure to design and implement predictable &
                scalable growth strategies to accelerate customer acquisition
                primarily. */}
              </p>
              {/* <p className="text-[#0b2546]">
                Your growth plans don't need to be challenged with the right
                expert knowledge to bring business success. Get access to
                consultants specializing in Startups, SMEs, Tech, and many other
                businesses.
              </p> */}
            </div>
            <div className="bg-gray-100 py-10 text-[#0b2546]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="list-disc pl-6">
                  <li className="text-gray-700 mb-2">Marketing Partnership</li>
                  <li className="text-gray-700 mb-2">Media Relations</li>
                  <li className="text-gray-700 mb-2">Awards Bureau</li>
                  <li className="text-gray-700 mb-2">Media Placements</li>
                  <li className="text-gray-700 mb-2">Exhibitions</li>
                  <li className="text-gray-700 mb-2">Event Bureau</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-7 w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              className="w-2/3 homepage22"
              src={Elangrowth8}
              alt="elangrowth8"
              priority
            />
          </div>
        </div>

        {/* <div className="flex mt-9 m-4 flex-wrap items-center justify-center">
          <div className="mt-7 w-full sm:w-1/2 pr-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image
              className="w-2/3 homepage22"
              src={Elangrowth9}
              alt="elangrowth9"
              priority
            />
          </div>
          <div className="w-full sm:w-1/2 pr-5">
            <h2 className="text-[#0b2546] mt-7 text-3xl font-bold text-gray-800 mb-4">
              Turnkey Sales & Marketing Projects.
            </h2>
            <div>
              <p className="mb-4">
                During the course of our work, we have seen clients in more
                traditional communication channels and strategies.
              </p>
              <p>
                Lets put it this way.... While we are laser-focused on
                optimizing below-the-line channels and strategies, we are also
                very vast in the more traditional marketing channels.
              </p>
              <p className="text-[#0b2546]">
                Over the years, our team has effectively managed combined
                budgets of millions of dollars towards successful campaigns we
                can make known upon request.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                <div className="bg-[#000000] rounded-lg p-4">
                  <p className="text-white font-medium text-sm">
                    Marketing Partnership
                  </p>
                </div>
                <div className="bg-[#000000] rounded-lg p-4">
                  <p className="text-white font-medium text-sm">
                    Media Relations
                  </p>
                </div>
                <div className="bg-[#000000] rounded-lg p-4">
                  <p className="text-white font-medium text-sm">
                    Awards Bureau
                  </p>
                </div>
                <div className="bg-[#000000] rounded-lg p-4">
                  <p className="text-white font-medium text-sm">
                    Media Placements
                  </p>
                </div>
                <div className="bg-[#000000] rounded-lg p-4">
                  <p className="text-white font-medium text-sm">Exhibitions</p>
                </div>
                <div className="bg-[#000000] rounded-lg p-4">
                  <p className="text-white font-medium text-sm">Event Bureau</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="mt-9 mb-5 bg-[#000000] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl mt-7 text-center">
            SOME KEYWORDS TO REMEMBER US BY ...
          </h1>
        </div>
        <div className="mt-7 flex m-4 flex-wrap items-center justify-center">
          <div className="mt-7 w-full sm:w-1/2 pr-5">
            {/* <p>
              Yes, we are that deep and understand what the basics should be and
              how you scale efficiently.
            </p> */}
            <p>
              When you think of how we can serve you, think of the following
              keywords
            </p>
          </div>
          <div className="w-full sm:w-1/2 mb-5 pr-5">
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 homepage2">
              <div className="bg-[#ffff] rounded-lg p-4 shadow-lg">
                <p className="text-black font-medium text-sm">
                  Business Growth
                </p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Sales</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Marketing</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Africa</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Strategy</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Consulting</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Revenue</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">E-Commerce</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Growth Hacking</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Partner</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Performance</p>
              </div>
              <div className="bg-[#ffff] rounded-lg p-4  shadow-lg">
                <p className="text-black font-medium text-sm">Traction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7  py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              Let's talk about the hopes and dreams for your business!
            </h2>
            <p className="text-black-300">
              aBook a time for your free 30-minute growth consultation call.
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

export default ElanGrowth;
