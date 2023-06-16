import React, { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import ElanBlogHero from "../public/elanblog.jpg";
import ElanBlog1 from "../public/assets/humanizingbrand.jpg";
import ElanBlog2 from "../public/assets/socialmediaforsmallbusinesses.jpg";
import ElanBlog3 from "../public/assets/deathbyai.jpg";
import ElanBlog4 from "../public/assets/marketingplansthatwork.jpg";
import ElanBlog5 from "../public/assets/maximizebudget.jpg";
import ElanBlog6 from "../public/assets/11marketingstrategies.jpg";
import ElanBlog7 from "../public/assets/deademailmarketing.jpg";
import ElanBlog8 from "../public/assets/smetarget.jpg";
import ElanBlog9 from "../public/assets/investwisely.jpg";
import ElanBlog10 from "../public/assets/freecourses.jpg";
import ElanBlog11 from "../public/assets/b2bgrowthhack.jpg";
import ElanBlog12 from "../public/assets/mentalhealth.jpg";
import ElanBlog13 from "../public/assets/remoteteams.jpg";
import ElanBlog14 from "../public/assets/propergrowthmarketing.jpg";
import ElanBlog15 from "../public/assets/perfectbusinessplan.jpg";
import ElanBlog16 from "../public/assets/customerexperiencedirectmarketing.jpg";

import { BiTimeFive } from "react-icons/bi";

const posts = [
  {
    id: 1,
    name: "Amabel Ukoko",
    title: "Humanizing your brand",
    description:
      "In today’s digital age, it is more important than ever to humanize your brand. With so many options...",
    date: "June 8",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog1,
  },
  {
    id: 2,
    name: "Ruth Torty",
    title: "How to Do Social Media Marketing for Small Businesses",
    description:
      "According to Datareportal, there are now more than 5.18 billion internet individuals, making up...",
    date: "May 31",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog2,
  },
  {
    id: 3,
    name: "Amabel Ukoko",
    title: "The death of SEO by AI (Debunking the myth)",
    description:
      "Search Engine Optimization (SEO) has been an integral part of digital marketing since the inception of search engines. SEO refers to the practice of ",
    date: "May 17",
    views: "",
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog3,
  },
  {
    id: 4,
    name: "Ruth Torty",
    title: "How to create a Marketing Plan that Works.",
    description:
      "Ignoring online marketing is like opening a business but not telling anyone. — KB Marketing Agency...",
    date: "May 15",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog4,
  },
  {
    id: 5,
    name: "Amabel Ukoko",
    title: "How to maximize your marketing budget",
    description:
      "Marketing plays a crucial role in the growth and success of any business. However, with limited..",
    date: "May 4",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog5,
  },
  {
    id: 6,
    name: "Ruth Torty",
    title: "11 marketing strategies to attract and retain...",
    description:
      "Increasing revenue is principal to the growth of any business. It's not enough to have a viable product, build an excellent team or even receive the right investment for your business–marketing allows ",
    date: "Apr 26",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog6,
  },
  {
    id: 7,
    name: "Amabel Ukoko",
    title: "Is Email Marketing Dead?",
    description:
      "Email marketing has been around for decades and continues to be one of the most cost-effective and a...",
    date: "Apr 19",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog7,
  },
  {
    id: 8,
    name: "Ruth Torty",
    title: "A Guide to How SMEs Can Ideentify Their Target Audience",
    description:
      "Small and medium-sized enterprises are currently on the rise. Aside from the crucial role...",
    date: "Apr 12",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog8,
  },
  {
    id: 9,
    name: "Amabel Ukoko",
    title: "Invest Wisely: 5 Things to Know Before You Start",
    description:
      "Invest Wisely: 5 Things to Know Before You Start Choosing what to invest in can be both daunting and",
    date: "Apr 3",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog9,
  },
  {
    id: 10,
    name: "Ruth Torty",
    title: "5 Free Courses Every Founder & Entrepreneur Should...",
    description:
      "To build a successful business in Africa, here are 5 free courses we recommend every founder and...",
    date: "Feb 24",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog10,
  },
  {
    id: 11,
    name: "Ifeoma Okwy-Ejezie",
    title: "B2B Growth Hacking Strategies",
    description:
      "The way to hack growth in B2B involves understanding that a business’s main competition is the ",
    date: "Nov 10, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog11,
  },
  {
    id: 12,
    name: "Ruth Torty",
    title: "Mental Health in The Workplace: How To Build Safe Spaces Fo...",
    description:
      "Interestingly, a survey carried out by WellNewMe shows that 4 in 5 employees are at risk of mental",
    date: "Oct 26, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog12,
  },
  {
    id: 13,
    name: "Ruth Torty",
    title: "11 Tips For Managing Remote Teams In Africa..",
    description:
      "As digitalization continues to dominate and become the norm in this age, work systems are also..",
    date: "Aug 12, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog13,
  },
  {
    id: 14,
    name: "Ifeoma Okwy-Ejezie",
    title: "Why your business needs proper growth marketing",
    description:
      "According to the European Union (EU), SMEs are micro, small, and medium-sized enterprises which...",
    date: "Aug 10,2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog14,
  },
  {
    id: 15,
    name: "Team Elan",
    title: " All the talk about the perfect business plan for business growth!",
    description:
      "The importance we place on your business plan and getting it right should let you see will let you..",
    date: "May 30, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog15,
  },
  {
    id: 16,
    name: "Afam Anyika",
    title: "Customer experience that enhances direct marketing and...",
    description:
      "Through the years, business giants have said that great customer service helped their businesses to",
    date: "May 26, 2022",
    views: 152,
    comments: [
      {
        name: "Jane Doe",
        email: "janedoe@example.com",
        comment:
          "Great post, John! I couldn't agree more about the importance of exercise. I try to get at least 30 minutes of activity every day, and I've definitely noticed the benefits.",
      },
      {
        name: "Bob Johnson",
        email: "bjohnson@example.com",
        comment:
          "Thanks for sharing your insights, John. I've been struggling to get into a regular exercise routine, but your post has inspired me to give it another try.",
      },
    ],
    image: ElanBlog16,
  },
];

const Blog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout title="Blog">
      <div>
        <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={ElanBlogHero}
            alt="blog hero"
            priority
          />
          <div className="p-6 md:p-24 text-center">
            <h1 className="text-3xl md:text-3xl lg:text-4xl text-white font-bold">
              Where we share insights and trends on sales, marketing, growth,
              and creative content.
            </h1>
          </div>
        </div>
        <div className="mt-7 mx-4">
          <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
            <Link
              href="/Blog"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
            >
              All Posts
            </Link>
            <Link
              href="/AboutUs"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
            >
              Growth Marketing
            </Link>

            <Link
              href="/OurWork"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
            >
              Business Tips
            </Link>
            <Link
              href="/Blog"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
            >
              Growth Marketing Agency
            </Link>
            <Link
              href="/Testimonials"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
            >
              Traditional Marketing Methods
            </Link>
            <Link
              href="/ContactUs"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
            >
              Marketing Tips
            </Link>
            <div className="relative">
              <button
                className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm md:text-base font-medium"
                onClick={() => setIsOpen(!isOpen)}
              >
                More
              </button>
              <div
                className={`${
                  isOpen ? "block" : "hidden"
                } absolute z-50 bg-white p-4 mt-1 rounded-md shadow-lg`}
              >
                <Link
                  href="/ElanAccelerate"
                  className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100"
                >
                  Business In Africa
                </Link>
                <Link
                  href="/ElanDev"
                  className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100"
                >
                  WorkPlace in Africa
                </Link>
                <Link
                  href="/ElanGrowth"
                  className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100"
                >
                  Founders Care Column
                </Link>
                <Link
                  href="/ElanStudio"
                  className="block px-4 py-2 text-sm md:text-base text-gray-700 hover:bg-gray-100"
                >
                  Business Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="singleCareer group group/item p-4 bg-white rounded-2xl hover:bg-[#0b2546] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <Link href={`/BlogCard/${post.id}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    priority
                  />
                  <h1 className="text-lg md:text-xl font-semibold text-black group-hover:text-white">
                    {post.title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1 group-hover:text-white">
                    <BiTimeFive /> By {post.name} on {post.date}
                  </span>
                  <p className="text-sm md:text-base text-[#959595] pt-4 md:pt-6 border-t-2 mt-4 md:mt-6 group-hover:text-white">
                    {post.description}
                  </p>
                  <p>Views: {post.views}</p>
                  <p>Comments:</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
