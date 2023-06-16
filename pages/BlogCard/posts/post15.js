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
    <div className="container">
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
          All the Talk about the perfect business plan for business growth!
        </h2>
        <Image
          className="  w-full h-full mt-3 mb-4 relative bg-cover  "
          src={Hero}
          alt="home hero"
          priority
        />
        <p>
          Everyone refers to a business plan as a road map that guides a
          business in the right direction. The importance Elan places on your
          business plan and getting it right will let you know that it’s more
          than just a road map. A business plan encompasses long-term and
          short-term goals, sales targets, and expense budgets. The best way we
          put it is, that your business plan should give a strong perception of
          your company's future valuation, customer base, and market reach.
        </p>
        <p className="mt-3 mb-3">
          Both start-ups and already existing businesses need it to scale. It
          serves as a guide to let you know when you are making the right
          financial decisions or taking the right steps that will lead you to
          achieve the goal you had for your business.
        </p>
        <h4 className="font-bold text-center text-2xl mt-3 mb-3">
          The 3 types of business plans we recommend
        </h4>
        <p className="mb-3 mt-3">
          Depending on the time frame, the need, or the size of your company,
          There are 3 types of business plans- A One-page business plan, a Lean
          business plan, and an External business plan.
        </p>
        <div>
          <ul>
            <li>
              <span className="font-bold">The one-page business plan:</span>When
              As a business in its initial stage needs to frame out its ideas,
              the one-page business plan is advisable, it is also good as a way
              of introducing your business to investors with a document that
              contains the necessary information in one glance. This in a sense
              is the most difficult to aggregate but gives a sign of a business
              that has been carefully thought out.
            </li>
            <li>
              <span className="font-bold">The lean business plan: </span>
              As the name suggests excludes some information that is already
              known to members of the organization because this plan is used
              in-house only. This document goes a long way to sensitize existing
              teams about company metrics and markets (that actually matter) and
              should be a source of inspiration about company values and
              culture.
            </li>
            <li>
              <span className="font-bold">The external business plan: </span>
              Finally, It is advisable to get an external business plan because
              this document is helpful in attracting investors and applying for
              loans, and sensitizing new employees on the company’s operations,
              structure, and goals. This is the real deal and what most
              businesses seek to adopt as they launch.
            </li>
          </ul>
        </div>

        <div className="mt-7 mb-5">
          <p className="mb-2 mt-2">
            In the African business environment, There are a good number of
            funding opportunities available to startups, the question is are you
            ready to grab these opportunities. The proof of your readiness
            starts with the outlook of your business or business plan. An
            excellent business plan can hook the investors and guarantee you're
            receiving their support.
          </p>
          <p className="mb-2 mt-2">
            A quick example of a start-up that got a head start by having a
            great business plan is EcoPost, a company owned by Lorna Rutto of
            Kenya. They won a business plan competition organized by the Cartier
            Women’s Initiative and received a prize award of nearly $12,000.
          </p>
          <p className="mb-2 mt-2">
            Don't you think it’s time to get started on your plan? It goes
            without saying that failing to have a plan for your business could
            mean business failure.
          </p>
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
