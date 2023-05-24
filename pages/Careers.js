import React from "react";

import Layout from "../components/Layout";
import Image from "next/image";
import careerHero from "../public/careerHero.jpeg";
import { BiTimeFive } from "react-icons/bi";
import { GrGrommet, GrPowerCycle, GrAchievement } from "react-icons/gr";

const Data = [
  {
    id: 1,
    title: "Web Developer",
    time: "Now",
    location: "Lagos, Hybrid",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 2,
    title: "Software Engineer (Frontend)",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 3,
    title: "Software Engineer (Backend)",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 4,
    title: "Project Manager",
    time: "Now",
    location: "Lagos, Hybrid",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    time: "Now",
    location: "Lagos, Hybrid",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 6,
    title: "Product Designer",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 7,
    title: "Digital Marketer and SEO Manager",
    time: "Now",
    location: "Lagos, Hybrid",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 8,
    title: "Content creation manager",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 9,
    title: "Mobile App Engineer",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 10,
    title: "Senior QA",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 11,
    title: "UI Researcher",
    time: "Now",
    location: "Lagos, Hybrid",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
  {
    id: 10,
    title: "Data Scientist",
    time: "Now",
    location: "Lagos, Remote",
    description:
      "Lorem ipsun, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!",
  },
];

function Careers() {
  return (
    <Layout title="Careers">
      <div>
        <div className="relative bg-gradient-to-tr from-blue-950 to-sky-700  lg:h-96 w-full bg-cover">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={careerHero}
            alt="career"
            priority
          />
          <div className="p-24 text-center">
            <h1 className="text-3xl text-white font-bold">JOIN OUR TEAM</h1>
            <p className=" p-10 mt-4 text-xl text-white">
              We are always looking for talented individuals to join our team.{" "}
              <br /> If you are interested in working with us, please email your
              resume and cover letter to <br /> <br />{" "}
              <span className="text-2xl font-bold"> team@elanafrica.com </span>
            </p>
          </div>
        </div>

        <div className="mb-[4rem] mt-[6rem] ml-12">
          <h1 className="text-black text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
            The value that holds us true and to account
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 items-center">
            <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[8rem] bg-[#dedef8] h-[40px] flex items-center justify-center">
                  <GrGrommet className="w-[70%] text-4xl" />
                </div>
                <span className="font-semibold text-black text-[20px]">
                  Simplicity
                </span>
              </div>
              <p className="text-[15px] opacity-[.7] py-[1rem] font-semibold">
                Things being made beautifully simple are at the heart of
                everything we do.
              </p>
            </div>

            <div className="rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[8rem] bg-[#f7d1e1] h-[40px] flex items-center justify-center">
                  <GrPowerCycle className="w-[70%] text-4xl" />
                </div>
                <span className="font-semibold text-black text-[20px]">
                  Satisfaction
                </span>
              </div>
              <p className="text-[15px] opacity-[.7] py-[1rem] font-semibold">
                We believe in making things better for everyone, even if just by
                a little bit!.
              </p>
            </div>

            <div className="rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[8rem] bg-[#f3f2ad] h-[40px] flex items-center justify-center">
                  <GrAchievement className="w-[70%] text-4xl" />
                </div>
                <span className="font-semibold text-black text-[20px]">
                  Trust
                </span>
              </div>
              <p className="text-[15px] opacity-[.7] py-[1rem] font-semibold">
                We work on the basis of creating trust which can be nurtured
                through authenticity and transaprency.
              </p>
            </div>
          </div>
        </div>

        <section>
          <div className="container mx-auto p-10">
            <div className="text-center">
              <h2 className="font-bold text-2xl mb-0">
                {" "}
                Who Are We? Who Are you
              </h2>
              <span className="inline-flex h-1 w-40 bg-[#012169] mt-0"></span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 p-5 mt-10 mb-10">
              <div className="md:mb-10 sm:mb-10">
                <p className="text-lg md:mb-10 sm:mb-10">
                  <span className="font-bold text-lg mr-2 leading-relaxed">
                    Us:
                  </span>
                  Elan Africa is a saas platform created to foster business{" "}
                  <br /> growth and sales for startups, and SMEs accross Africa.
                  We <br /> help generate scaleable and predictable growth for
                  ambitious <br /> and goal driven businesses through latest
                  technologies and <br /> proper technical approach. Our job is
                  to discover the best <br /> growth action and marketing
                  strategy plan for businesses ready for a successful product
                  launch.
                </p>
              </div>

              <div className="h-full text-lg ">
                <p className="leading-relaxed">
                  <span className="font-bold text-lg mr-2 leading-relaxed">
                    You:
                  </span>
                  Want to embrace extraordinary growth challenge and <br /> make
                  a difference?. You will thrive at Elan Africa if you have{" "}
                  <br /> an entrepreneurial spirit, think outside the box, and
                  can balance <br /> creative ideas with a resourceful mindset.
                </p>
              </div>
            </div>
            <div className="lg:w-full lg:h-full p-5 flex justify-center items-center text-lg">
              <p className="">
                <span className="font-bold text-lg mr-2 leading-relaxed">
                  Together:
                </span>
                We will support, challenge, and develop you. <br /> You will be
                yourself and add your unique DNA to our culture. <br />
                Together, we will make sure you create your best work and <br />{" "}
                enjoy doing it towards a positive joint results.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <div className="flex gap-10 justify-center flex-wrap items-center py-10">
          {/* returning the single jobs */}
          {Data.map(({ id, title, time, location, description }) => {
            return (
              <div
                key={id}
                className="singleCareer group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#0b2546] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span class="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-black group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc} gap-1 group-hover:text-white">
                    <BiTimeFive /> {time}
                  </span>
                </span>
                <h6 className="text-[#ccc} group-hover:text-white">
                  {location}
                </h6>
                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                  {description}
                </p>
                <button className="border-[2px] rounded-[10px] block p-[10px] mt-5 w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-[#959595]">
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Careers;
