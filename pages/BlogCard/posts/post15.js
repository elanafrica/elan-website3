import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/elanblog11.png";
import Link from "next/link";

function Post15() {
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

      <article>
        <h2 className="font-bold text-2xl text-center mt-4 mb-4">
          All the Talk about the perfect business plan for business growth!
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4  "
          src={Hero}
          alt="home hero"
          priority
        />
        <p>
          Marketing plays a crucial role in the growth and success of any
          business. However, with limited resources and budgets, it can be
          challenging to determine where to invest for maximum returns. In order
          to get the most out of your marketing budget, it is essential to
          carefully assess your options and prioritize your spending. One key
          factor to consider is your target audience. Depending on who you are
          trying to reach, certain marketing channels may be more effective than
          others. For example, if you are targeting a younger demographic,
          social media advertising may be the way to go. If your audience is
          older, traditional advertising methods such as television or print ads
          may still be effective.
        </p>
        <h4>
          Here are some tips on how to businesses can maximize their marketing
          budget
        </h4>
        <div>
          <ul>
            <li>
              Set clear and measurable marketing goals to help you track the
              effectiveness of your marketing activities.{" "}
            </li>
            <li>
              Determine your target audience and tailor your marketing efforts
              specifically to them.{" "}
            </li>
            <li>
              Invest in high-quality content that can be repurposed across
              different channels, such as blogs or videos.{" "}
            </li>
            <li>
              Use social media platforms strategically to reach a wider
              audience. Utilize paid advertising options on these platforms to
              target specific demographics.{" "}
            </li>
            <li>
              Focus on search engine optimization (SEO) to increase your
              visibility and rank higher in search engine results pages.{" "}
            </li>
            <li>
              Leverage on email marketing campaigns to keep in touch with
              existing customers and drive conversions.{" "}
            </li>
            <li>
              Consider partnering with other businesses and influencers to reach
              new audiences and increase brand awareness.{" "}
            </li>
            <li>
              Evaluate the effectiveness of your marketing campaigns regularly
              and adjust your strategies as needed to ensure you are getting the
              most out of your budget.
            </li>
          </ul>
        </div>
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

export default Post15;
