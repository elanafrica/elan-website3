import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/customerexperiencedirectmarketing.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post18() {
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
        {/* <p>
          {post.name} . {post.date} . 2min read
        </p> */}
        <h2 className="font-bold text-xl text-center mt-4 mb-4">
          Customer experience that enhances direct marketing and advocacy
        </h2>
        <p className="mt-4 mb-4">
          Through the years, business giants have said that great customer
          service helped their businesses to scale. At Elan, we are concerned
          about helping small businesses scale and that is why this is a must
          read for all businesses looking to hack their customer experience
          game. It is worthy to note that research in South Africa estimated
          that the cost of people switching from a company because of poor
          customer service is worth USD47 billion.
        </p>
        <Image
          className=" w-full h-full mt-3 mb-4 relative "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="text-center text-2xl font-bold">The simple facts...</p>
        <p>
          Treating your customers well will convert them from just customers to
          advocates and this is how you can get referrals. One instance is the
          case of Printivo whose success came when an International Journalist
          tweeted about the great customer experience she had with the company.
        </p>
        <p className="mb-4 mt-4">
          Temitope Ekundayo, the co-CEO at Printivo had said, "customer service
          is important to us. For us, it’s about improving the delight of our
          customers and improving their experience when they order. We always
          ensure that we keep to the agreement and will move mountains to get it
          done. The customer experience starts before the order comes in, and
          continues well after they’ve made their purchase. Whenever we go
          wrong, we ensure that we make up for it. The goal is to get customers
          to have such a good experience that makes them come back".
        </p>
        <p>
          At any stage of a business, customer satisfaction is highly important
          even more at the initial stage because bad reviews will dissuade
          prospects.{" "}
        </p>
        <p className="mt-4 mb-4">
          According to <i>Hubspot Research,</i>{" "}
        </p>

        <p className="mb-4">
          "the amount it costs to acquire a new customer is more for a company
          that doesn't invest a small percentage of its budget in customer
          service. They also found out that 72% of customers will share a
          positive experience with six or more people. "
        </p>
        <p className="mb-3">
          In an infographic compiled by Experience Dynamics, it was noted that
          “52% of users said that a bad mobile experience made them less likely
          to engage with a company”, it was also stated that 79% of people who
          don’t like what they find on one site will go back and search for
          another site. Your UX is important for a good customer experience and
          in turn, it is important for marketing and sales.
        </p>

        <div>
          <hr className="my-4 border-gray-300" />
        </div>
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

export default Post18;
