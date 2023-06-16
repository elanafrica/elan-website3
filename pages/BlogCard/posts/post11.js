import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/b2bgrowthhack.jpg";
import Link from "next/link";

function Post11() {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <div className="">
        <div className="mt-9 flex flex-wrap items-center justify-center ">
          <Link
            href="/Blog"
            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            All Posts
          </Link>
          <Link
            href="/AboutUs"
            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Growth Marketing
          </Link>

          <Link
            href="/OurWork"
            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Business Tips
          </Link>
          <Link
            href="/Blog"
            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Growth Marketing Agency
          </Link>
          <Link
            href="/Testimonials"
            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Traditional Marketing Methods
          </Link>
          <Link
            href="/ContactUs"
            className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Marketing Tips
          </Link>
          <div className="relative">
            <button
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Business In Africa
              </Link>
              <Link
                href="/ElanDev"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                WorkPlace in Africa
              </Link>
              <Link
                href="/ElanGrowth"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Founders Care Column
              </Link>
              <Link
                href="/ElanStudio"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Business Guide
              </Link>
            </div>
          </div>
        </div>
      </div>

      <article className="m-4 mt-9 container mb-5 ">
        <h2 className="font-bold text-2xl text-center mt-4 mb-4">
          B2B Growth Hacking Strategies
        </h2>
        <h4 className="font-bold text-xl">What is B2B marketing?</h4>
        <p>
          Business-to-Business marketing refers to the marketing of products or
          services between companies. There are differences between B2B and B2C
          marketing but also similarities. One similarity is that some B2B
          markets will exhibit the same buying behaviors and competitive
          attributes that many B2C markets depict.
        </p>
        <div>
          <p className="font-bold mt-4 mb-4">What to focus on</p>
          <p className="mt-2 mb-5">
            The way to hack growth in B2B involves understanding that a
            business’s main competition is the biggest brands in its category,
            as shown by a new study from the Ehrenberg-Bass Institute. Another
            way to drive B2B business growth is to target all customers within
            the business category. Expanding the brand’s customer base is
            therefore essential.{" "}
          </p>
        </div>
        <div>
          <p className="font-bold mt-4 mb-4">
            Characteristics of B2B marketing:
          </p>
          <p className="mt-2 mb-5">
            To hack B2B growth, the team responsible should know how B2B
            marketing differs from marketing for other business types. They
            should know the markers of B2B organizations and then create a
            strategy that will drive rapid growth. Some characteristics to note
            are
          </p>
          <ul>
            <li>B2B companies usually have multiple decision makers</li>
            <li>They have fewer customers</li>
            <li>
              Return-On-Investment (ROI) is a primary focus for corporate
              decision-makers.
            </li>
            <li>
              More focus is placed on knowing their customer’s pain points{" "}
            </li>
            <li>
              The decision to patronize another business is reached rationally
              and collectively{" "}
            </li>
            <li>Content strategy for B2B is more thorough than B2C</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mt-4 mb-4">B2B Growth Strategy</p>
          <p className="mt-2 mb-5">
            Every B2B business needs a data-driven strategy that will contribute
            to its growth. One important focus is to be placed on content
            strategy. Elements of a B2B strategy include
          </p>
          <div>
            <ul>
              <li>
                <span className="font-bold">Email marketing:</span>
                B2B businesses can grow through email campaigns where they
                market their products or services and at the same time build a
                relationship with their customers. They get to learn about their
                pain points and goals. This will make it easier to market the
                right services to them.
              </li>
              <li>
                <span className="font-bold">Content marketing:</span>
                It typically consists of video, audio, and written content
                published on an organization’s blog and then shared on its
                social media for more organic traffic. On-page and Off-page SEO
                activities are needed to improve site rank. This helps you reach
                prospects who are ready to buy and you can offer them the
                perfect solution before your competitors do.
              </li>
              <li>
                <span className="font-bold">Influencer marketing:</span>
                Most brands turn to individuals with a good engagement on social
                media platforms. They hope to convert the reach and engagement
                these influencers have into growth and visibility for their
                business.
              </li>
              <li>
                <span className="font-bold">Paid advertising:</span>
                Brands can take advantage of paid ads to grow their brand. They
                can use channels such as Google ads, Facebook ads, Bing ads, and
                LinkedIn ads. These ads are used to generate sales-assured leads
                and build brand engagement.
              </li>
              <li>
                <span className="font-bold">Product marketing:</span>
                This will include proper product positioning by the product
                marketer. The marketing message is constructed in a manner that
                helps the buyers make well-informed decisions.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-7 mb-7">
          <p className="font-bold text-xl text-center"></p>
          <ol>
            <li>
              Take time to research the demographics, interview people in the
              industry, and analyze your customers to come up with accurate
              personas that you can build marketing strategies for.
            </li>
            <li>
              Be intentional about writing good content. Make use of keywords
              that can help you rank better. Use writing editing software to
              proofread your content to ensure it is grammatically correct.
            </li>
            <li>
              Use your insights. Refer to campaigns and check the analytics.
              Have a team meeting and come up with new and creative solutions
              based on past marketing results. Ensure to track B2B marketing
              metrics and KPIs.
            </li>
            <li>
              Build relationships with your target customers and even other
              businesses and influencers. They’ll help you spread the word about
              your brand.
            </li>
            <li>
              Try to offer a service that is unique to your business. Something
              they cannot get from a competitor. You can offer a freemium as a
              means of getting users to become advocates the way Hubspot does.
            </li>
            <li>
              Use Emotional campaigns that will have your prospects perceive
              your brand positively. It is wise to find a mid-point between both
              emotional and rational campaigns. This is because emotional
              campaigns are great for brand building while rational campaigns
              are good at short-term sales activation.
            </li>
          </ol>
        </div>
        <Image
          className=" w-full  mt-3 mb-4  relative  w-full bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />

        <h4 className="text-xl font-bold text-center">
          Harness a team of experts to hack your business growth with
          data-driven strategies and insight from years of experience working in
          the B2B and startup scene- that's us
        </h4>
        <p className="mt-5 mb-5">
          Marketing your products and services to customers is difficult but
          marketing to businesses is even harder. You’ll need to be more
          thorough with content and more concerned about forming relationships
          with prospects in order to properly appeal to them by bringing
          solutions to their pain points.{" "}
        </p>
        <p className="mt-5 mb-5">
          This is why you should trust Elan Africa, an agency that helps your
          business grow and helps you reach your customers wherever they may be.
          Elan Africa offers a free consultation to small businesses, startups,
          and tech firms to get them started on their journey to business
          growth.{" "}
        </p>

        <Link href="/Contact">
          Here’s where you can book your free consultation.
        </Link>
      </article>

      <div>
        <h3>Comments:</h3>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
        <input
          type="text"
          placeholder="Add a comment..."
          onChange={(e) => handleAddComment(e.target.value)}
        />
      </div>

      <div>
        <h3>Likes: {likes}</h3>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  );
}

export default Post11;
