import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/propergrowthmarketing.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post16() {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      const commentObject = {
        id: comments.length + 1,
        text: commentInput,
        // You can add additional properties to the comment object like name, timestamp, etc.
      };
      setComments((prevComments) => [...prevComments, commentObject]);
      setCommentInput(""); // Clear the comment input after adding the comment
    }
  };

  const handleLike = () => {
    setLikes((prevLikes) => (prevLikes ? prevLikes - 1 : prevLikes + 1));
  };
  return (
    <div>
      <div className="">
        <Navbar />
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
        <h2 className="font-bold text-xl text-center mt-4 mb-4">
          Why your business needs proper growth marketing.
        </h2>
        <div className="w-full h-full object-cover">
          <video className="w-full h-full" controls>
            <source src="https://youtu.be/MXgCDM-GfRY" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <p>
          According to the European Union (EU), SMEs are micro, small, and
          medium-sized enterprises which employ fewer than 250 persons and have
          an annual turnover not exceeding 50 million Euros. In Nigeria, the
          Central Bank of Nigeria monetary policies circular No. 22 of 1988
          defined SMEs as enterprises that have an annual turnover not exceeding
          Five Hundred Thousand Naira (N500,000).
        </p>
        <p className="font-italics mt-4 mb-4">
          <span className="font-bold ">A quick tip:</span>
          While your business operations exist within the context of the CBN
          policy above, aspire for goals that meet up with the more globally
          accepted EU position. Yes, the peculiar challenges exist, but the
          opportunities within the African context are much more.
        </p>
        <p className="mt-3 mb-3">
          Essentially, business owners are risk takers who play a role in
          driving economic and industrial transformation of any country while
          reducing the unemployment rate.
        </p>
        <p className="mb-3 mt-3">
          {" "}
          In the past, many small businesses did not have a working marketing
          strategy. This, no doubt has contributed to the stagnation (and in
          many cases ‘the end’) of many SMEs in Africa. The knowledge gap and
          unwillingness to test marketing tools that could propel their business
          to the global market have also contributed to this.{" "}
        </p>
        <p className="mt-3 mb-3">
          Businesses had varying ways of gaining customers, some of the
          traditional techniques were:
        </p>
        <div className="mb-3 mt-3">
          <ul>
            <li>Use of flyers and handbills</li>
            <li>Putting up posters and signages</li>
            <li>Telemarketing (cold calling)</li>
            <li>Word of mouth or referrals</li>
            <li>Face-to-Face interactions.</li>
          </ul>
        </div>
        <p className="mb-3">
          Some of these methods are still effective today (if done right with
          the right expertise). However, businesses employing these methods are
          less likely to scale to unicorn status than those taking advantage of
          the more modern growth, sales, and marketing techniques.
        </p>
        <p className="mb-2 mt-4 font-italics">
          ‘Marketing attracts prospects, prospects become buyers, and buyers
          provide profit.”{" "}
        </p>
        <p className="mt-5 mb-3">
          Marketing is more than just putting your business name out into the
          world. According to SME360, the primary aim of marketing for SMEs in
          Africa and beyond is to generate more sales.{" "}
        </p>
        <Image
          className=" w-full h-full mt-3 mb-4 relative  bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-3 mb-3">
          After the pandemic in 2020, marketing became an integral part of many
          businesses that had defined their growth goals. Small businesses in
          Africa should employ growth marketing strategies to keep their
          business afloat. Other benefits of having proper marketing for your
          business are:
        </p>
        <div>
          <ul>
            <li>1. It aids your business to be more visible to Investors.</li>
            <li>
              2. It helps boost sales. Drives company growth across all areas,
              as increased sales, equals improved business capacity.
            </li>
            <li>3. It helps you identify and focus on new opportunities.</li>
            <li>4. It helps your business to stay relevant in the industry.</li>
            <li>
              5. It is a way of keeping your customers engaged in your brand.
            </li>
            <li>
              6. It helps you to find out the needs of customers and provide
              them.
            </li>
            <li>7. It helps to give you insight into your business.</li>
            <li>
              8. It educates your customers about your product and services.
            </li>
          </ul>
        </div>
        <p className="mb-3 mt-3">
          Your small business might be doing quite alright as it is still one
          thing is sure, it can do way better with clearly thought-out growth
          goals and proper marketing. Conduct thorough research on your target
          market’s expectations and pain points, perfect your product offering,
          and select the appropriate marketing channel to create awareness about
          your products. You can rely on a creative growth marketing agency well
          versed in helping small and medium enterprises scale to promote your
          business.
        </p>
      </article>

      <div>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <p key={comment.id}>{comment.text}</p>
        ))}
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>

      <div>
        <h3>Likes: {likes}</h3>
        <button onClick={handleLike}>Like</button>
      </div>
    </div>
  );
}

export default Post16;
