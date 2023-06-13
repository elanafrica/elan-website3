import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import Logoh from "../public/elanstudio.jpg";
import Elanstud from "../public/assets/elanstud.png";
import Elanstud2 from "../public/assets/elanstud2.png";
import Elanstud3 from "../public/assets/elanstud.png";
import Elanstud4 from "../public/assets/elanstud.png";
import Elanstudcard1 from "../public/assets/show1.png";
import Elanstudcard2 from "../public/assets/show4.png";
import Elanstudcard3 from "../public/assets/show5.png";
import Elanstudcard4 from "../public/assets/show6.png";
import Elanstudcard5 from "../public/assets/show7.png";
import Elanstudcard6 from "../public/assets/show8.png";
import Elanstudcard7 from "../public/assets/show9.png";
import Elanstudcard8 from "../public/assets/show10.png";

function ElanStudio() {
  return (
    <Layout title="ElanStudio">
      <div className="m-4">
        <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={Logoh}
            alt="studio hero"
            priority
          />
          <div className="p-6 md:p-24 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
              Where we get obsessed with your brands' storytelling and our
              creativity is at its peak!
            </h1>
            <p className="p-4 mt-2 md:mt-4 text-lg md:text-xl lg:text-3xl text-white">
              Whether you've got a plan or don't? We got you!
            </p>
          </div>
        </div>
        <div className="mt-9 mb-7 text-xl text-center">
          <p className="mb-3">
            We've been told by our clients that at{" "}
            <span className="text-red">ElanStudio</span> we bring the perfect
            mix of creativity and content strategy.
          </p>
          <p className="mb-4">
            What's more important to note is we have top experience in marketing
            performance and public relations.
          </p>
          <p>This means your content strategy is given a 360 view.</p>
        </div>

        <div className="mt-9 mb-7">
          <div className="mt-9 flex justify-center flex-wrap gap-4">
            <Image
              className="w-32"
              src={Elanstudcard1}
              alt="elandevcard1"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard2}
              alt="elandevcard2"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard3}
              alt="elandevcard3"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard4}
              alt="elandevcard4"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard5}
              alt="elandevcard1"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard6}
              alt="elandevcard2"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard7}
              alt="elandevcard3"
              priority
            />
            <Image
              className="w-32"
              src={Elanstudcard8}
              alt="elandevcard4"
              priority
            />
          </div>
        </div>

        <div className="bg-[#151414] p-4 text-white">
          <div className="">
            <p className="text-3xl font-bold text-white text-center">
              What we're quite good at ...
            </p>
          </div>
          <div className="m-4 mt-7 flex flex-wrap items-center justify-center">
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <Image
                className="w-full homepage22"
                src={Elanstud}
                alt="Logo"
                priority
              />
            </div>
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <p className="text-2xl font-bold mb-5">
                Video Content Production
              </p>
              <p>
                There is no alternative for imagery when it comes to
                storytelling. That's why it's no surprise that we desire
                communications that are personal, powerful, and simple to
                understand.
              </p>
              <p>
                High-quality video content is critical to every successful
                business campaign, and why businesses have grown to rely on it
                to project authenticity, trustworthiness, and long-term
                emotional connections with their audiences.
              </p>
              <p>
                We specialize in video-based digital content because we believe
                that visuals are still the most effective way to communicate
                today.
              </p>
            </div>
          </div>
          <div className="m-4 mt-7 flex flex-wrap items-center justify-center">
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <p className="text-2xl font-bold mb-5">Photography Suite</p>
              <p>
                We have a pool of creative artists who produce incredible images
                for our clients. From billboards to product photos, there is no
                job too big for our commercial photography experts. They bring
                experience, creativity, and out-of-the-box thinking to every job
                - helping to capture the images you need and the ones you can't
                live without.
              </p>
              <p>
                Whether you’re looking for photos to utilize on your company
                website, for social media, or in an advertisement, ElanStudio
                offers a variety of professional photography services.
              </p>
            </div>
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <Image
                className="w-full homepage22"
                src={Elanstud2}
                alt="Logo"
                priority
              />
            </div>
          </div>
          <div className="m-4 mt-7 flex flex-wrap items-center justify-center">
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <Image
                className="w-full homepage22"
                src={Elanstud3}
                alt="Logo"
                priority
              />
            </div>
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <p className="text-2xl font-bold mb-5">
                Audio Content Production
              </p>
              <p>
                Audio content creation is a growing trend in the world of
                digital marketing. You can use audio-specific content to
                increase brand awareness, improve lead generation and
                conversion, and build trust and loyalty among your audiences.
              </p>
              <p>
                We provide different types of audio content services - podcasts,
                audiobooks, online radio, voice-over services, etc.
              </p>
            </div>
          </div>
          <div className="m-4 mt-7 flex flex-wrap items-center justify-center">
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <p className="text-2xl font-bold mb-5">Live & Corporate Events</p>
              <p>
                Live events are a proven marketing tool to drive sales, motivate
                employees and celebrate accomplishments.
              </p>
              <p>
                We develop compelling corporate events and meetings by
                integrating your messages into the event design and engagement
                strategies for your customers and community.
              </p>
              <p>
                With the rise of hybrid events, we have successfully
                live-streamed such events to participants across the globe, as
                well as managed all online pre-event and in-event strategies.
              </p>
              <p>
                Lets us partner with you to create a strategy and program to
                take your brand to the next level.
              </p>
            </div>
            <div className="mt-9 w-full sm:w-1/2 lg:w-1/3 pr-5">
              <Image
                className="w-full homepage22"
                src={Elanstud4}
                alt="Logo"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7  py-12">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">
              Let's get your brand to that level of creativity you've craved.
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

export default ElanStudio;
