import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/elanblogg.jpg";
import Link from "next/link";

function Post4() {
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
          How to create a Marketing Plan that Works.
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4 relative bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-2 mb-5 font-italics">
          gnoring online marketing is like opening a business but not telling
          anyone. — KB Marketing Agency
        </p>
        <p className="mt-4 mb-4">
          Several entrepreneurs and businesses are often too focused on building
          a viable and amazing product or service. While this is good, a major
          pitfall is that most of them ignore or put less effort into their
          marketing plan.
        </p>
        <p className="mt-4 mb-4">
          Although the term 'marketing' is broad, it is generally defined as the
          process of promoting and selling products or services. Marketing
          includes traditional advertising, social media marketing, blogging,
          influencer marketing, and podcast as well. To create a good plan, it's
          important to find a good marketing framework to guide you.
        </p>
        <h4 className="font-bold text-xl text-center mt-4 mb-4">
          But first, what's a marketing framework or mix?
        </h4>
        <p className="mt-4 mb-4">
          Marketing involves different tools that businesses use to achieve
          their objectives. The mixture of these tools is known as a marketing
          mix. These mixes help us to understand the product and guide the
          marketing plan. Although there are several marketing mixes including
          5Ps, 7Ps, and 8Ps, the 4Ps are the foundational framework for most
          marketing plans.
        </p>
        <p className="mt-2 mb-4">
          The 4Ps of the marketing mix are product, price, placement, and
          promotion.
        </p>
        <div className="mt-4 mb-4">
          <p className="mt-4 mb-4">
            <span className="font-bold ">1. Product:</span>
            This involves a service or product that is designed to satisfy a
            user's needs and wants. Before creating your marketing plan, you
            will need to understand the product or service. Here are some
            questions that can be a guide:
          </p>
          <ul>
            <li className="mt-2 mb-2">
              Is it a specific product or a service?
            </li>
            <li className="mt-2 mb-2">What problem does the product solve?</li>
            <li className="mt-2 mb-2">
              Who are the target customers for the product/service?
            </li>
            <li className="mt-2 mb-2">What makes the product stand out?</li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <p className="mt-4 mb-4">
            <span className="font-bold ">2. Price: </span>
            This is the cost a customer pays for the product or service. Several
            businesses focus only on their competitors' prices rather than
            evaluating their customer's needs and product value. To understand
            pricing in marketing, it's essential to ask these questions:
          </p>
          <ul>
            <li className="mt-2 mb-2">
              What value does the product or service offer?
            </li>
            <li className="mt-2 mb-2">
              How much do the competitors charge for similar products?
            </li>
            <li className="mt-2 mb-2">
              What can your target consumers afford?
            </li>
            <li className="mt-2 mb-2">
              What is the lowest and highest price that the product can sell
              for?
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <p className="mt-4 mb-4">
            <span className="font-bold ">3. Placement: </span>
            This answers the question of where the product or service can be
            found or marketed. Several years ago, products would be in a store
            or a TV Ad, however, digital innovations have changed marketing and
            distribution. Products can be marketed on social media, magazines,
            or even podcasts. For this part of the framework, you will need to
            consider where your product would be placed. Here are some questions
            to guide you:
          </p>
          <ul>
            <li className="mt-2 mb-2">
              Where is your target audience (online and offline)?
            </li>
            <li className="mt-2 mb-2">
              Where will products and services be placed?
            </li>
            <li className="mt-2 mb-2">
              How accessible are the products and services?
            </li>
          </ul>
        </div>
        <div className="mt-4 mb-4">
          <p className="mt-4 mb-4">
            <span className="font-bold ">4. Promotion:</span>
            The last of the 4Ps framework is promotion. This covers all the
            tactics and efforts involved in reaching the right audience at the
            right time. For example, an African e-commerce store that sells
            back-to-school items would have its peak sales just before school
            resumption. To use the promotion framework, increasing their
            marketing efforts to parents and guardians a few weeks before
            resumption would boost sales. This is the effect of reaching the
            right audience at the right time. Promotion tactics include word of
            mouth, blogging, paid advertising, and email marketing.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            5 Steps To Building A Marketing Plan That Works.
          </h4>
          <p className="mt-4 mb-4">
            Once you understand the framework, it becomes easier to market the
            product and service. Marketing plans are developed with different
            goals in mind, depending on the business objectives and product
            nature.
          </p>
          <p className="mt-4 mb-4">
            For example, the marketing goal of a fashion brand during the
            holiday season would be sales while a confectionery store yet to
            launch might want engagement and awareness.
          </p>
          <p className="mt-4 mb-4">
            Here are 5 steps to creating a marketing plan that works.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Conduct a SWOT Analysis
          </h4>
          <p className="mt-4 mb-4">
            You should analyze both the business and its past marketing efforts.
            SWOT analyses are quite detailed and help you to focus on important
            details. Were the past marketing efforts successful? If not, you
            will need to understand what went wrong in order to prevent it from
            happening again. For example, if a KidsWear brand has had
            unsuccessful marketing campaigns for footwear products, you might
            have to review the product, the marketing tactics, and most
            importantly the audience's reaction to it. A detailed SWOT analysis
            can provide this.{" "}
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Define Your Goals
          </h4>
          <p className="mt-4 mb-4">
            Your goals are what you hope to achieve through the marketing plan.
            To create a marketing plan that works, your goals should be SMART.
            SMART goals are specific, measurable, attainable, relevant, and
            time-bound.{" "}
          </p>
          <p className="mt-4 mb-4">
            "Increase email subscribers" is not a SMART goal.
          </p>
          <p className="mt-4 mb-4">
            "Increase email subscribers by 10% in 3 months." is a SMART goal.
          </p>
          <p className="mt-4 mb-4">
            It is specific, measurable, and can be achieved within a time frame.
            It's important to note that a marketing plan can have more than one
            goal and your goals should define what tactic you employ.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Define Your Target Audience.{" "}
          </h4>
          <p className="mt-4 mb-4">
            Your target audience are your potential customers. These are the
            people you want to attract to your product or service. Oftentimes,
            your target audience cuts across a wide demographic and can be a lot
            to document. Using buyer personas can save time and help you gain
            clarity on customer needs.
          </p>
          <p className="mt-4 mb-4">
            Buyer personas show at a glance, information about your customer,
            their pain points, and needs. These are several free buyer persona
            templates you can use in your marketing plan.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Plan Your Strategy
          </h4>
          <p className="mt-4 mb-4">
            Once you define your target audience and goals, you can set your
            marketing strategy. Strategies involve the right channels, content,
            and action items for your marketing.{" "}
          </p>
          <p className="mt-4 mb-4">
            For example, if your goal is to increase email subscribers, you can
            create a free resource, a personalized quiz, or award points for
            email referrals.
          </p>
          <p className="mt-4 mb-4">
            For example, Piggyvest, a Nigerian tech startup created a comic
            series showcasing the lives of young Nigerians and how they navigate
            their finances. This content strategy increased Ad clicks for the
            brand. It also shows their target audience enjoys good storytelling
            and Piggyvest created a creative platform to share it.
          </p>
          <p className="mt-4 mb-4">
            Adding a creative touch and keeping your target audience in mind
            while creating these strategies help you build a successful
            marketing plan.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Set Your Budget
          </h4>
          <p className="mt-3 mb-4">
            This defines what can run and what strategy might have to be
            adjusted.{" "}
          </p>
          <p className="mt-4 mb-4">
            Your marketing budget should include the cost of running each
            strategy and marketing efforts. For example, your budget can include
            Ad costs, influencer rates, the cost of marketing tools like SEMrush
            payment, and much more.
          </p>
          <p className="mt-4 mb-4">
            A budget also helps you to know how much you are investing in the
            marketing plan.
          </p>
        </div>
        <div className="mt-5 mb-5">
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Measuring Success{" "}
          </h4>
          <p className="mt-2 mb-4">
            It's important to note that marketing plans differ in goals and what
            success metrics are used to run them. A marketing plan designed for
            boosting engagement and awareness should not use sales success
            metrics as a tool.{" "}
          </p>
          <p className="mt-4 mb-4">
            It's important to identify what tools work for which plan. For
            example, marketing plans for awareness are often measured by social
            media metrics, search ranking on search engines, and brand mentions.
          </p>
          <p className="mt-4 mb-4">
            Finally, once you get your results, you should analyze them and make
            changes to improve your work.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Conclusion
          </h4>

          <p className="mt-2 mb-3">
            Creating a marketing plan that works involves understanding and
            implementing the right framework. Applying the 4Ps marketing mix to
            understand the product, price, placement, and promotion guides your
            plans. It's important to understand how to create a marketing plan
            that works and use the right tools to measure and analyze your
            progress.
          </p>
          <p className="mt-3 mb-5">
            Want to create a marketing plan that works? Contact us to learn
            more.
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

export default Post4;
