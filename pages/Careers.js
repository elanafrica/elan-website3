import React from "react";

import Layout from "../components/Layout";
import Image from "next/image";
import careerHero from "../public/joinourteam.jpg";
import { BiTimeFive } from "react-icons/bi";
import { GrGrommet, GrPowerCycle } from "react-icons/gr";

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
        <div className="relative bg-gradient-to-tr from-blue-950 to-sky-700 lg:h-96 w-full bg-cover">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={careerHero}
            alt="career"
            priority
          />
          <div className="p-6 md:p-24 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              Unlock Your Career Potential: ready to join our team?
            </h1>
            <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-2xl text-white">
              Working at Elan Africa is like working with an extended family. Do
              you have the required skills to be OUR NEXT FAMILY MEMBER?
              {/* We are always looking for talented individuals to join our team.
              If you are interested in working with us, please email your resume
              and cover letter to: */}
              <br />
              <br />
              <span className="text-2xl font-bold">team@elanafrica.com</span>
            </p>
          </div>
        </div>

        <div className="">
          <h1 className="text-black text-center text-3xl md:text-4xl py-4 md:py-6 font-bold md:w-[400px] block mx-auto">
            Great work starts with great culture
            {/* The value that holds us true and accountable */}
          </h1>
          <p className="text-center mt-2 mb-2">
            Elan Africa places a premium on diversity, creativity, and
            innovation. We believe that our most valuable asset is our workforce
            and that a positive work environment is critical to attracting and
            retaining top talent. Our goal is to foster an environment that is
            enjoyable, challenging, and rewarding for everyone who works here.
          </p>
          <div className="">
            <div className=" rounded-2xl hover:bg-[#eeedf7] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-2 rounded-full bg-[#dedef8] h-14 w-14 md:h-16 md:w-16 flex items-center justify-center">
                  <GrGrommet className="w-10 md:w-12 text-3xl md:text-4xl" />
                </div>
                <span className="font-semibold text-black text-xl md:text-2xl">
                  Diversity and Inclusion:
                </span>
              </div>
              <p className="text-base md:text-lg opacity-80 py-4 md:py-6 font-semibold">
                Our commitment to being the most diverse, equitable, and
                inclusive marketing agency allows us to implement and improve
                practices, policies, and behaviors that help everyone succeed
                personally and professionally. We encourage varied talents to
                progress in their professions and improve the planet.
                {/* Things being made beautifully simple are at the heart of
                everything we do. */}
              </p>
            </div>

            <div className=" rounded-2xl hover:bg-[#f7edf5] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-2 rounded-full bg-[#f7d1e1] h-14 w-14 md:h-16 md:w-16 flex items-center justify-center">
                  <GrPowerCycle className="w-10 md:w-12 text-3xl md:text-4xl" />
                </div>
                <span className="font-semibold text-black text-xl md:text-2xl">
                  Grow With Us:{/* Satisfaction */}
                </span>
              </div>
              <p className="text-base md:text-lg opacity-80 py-4 md:py-6 font-semibold">
                Elan Africa offers professional and personal growth. Join a
                passionate team that embraces challenges, pushes boundaries, and
                opens new doors. We provide the best environment for you to
                succeed with mentorship, support, and growth. Join us and
                realize your potential.
                {/* We believe in making things better for everyone, even if just by
                a little bit! */}
              </p>
              <p className="text-base md:text-lg opacity-80 py-4 md:py-6 font-semibold">
                Want to know more about Elan Africa (Elan Africa will serve as a
                link redirecting them back to the About page)
              </p>
              <p className="text-base md:text-lg opacity-80 py-4 md:py-6 font-semibold">
                Join our team and be a part of the dynamic and inspiring culture
                at Elan Africa, where your talents are valued, your ideas are
                embraced, and your potential is unleashed.
              </p>
            </div>

            {/* <div className="singleGrid rounded-2xl hover:bg-[#fcfae3] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-2 rounded-full bg-[#f3f2ad] h-14 w-14 md:h-16 md:w-16 flex items-center justify-center">
                  <GrAchievement className="w-10 md:w-12 text-3xl md:text-4xl" />
                </div>
                <span className="font-semibold text-black text-xl md:text-2xl">
                  Trust
                </span>
              </div>
              <p className="text-base md:text-lg opacity-80 py-4 md:py-6 font-semibold">
                We work on the basis of creating trust which can be nurtured
                through authenticity and transparency.
              </p>
            </div> */}
          </div>
        </div>

        {/* <section>
          <div className="container mx-auto p-6 md:p-10">
            <div className="text-center">
              <h2 className="font-bold text-2xl md:text-3xl mb-2 md:mb-4">
                Who Are We? Who Are You?
              </h2>
              <span className="inline-flex h-1 w-40 bg-[#012169] mt-1"></span>
            </div>

            <div className=" p-3 mt-6 mb-6">
              <div className="md:mb-10">
                <p className="text-lg md:text-xl">
                  <span className="font-bold text-lg mr-2 leading-relaxed">
                    Us:
                  </span>
                  Elan Africa is a SaaS platform created to foster business
                  growth and sales for startups and SMEs across Africa. We help
                  generate scalable and predictable growth for ambitious and
                  goal-driven businesses through the latest technologies and
                  proper technical approach. Our job is to discover the best
                  growth action and marketing strategy plan for businesses ready
                  for a successful product launch.
                </p>
              </div>

              <div className="text-lg">
                <p className="leading-relaxed">
                  <span className="font-bold text-lg mr-2 leading-relaxed">
                    You:
                  </span>
                  Want to embrace an extraordinary growth challenge and make a
                  difference? You will thrive at Elan Africa if you have an
                  entrepreneurial spirit, think outside the box, and can balance
                  creative ideas with a resourceful mindset.
                </p>
              </div>

              <div className="p-3 md:p-5 flex justify-center items-center text-lg">
                <p>
                  <span className="font-bold text-lg mr-2 leading-relaxed">
                    Together:
                  </span>
                  We will support, challenge, and develop you. You will be
                  yourself and add your unique DNA to our culture. Together, we
                  will make sure you create your best work and enjoy doing it
                  towards a positive joint result.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Jobs Section */}
        <div className="flex gap-4 md:gap-10 justify-center flex-wrap items-center py-6 md:py-10">
          {/* returning the single jobs */}
          {Data.map(({ id, title, time, location, description }) => {
            return (
              <div
                key={id}
                className="singleCareer group group/item w-full md:w-[250px] p-4 md:p-6 bg-white rounded-2xl hover:bg-[#0b2546] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-2 md:gap-4">
                  <h1 className="text-lg md:text-xl font-semibold text-black group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1 md:group-hover:text-white">
                    <BiTimeFive /> {time}
                  </span>
                </span>
                <h6 className="text-[#ccc] md:group-hover:text-white">
                  {location}
                </h6>
                <p className="text-sm md:text-base text-[#959595] pt-4 md:pt-6 border-t-2 mt-4 md:mt-6 group-hover:text-white">
                  {description}
                </p>
                <button className="border-2 rounded-lg block p-3 md:p-4 mt-4 md:mt-5 w-full text-sm md:text-base font-semibold text-black hover:bg-white md:group-hover/item:text-[#959595]">
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
