import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/elanblog1.png";
import Link from "next/link";

function Post5() {
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
          How to maximize your marketing budget
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4 relative  bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-2 mb-5">
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
        <h4 className="font-bold text-xl text-center mt-4 mb-4">
          Here are some tips on how to businesses can maximize their marketing
          budget
        </h4>
        <div className="mt-4 mb-4">
          <ul>
            <li className="mt-2 mb-2">
              Set clear and measurable marketing goals to help you track the
              effectiveness of your marketing activities.{" "}
            </li>
            <li className="mt-2 mb-2">
              Determine your target audience and tailor your marketing efforts
              specifically to them.{" "}
            </li>
            <li className="mt-2 mb-2">
              Invest in high-quality content that can be repurposed across
              different channels, such as blogs or videos.{" "}
            </li>
            <li className="mt-2 mb-2">
              Use social media platforms strategically to reach a wider
              audience. Utilize paid advertising options on these platforms to
              target specific demographics.{" "}
            </li>
            <li className="mt-2 mb-2">
              Focus on search engine optimization (SEO) to increase your
              visibility and rank higher in search engine results pages.{" "}
            </li>
            <li className="mt-2 mb-2">
              Leverage on email marketing campaigns to keep in touch with
              existing customers and drive conversions.{" "}
            </li>
            <li className="mt-2 mb-2">
              Consider partnering with other businesses and influencers to reach
              new audiences and increase brand awareness.{" "}
            </li>
            <li className="mt-2 mb-2">
              Evaluate the effectiveness of your marketing campaigns regularly
              and adjust your strategies as needed to ensure you are getting the
              most out of your budget.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Ideas on where businesses can invest their marketing budget
          </h4>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Social media advertising:</span>
            Social media platforms offer a large audience reach and affordable
            advertising options. Different social media platforms have different
            demographics, so businesses should choose the platforms their target
            audience is most active on. Social media ads, for example differ
            from platform to platform. Linkedin ads are different from Facebook
            ads.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Content marketing:</span>
            Creating valuable, informative, and engaging content can attract
            customers to a business's website or social media pages, and help
            establish the business as a thought leader in their industry.
            Content marketing can done using content in different formats
            including blog posts, infographics, videos and more.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Email marketing:</span>
            Email marketing is an effective way to maintain customer
            relationships and encourage repeat business. Businesses can send
            weekly or monthly newsletters, promotional emails, and automated
            emails for abandoned carts or follow-ups after a purchase.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">
              Search engine optimization (SEO):{" "}
            </span>
            SEO involves optimizing a website's content, structure, and metadata
            to increase its visibility in search engine results pages (SERPs). A
            higher ranking in SERPs can drive more organic traffic to a website
            and generate more leads.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Influencer marketing:</span>
            Businesses partner with social media influencers who have a large
            following and influence in a particular industry or niche.
            Influencers can promote a business' products or services to their
            followers who trust their recommendations and are likely to
            purchase.
          </p>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Benefits of maximizing your marketing budget
          </h4>
          <Image
            className=" w-72 h-full mt-3 mb-4 relative  bg-cover "
            src={Hero}
            alt="home hero"
            priority
          />
          <p className="mt-5 mb-3">
            Another consideration is the current market trends and competitors
            in your industry. It is important to stay up to date with what is
            working for others in your industry and adapt your own marketing
            strategies accordingly. This may mean investing in new technology,
            partnering with influencers, or focusing on content marketing.
            Ultimately, the key to maximizing your marketing budget is to
            constantly evaluate your efforts and adjust your strategies as
            needed. By carefully considering your target audience and the trends
            in your industry, you can make smart investments that will help you
            achieve your marketing goals and grow your business.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Brand awareness: </span>
            Effective marketing strategies can help increase brand awareness and
            recognition. This is important because it can lead to increased
            sales and customer loyalty.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Targeted marketing:</span>
            Maximizing your marketing budget means that you can target your
            marketing efforts to the right audience. This can help you reach the
            people who are most likely to be interested in your products or
            services, which can lead to higher conversion rates and sales.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">ROI:</span>
            Maximizing your marketing budget means that you're getting the
            greatest possible return on investment. By investing in strategies
            that have a proven track record of success, you can ensure that
            you're getting the most bang for your buck.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Limited resources: </span>
            For most companies, marketing budgets are limited, so it's important
            to make the most of them. If you're not maximizing your marketing
            budget, you could be wasting money on ineffective strategies that
            aren't reaching your target audience.
          </p>
          <p className="mt-4 mb-4">
            <span className="font-bold ">Competition:</span>
            Every business is competing for attention, so it's important to make
            your marketing budget count. If you're not maximizing your budget,
            your competitors will be able to outspend you and potentially steal
            customers.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Conclusion
          </h4>

          <p className="mt-5 mb-3">
            Overall, businesses should prioritize marketing strategies that
            align with their goals and target audience, and track and analyse
            their marketing performance to optimize their spending.
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

export default Post5;
