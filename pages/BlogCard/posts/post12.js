import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Hero from "../../../public/assets/freecourses.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post12() {
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
        <h2 className="font-bold text-2xl text-center mt-4 mb-4">
          5 Free Courses Every Founder & Entrepreneur Should ...
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4 relative"
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-5 mb-5">
          Building a business is hard but it can be easier to navigate if you
          have the right tools, resources and of course knowledge. At this
          point, you are either thinking of building your first product or
          business or are running your business.
        </p>
        <p className="mb-4">
          Usually building a startup or starting your business requires a lot of
          trial and error which inevitably helps you to grow. However, there are
          some mistakes you can't afford to make while starting out. There are
          also certain terminologies and structures you should understand early
          enough to avoid any future struggles.{" "}
        </p>
        <p className="mb-4 mt-4">
          To ensure you have all you need to start, we are sharing 5 free
          courses that every founder and entrepreneur should take.{" "}
        </p>

        <div className="mt-5 mb-5">
          <p className="font-bold text-xl ">1. Start Your Business by VC4A </p>
          <p className="mb-3">
            This course was created for entrepreneurs by VC4A. This course
            covers picking co-founders, understanding investors' expectations,
            building a team, knowing your customer and understanding your market
            landscape. Instructors include Rebecca Enonchong (AppsTech), Emeka
            Afigbo (Facebook), Ian Carnevale (Andela) and Kola Aina (Ventures
            Platform). Although the language is English, the transcript is
            available in French, Somali and Arabic.{" "}
          </p>
          <div className="w-full h-full player-wrapper">
            <ReactPlayer
              url="https://youtu.be/hsEwq60-5es"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <p>
            Time To Complete: 4-6 hours Course Format: Video and Text Learning
            Method: Self-paced Assessment: Quizzes Course: Start Your Business
            by VC4A
          </p>
        </div>
        <div className="mb-5 mt-5">
          <p className="font-bold text-xl">2. YC Startup School</p>
          <p>
            This is an important course for every entrepreneur. The YC Startup
            school was created by Y Combinator. For the YC startup school, you
            will learn how to review your startup ideas, navigate co-founder
            relationships, equity and much more. The lessons are easy to
            understand with real-life examples that you can relate to.
          </p>
          <div className="w-full h-full player-wraper">
            <ReactPlayer
              url="https://youtu.be/BUE-icVYRFU"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <p>
            Estimated Time To Complete: 7 weeks (If you take 1-2 hours a week)
            Course Format: Video and Text Learning Method: Self-paced Course: YC
            Startup School{" "}
          </p>
        </div>
        <div className="mb-5 mt-5">
          <p className="font-bold text-xl ">
            3. How To Build A Startup by Sam Altman
          </p>
          <p className="mb-4 mt-2">
            This course takes you through the very basics of building a startup
            with an amazing speaker line up including Kevin Hale and Adora
            Cheung. You will learn more about building products users love,
            fundraising, company culture, sales and marketing and even the
            basics of accounting. Estimated Time To Complete: 6 weeks (if you
            spend 2-3 hours a week) Course Format: Video and Text Learning
            Method: Self-paced Course: How To Start A Startup{" "}
          </p>
          <p>
            Estimated Time To Complete: 6 weeks (if you spend 2-3 hours a week)
            Course Format: Video and Text Learning Method: Self-paced Course:
            How To Start A Startup
          </p>
        </div>
        <div className="mb-5 mt-5">
          <p className="font-bold text-xl ">4. Finance Your Business by VC4A</p>
          <p className="mb-4 mt-2">
            Understanding financial terminologies can be a headache,
            particularly if you do not have a finance or accounting background.
            You can expect to learn how to create financial projections, how to
            understand capital providers and tips on presenting in public. The
            course also includes a guide on how to create your pitch deck and
            the kind of questions you should expect from investors.
          </p>
          <p>
            Estimated Time To Complete it: 3-5 hours Course Format: Video and
            Text Learning Method: Self-paced Course: Finance Your Business
          </p>
        </div>
        <div className="mb-5 mt-5">
          <p className="font-bold text-xl ">
            5. Angel Investing and Venture Capital by Dr Ola Brown.{" "}
          </p>
          <p className="mb-4 mt-2">
            Dr Ola Brown is the founder of The Flying Doctors Healthcare
            Investment Company. Flying Doctors also invests in
            technology-enabled early-stage and growth-stage businesses across
            the healthcare value chain. This course was created to help founders
            learn to know about angel investment, venture capital and
            terminologies you should know about fundraising and valuation. You
            don't want to go into fundraising without this knowledge.
          </p>
          <div className="w-full h-full player-wrapper">
            <ReactPlayer
              url="https://youtu.be/fqvBazlwXws?list=PL5fMQyC_4GPqqzrUBmtrNGiFmSkUoUcyf"
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <p className="mt-5 mb-5">
            Estimated Time To Complete it: 3-5 hours Course Format: Video and
            Text Learning Method: Self-paced Course: Finance Your Business
          </p>
          <p className="mb-5 mt-5">
            These courses are not only for founders and entrepreneurs but also
            for Growth marketers, Operations and Technical Leads. Taking these
            courses helps to set you on your entrepreneurial journey. Remember,
            the goal is not to have a stack of courses completed but to pick
            insightNot sure where to start? Elan Africa offers a free
            consultation for business owners and founders. You can contact us
            here. s that can help you on your entrepreneurial journey.{" "}
          </p>
          <p className="text-italics mb-4 mt-4"></p>
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

export default Post12;
