import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/elanblog5.png";
import Link from "next/link";

function Post9() {
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
          Invest Wisely: 5 Things to Know Before You Start
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4 relative  bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <h4 className="font-bold text-xl text-center mt-4 mb-4">
          Invest Wisely: 5 Things to Know Before You Start
        </h4>
        <p className="mb-3">
          Choosing what to invest in can be both daunting and exciting task.
          However, knowing when and what to invest in can significantly increase
          your chances of success. In this article, you'll discover 5 things to
          keep in mind before seeking investments and how to do it right. So,
          let's dive right into it.
        </p>
        <h4 className="font-bold text-xl text-center mt-4 mb-4">
          Understand your Investment Goals
        </h4>
        <p className="mb-3">
          Before seeking investment options, you need to consider the following:
        </p>
        <div>
          <ul>
            <li className="mt-2 mb-2">
              <span className="text-bold"> Investment Type: </span>
              What are you investing in? Stocks, bonds or cash equivalent. For
              example, when you buy stocks in a company, you become a partial
              owner. This means when the company become more valuable, your
              share of the company also increases in value. However, bonds are
              loans where the investor is the creditor and receives a specific
              percentage of yields. Whatever you decide, ensure you understand
              it.
            </li>
            <li className="mt-2 mb-2">
              <span className="text-bold"> Time frame: </span>
              What is the duration of the investment? Is it short term (which is
              less than three years) or long term? Knowing this will help you
              know what to put in and your expected returns.
            </li>
            <li className="mt-2 mb-2">
              <span className="text-bold"> Risk and Return Factor: </span>
              How risky is the venture or business you're investing in? Are you
              investing in stocks which have high risks with higher returns or
              are you opting for low-risk investments such as savings accounts?
              It is important to consider the risk while making any investment.
            </li>
            <li className="mt-2 mb-2">
              <span className="text-bold"> Tax implications: </span>
              What are the implications of your investments on tax? There are
              certain investments that come with tax benefits that may improve
              your returns. It would be wise to opt for such.
            </li>
            <li className="mt-2 mb-2">
              <span className="text-bold"> Fees and charges: </span>
              Depending on what you're investing in, fees and charges may vary.
              Opting for investments with low fees upfront during any sales
              process is recommended and can save you more money.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Research Your Investment Options
          </h4>
          <p className="mt-2 mb-2">
            Before you decide to invest your hard-earned money, do a thorough
            research and choose the investment option that is best for you.
            Investigate the past performance of any potential investments by
            looking at the historical data for a particular asset before
            investing in it. You can also contact other investors in that
            industry for more insights. The value of due diligence cannot be
            overemphasized.{" "}
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Calculate the Cost of Investing
          </h4>
          <p className="mt-2 mb-2">
            It's essential to calculate the cost of investing before venturing
            into it. These costs can vary depending on the type of investment,
            the amount you invest and whether or not you use a broker.
          </p>
          <p className="mt-2 mb-2">
            Since brokerage firms use fees and commissions to charge for their
            services, it is important to look for a broker with competitive fees
            and commissions so that your investments remain profitable.
          </p>
          <p className="mt-2 mb-2">
            Another thing to consider is the management fee.{" "}
          </p>
          <p className="mt-2 mb-2">
            This is what mutual funds or other managed investments charge for
            their services. These fees may range from 0.5 percent to 2 percent
            and can significantly reduce your returns if not carefully accounted
            for.
          </p>
          <p className="mt-2 mb-2">
            It is also important to investigate any applicable taxes before
            moving forward with an investment plan. Depending on where you live,
            taxes may be applicable when buying or selling investments as well
            as when withdrawing profits from an investment account. Therefore,
            taxes should also be taken into consideration when calculating the
            cost of investing.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Find the Right Financial Professional
          </h4>
          <p className="mt-2 mb-2">
            When it comes to investments, all financial professionals are not
            created equal. Before you even start to consider any investment
            opportunities, take the time to find the right financial
            professional for you. Make sure that the financial professional has
            years of experience in the field and that you trust their judgment
            and knowledge. You can also ask for references from other clients so
            that you can get an idea of how the financial professional works
            with others and handles customer service issues.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Know When to Get Professional Advice
          </h4>
          <p className="mt-2 mb-2">
            Although it is possible to manage your investments on your own,
            getting professional advice can be an invaluable resource.
            Professional advisors have in-depth knowledge of the markets,
            expertise in managing portfolios and access to additional tools and
            resources that you may not have access to.
          </p>
          <p className="mt-2 mb-2">
            So, once you understand your investment goals, risk tolerance and
            your current financial situation, you can begin the search for a
            qualified financial advisor. Keep in mind that the advisor must put
            your interests first when providing advice or making
            recommendations. With the right adviser on your side, your
            investments will be managed responsibly.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Conclusion
          </h4>
          <p className="mt-2 mb-2">
            In conclusion, making sensible investments involves meticulous
            planning. By investing the time to study the fundamentals, you will
            be prepared for success in everything from trend research to market
            analysis to hiring knowledgeable financial advisers.
          </p>
          <p className="mt-2 mb-2">
            It is crucial to take the necessary precautions to make sure your
            investments will produce the best returns while safeguarding your
            hard-earned money because investing can be a risky venture. By being
            diligent and consulting experts, you can achieve your financial
            goals.
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

export default Post9;
