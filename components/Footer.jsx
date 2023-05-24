import React from "react";
import Link from "next/link";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-[#0b2546] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#0b2546] py-7">
        <h3 className="lg:text-xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          Curious?? <span className="text-teal-400">Please let's connect</span>
          <br />
          <p className="lg:text-xl text-xl">
            For any information at all, our cushrefmer service team <br /> is
            available href take your queries. We also love feedbacks <br /> and
            suggestions.
          </p>
        </h3>
        <div className="flex">
          <div class="justify-items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:px-40 px-5 py-16">
            <ul className="md:mb-0 lg:leading-normal md:w-2/5">
              <li>team@elanafrica.com</li>
              <li>Tel: +2347031150441</li>
              <li>+2348023033175</li>
              <li>Lagos, Nigeria.</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:px-40 px-5 py-16">
            <ul className=" md:mb-0 lg:leading-normal md:w-2/5">
              <li>
                <Link href="/HomePage">Home</Link>
              </li>

              <li>
                <Link href="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link href="/Services">Services</Link>
              </li>
              <li>
                <Link href="/OurWork">Our Work</Link>
              </li>
              <li>
                <Link href="/ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>
              <li>
                <Link href="/Careers">Careers</Link>
              </li>
              <li>
                <Link href="/TrainingProg">Our Trainings</Link>
              </li>
              <li>
                <Link href="/Portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/FAQ">FAQ</Link>
              </li>
              <li>
                <Link href="/Testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#2f6bb9]">
        <hr />
        <div className="bg-[#161515] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-2 text-sm pb-5">
          <p className="mt-6 ml-12 text-3px text-lg">
            <Link href="/PrivacyTermsCondition">Terms and Conditions</Link>
          </p>
          <p className="mt-6 ml-12 text-3px text-lg">
            &copy; 2023 by Elan Africa
          </p>
          <div class="flex mt-5 mb-1 ml-2">
            <Link href="/">
              <buthrefn class="mr-5 text-4xl text-teal-400">
                <BsLinkedin />
              </buthrefn>
            </Link>

            <Link href="/">
              <buthrefn class="mr-5 text-4xl text-teal-400">
                <BsInstagram />
              </buthrefn>
            </Link>

            <Link href="/">
              <buthrefn class="mr-5 text-4xl text-teal-400">
                <BsTwitter />
              </buthrefn>
            </Link>

            <Link href="/">
              <buthrefn class="mr-5 text-4xl text-teal-400">
                <BsFacebook />
              </buthrefn>
            </Link>

            <Link href="/">
              <buthrefn class="mr-5 text-4xl text-teal-400">
                <BsYoutube />
              </buthrefn>
            </Link>
          </div>
        </div>
      </div>
      {/* <div class='flex justify-around pt-10 pb-10'>
          <div>
            <p class='font-bold text-3xl'>
              Curious?? <br />
              Please let's connect
            </p>
            <div class='flex  mt-5 mb-5 text-gray-500'>
              <Link href='/'>
              <buthrefn class='mr-5 text-4xl'>
                <BsLinkedin />
              </buthrefn>
              </Link>
              
              <Link href='/'>
                <buthrefn class='mr-5 text-4xl'>
                  <BsInstagram />
                </buthrefn>
              </Link>
              
              <Link href='/'>
                <buthrefn class='mr-5 text-4xl'>
                  <BsTwitter />
                </buthrefn>
              </Link>

              <Link href='/'>
                <buthrefn class='mr-5 text-4xl'>
                  <BsFacebook />
                </buthrefn>
              </Link>
              
              <Link href='/'>
                <buthrefn class='mr-5 text-4xl'>
                  <BsYoutube />
                </buthrefn>
              </Link>
              
            </div>
            <p class='text-gray-400'>
              For any information at all, our cushrefmer service team <br /> is 
              available href take your queries. We also love feedback <br /> and 
              suggestions.
            </p>
          </div>
          <div class=''>
            <ul>
                <li>
                  <Link href='/HomePage'>
                      Home
                  </Link>
                </li>
              
              <li>
                <Link href='/AboutUs'>
                    About Us
                </Link>
              </li>
              <li>
                <Link href='/Services'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/OurWork'>
                  Our Work
                </Link>
              </li>
              <li>
                <Link href='/ContactUs'>
                 Contact Us
                </Link>
              </li>
              <li>
                <Link href='/Blog'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='/Careers'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='/TrainingProg'>
                  Our Training programmes
                </Link>
              </li>
              <li>
                <Link href='/Portfolio'>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href='/FAQ'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href='/Testimonials'>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href='/PrivacyTermsCondition'>
                  Terms and Conditions
                </Link>
              </li>
              
            </ul>
          </div>
          <div class=''>
            <p className=''>team@elanafrica</p>
            <p className=''>Tel: +2347031150441</p>
            <p class='ml-8'>+2348023033175</p>
            <p className=''>Lagos, Nigeria.</p>
          </div>
        </div>
        <hr />
        <p class='flex justify-center text-md mt-10'>&copy; 2022 by Elan Africa</p> */}
    </div>
  );
}

export default Footer;
