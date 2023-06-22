import React from "react";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonial from "../public/elanaccehero.jpg";

function Testimonials() {
  return (
    <div>
      <section>
        <div className="container mx-auto p-10">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Testimonial</h1>
            <span className="inline-flex h-1 w-28 rounded bg-[rgb(7,39,78)] mt-2"></span>
          </div>
        </div>
        <div className="testimonialTrack grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-6">
          <div className="h-full text-center text-white ml-5 p-5 bg-[rgb(7,39,78)] rounded-lg cursor-pointer hover:rotate-1">
            <Image
              className="h-24 w-24 object-cover rounded-full inline-block bg-opacity-10 items-center justify-center"
              src={testimonial}
              alt="testimonial profile"
            />
            <span className="block font-bold text-lg">
              <RiDoubleQuotesL />
            </span>
            <p className="leading-relaxed ml-6 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-[rgb(7,39,78)] mt-4 mb-2"></span>
            <h2 className="text-lg font-bold tracking-wider text">John Doe</h2>
            <p className="text-sm text-gray-500 ">Brand Marketer</p>
          </div>

          <div className="h-full text-center text-white ml-5 p-5 bg-[rgb(7,39,78)] rounded-lg cursor-pointer hover:rotate-1">
            <Image
              className="h-24 w-24 object-cover rounded-full inline-block bg-opacity-10 items-center justify-center"
              src={testimonial}
              alt="testimonial profile"
            />
            <span className="block font-bold text-lg">
              <RiDoubleQuotesL />
            </span>
            <p className="leading-relaxed ml-6 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-[rgb(7,39,78)] mt-4 mb-2"></span>
            <h2 className="font-bold text-lg tracking-wider">John Doe</h2>
            <p className="text-sm text-gray-500">Brand Marketer</p>
          </div>

          <div className="h-full text-center text-white ml-5 p-5 bg-[rgb(7,39,78)] rounded-lg cursor-pointer hover:rotate-1">
            <Image
              className="h-24 w-24 object-cover rounded-full inline-block bg-opacity-10 items-center justify-center"
              src={testimonial}
              alt="testimonial profile"
            />
            <span className="block font-bold text-lg">
              <RiDoubleQuotesL />
            </span>
            <p className="leading-relaxed ml-6 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="inline-flex h-1 w-14 rounded bg-[rgb(7,39,78)] mt-4 mb-2"></span>
            <h2 className="title-font font-bold text-lg tracking-wider">
              John Doe
            </h2>
            <p className="text-sm text-gray-500">Brand Marketer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
