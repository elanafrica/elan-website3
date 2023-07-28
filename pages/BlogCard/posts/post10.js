import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/smetarget.jpg";
import Hero1 from "../../../public/assets/elanblog4.png";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post10() {
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
        <Image
          className=" w-full h-full mt-3 mb-4 relative"
          src={Hero}
          alt="home hero"
          priority
        />
        <h2 className="font-bold text-xl text-center mt-4 mb-4">
          A Guide to How SMEs can identify Their Target Audience
        </h2>
        <p className="mt-4 mb-4">
          Small and medium-sized enterprises are currently on the rise. Aside
          from the crucial role they play in the economy, SMEs are effective for
          personalized sales and can quickly adjust to growing market demands.
          Sub-saharan Africa alone has 44 million micro, small, and medium
          enterprises; they are also responsible for an estimated 80% of jobs
          across the continent.
        </p>
        <p className="mt-4 mb-4">
          One of the most important factors for success for SMEs is to identify
          their target audience. Identifying your target audience helps you to
          create effective marketing strategies.
        </p>
        <h4 className="font-bold text-2xl text-center mt-4 mb-4">
          But first, who is your target audience?
        </h4>
        <p className="mt-4 mb-4">
          A target audience is a group (specific) of consumers targeted by your
          marketing efforts. These are the people who will most likely need or
          buy your product or service. Your service or product will not be
          needed by everyone, defining and identifying your target audience
          saves time, and effort and generally allows you to increase revenue.
        </p>
        <p className="mt-4 mb-4">
          Here is a complete guide on how you can identify your target audience.
        </p>

        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Define Your Product & Service
          </h4>
          <p className="mt-4 mb-4">
            Defining and understanding your product and service is a crucial
            step to identifying your target audience. Here are a few details and
            questions that can guide you:
          </p>
          <ol className="mt-3 mb-3">
            <li>What problems are you solving?</li>

            <li>What makes your product or service unique?</li>
            <li>What are the benefits of your product?</li>
          </ol>
          <p className="mt-4 mb-4">
            The next step is to review your answers by comparing them to the
            real needs in your environment. You should ensure your product and
            service are relevant to your environment. For example, an African
            skincare brand in Lagos–the busiest city in Nigeria–offering
            logistics services can solve the problem of slow deliveries. The
            same brand can be unique in its product packaging by adding
            personalized notes alongside deliveries.
          </p>
          <Image
            className=" w-full h-full mt-3 mb-4 relative bg-cover "
            src={Hero1}
            alt="home hero"
            priority
          />
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Research Your Target Market
          </h4>
          <p className="mt-3 mb-2">
            There are different methods for finding your target market and
            whilst there is no one-size-fits-all method, thorough research is
            still important. You can take the digital route by using several
            resources including online databases, industry reports, and surveys.
            You can also use social media to monitor conversations and
            activities. Another method is to do some physical surveys depending
            on your niche. Using the African skincare brand example, industry
            reports and research papers on skin care issues in Nigeria can
            provide insights. A social media platform like Twitter would also be
            useful for social listening and tracking conversations. You can also
            include interviews with people who use a similar product to
            understand them better. It's advisable to use multiple channels to
            conduct your market research to get as much information as possible.{" "}
          </p>
          <p className="mt-3 mb-2"></p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Analyze Your Competitors
          </h4>
          <p className="mt-3 mb-2">
            Competitor analysis is the process of evaluating your competitors'
            business, products, and marketing strategies. To understand the
            target audience, you can review your competitors' audience on social
            media to learn more about the people engaging with their posts. It's
            important to note you should not rely on your competitors' analysis
            as a standalone method. However, it helps you to narrow down your
            target audience and create personas from them.
          </p>
          <p className="mt-3 mb-2"></p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Research Customer Demographics
          </h4>
          <p className="mt-3 mb-2">
            Demographics usually include basic and important information about
            your potential customers. These details also narrow down your target
            audience and allow you to decide which category you are going for.
            These details can include:
          </p>
          <div className="mt-3 mb-3">
            <ul>
              <li className="mt-2 mb-2">Age</li>
              <li className="mt-2 mb-2">Location</li>
              <li className="mt-2 mb-2">Marital status</li>
              <li className="mt-2 mb-2">Income</li>
              <li className="mt-2 mb-2">Education</li>
              <li className="mt-2 mb-2">Employment status</li>
            </ul>
          </div>
          <p className="mt-3 mb-2">
            Demographic details vary from business to business. If the SME
            example, the African skincare brand was based in Nairobi, we would
            need to factor in income, marital status, and employment status.
            However, a confectionery store might not be very concerned with
            customers' education.{" "}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Understand Customer Psychographics
          </h4>
          <p className="mt-3 mb-2">
            Customer Psychographics, according to Merriam Webster, is market
            research or statistics classifying population groups according to
            psychological variables (such as attitudes, values, or fears).
            Whilst demographics help you to understand your target audience's
            statistical attributes such as income and age, psychographics allows
            you to learn more about their interests, activities, and opinions.
            Using our example of the African skincare brand, by understanding if
            some of your target audience has a bias against organic products,
            you can create a marketing strategy to educate them. Some of your
            future customers might love to spend time outdoors as an activity,
            this detail can also help you market your product's sunscreen
            properties. To understand your customer psychographics, you can use
            a focus group to gather insights or social media to monitor
            conversations and understand their interests.
          </p>
          <p className="mt-3 mb-2"></p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Identify Customers Needs, Pain Points, and Preferences
          </h4>
          <p className="mt-3 mb-2">
            Once demographics and psychographics are done, you can identify your
            target audience's needs, pain points, and preferences. Pain points
            are problems faced by current or prospective customers. A good way
            to identify pain points is how frustrating they are. Going by our
            example, customers' pain points can be the high cost of skin care
            products or lack of skin care education for users.
          </p>
          <p className="mt-3 mb-2">
            By using insights gathered from focus group discussions, and social
            media research, you can highlight users' pain points more easily.
            You can also create surveys for your target demographics and
            psychographics. These surveys should include questions that reveal
            their pain points and preferences.{" "}
          </p>
          <Image
            className=" w-full h-full mt-3 mb-4 relative bg-cover "
            src={Hero1}
            alt="home hero"
            priority
          />
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Create Buyer Personas
          </h4>
          <p className="mt-3 mb-2">
            Buyer Personas are semi-fictional representations of your ideal
            customers. Buyer Personas are created from data and research. They
            contain demographic details including age and income. Also included
            in the document are pain points and preferences. There are several
            free buyer persona templates for SMEs on the internet. They help to
            categorize the information and can be a guide for your marketing
            strategy easily.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Test and Analyze
          </h4>
          <p className="mt-3 mb-2">
            You can test this by creating content and analyzing your engagement.
            This will also help you to review your target audience and narrow it
            down. Alternatively, you can create surveys to review customers'
            needs. It's important to also review your target audience and
            document updates that can gudeugour general marketing efforts or
            product creation.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Conclusion
          </h4>
          <p className="mt-3 mb-2">
            Identifying the target audience is important for SMEs in Africa. It
            saves time and research, allowing SMEs to understand their
            customer's needs, pain points, and attributes. By implementing the
            strategies above, SMEs can create streamlined and successful
            marketing strategies, better products and services, and generally
            increase business revenue.
          </p>
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

export default Post10;
