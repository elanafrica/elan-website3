import React, { useState } from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Hero from "../../../public/assets/11marketingstrategies.jpg";
import Link from "next/link";

function Post6() {
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

  const src = "https://youtu.be/pLENOvUVbz8";
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
          11 Marketing Strategies To attract and Retain...
        </h2>
        <p className="mt-2 mb-5">
          Increasing revenue is principal to the growth of any business. It's
          not enough to have a viable product, build an excellent team or even
          receive the right investment for your business–marketing allows your
          target audience to know you exist. As with different aspects of
          business growth and development, having a strategy for every form of
          marketing allows you to maximize opportunities better.
        </p>
        <Image
          className=" w-full h-full mt-3 mb-4 relative  bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-2 mb-3">But first, what is a marketing strategy?</p>
        <p className="mt-5 mb-3">
          A marketing strategy is defined as an organization's promotional
          efforts to increase sales and achieve its business goals. It
          encompasses all the marketing efforts on different platforms and
          channels to achieve the company's goals. It's important to have more
          than one marketing strategy to diversify marketing efforts.{" "}
        </p>
        <p className="mt-5 mb-3">
          A company must understand its target market to appeal to them, as well
          as how they behave and make decisions. Companies can create a
          marketing plan to achieve certain goals by keeping them in mind. The
          goals of a corporation are encapsulated in a marketing plan, and the
          marketing strategy consists of the plan's constituent parts and
          executes them. Because they feature value propositions and brand
          dynamics that don't vary much over time, marketing strategies often
          have longer lifespans and serve as an advisor to the marketing plan.
        </p>
        <div>
          <h2 className="font-bold text-2xl text-center mt-4 mb-4">
            How does a marketing strategy work?
          </h2>

          <Image
            className=" w-full h-full mt-3 mb-4 relative  bg-cover "
            src={Hero}
            alt="home hero"
            priority
          />
          <p className="mt-2 mb-5">
            The AIDAR model shows how a marketing strategy works:
          </p>
          <div className="mt-5 mb-3">
            <ul>
              <li>
                <span className="font-bold">Awareness </span>
                is the act of creating attention for the brand or service
                through various mediums
              </li>
              <li>
                <span className="font-bold">Interest</span>
                is the step of generating interest to encourage buyers to want
                to know more
              </li>
              <li>
                <span className="font-bold">Desire </span>
                means creating an emotional connection to the buyer so they want
                the product or like the brand
              </li>
              <li>
                <span className="font-bold">Action </span>
                can be different things for the company. It could be a step when
                the buyer picks up a brochure, calls to learn more, or makes a
                purchase
              </li>
              <li>
                <span className="font-bold">Retention </span>
                happens once someone becomes a customer, the business turns its
                focus to satisfying the customer, so they return and perhaps
                refer the company to friends and family.
              </li>
            </ul>
            <p className="mt-5 mb-5">
              Although there are several marketing strategies you can use for
              your business, here are 11 excellent marketing strategies you
              should implement.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-center mt-4 mb-4">
            11 Marketing Strategies To Attract and Retain Customers.
          </h2>

          <div className="mt-5 mb-3">
            <ul>
              <li>
                <span className="font-bold">
                  Make the onboarding process effective:{" "}
                </span>
                Customers will certainly remember any problems with customer
                service during their initial onboarding, such as information
                being handled incorrectly or not having a defined point of
                contact to guide them through the process. Even though your
                company can rapidly resolve those points of contention, it could
                still leave the customer with a negative impression. Beyond
                providing excellent customer service, a strong onboarding
                process should also consider how well the onboarding program
                works. Workflows with timely email triggers, follow-up
                messaging, self-service knowledge base access, and celebratory
                messaging are necessary for your company if you want to enthrall
                and impress potential customers.
              </li>
              <li>
                <span className="font-bold">User-Generated Content (UGC):</span>
                This type of content is created by customers or users on
                products and services. This content might be a photo, video,
                blog, review, discussion forum post, or comment made on a social
                media post. Our Eden Life, a home service-based startup shares
                tweet reviews by its customers to promote its services and build
                credibility. UGCs are important for marketing. You can encourage
                your customers to leave reviews or track their conversations
                about you using social listening.
              </li>
              <li>
                <span className="font-bold">Online directories:</span>A good
                method to increase brand visibility is to get listed on online
                directories. For example, an Agritech startup in Kampala would
                be listed in different directories including a list of Agritech
                startups in Africa, African business pages, or an Association
                Directory. It's important to note that some directories might be
                published as listicles on blog posts or articles. You might have
                to reach out to PR agencies or partners on how to get listed.
              </li>
              <li>
                <span className="font-bold">Referral Programs:</span>
                These types of programs attract and retain customers more
                rapidly. A good case study is Piggyvest, a Nigerian Fintech
                startup that offers a referral program in which its users earn
                specific amount for each new user that joins via their referral
                code. This allows the business to track conversion rates and
                have its existing customers do the marketing for them.
              </li>
              <li>
                <span className="font-bold">Influencer marketing: </span>
                Despite the popularity of the use of influencers for product
                promotion, this strategy remains very important for marketing
                success. It's important to consider factors like the type of
                influencer, your marketing budget, and of course your content
                plan for it. Influencer marketing can be in the form of a
                challenge or an advert. Renowned brand, Hugo Boss had famous
                movie star Chris Hemsworth create a Hugo Boss suit challenge in
                an amazing video. This sparked #suitchallenge on social media
                and increased engagement for the brand.
              </li>
              <div className="w-full h-full player-wrapper">
                <ReactPlayer
                  url="https://youtu.be/pLENOvUVbz8"
                  className="react-player"
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
              <li>
                <span className="font-bold">Video Marketing:: </span>
                Video content is not only relevant on Instagram, short-form
                videos are currently in high demand by users. These videos are
                usually less than 5 minutes and can be informative or funny. For
                Elan Africa, creating informative Instagram reels for founders
                like the 95-5 rule in B2B marketing helped several individuals
                understand the concept better.
              </li>
              <li>
                <span className="font-bold">Outbound marketing: </span>
                This relies on approaching consumers where they are and
                interfering with their regular activities to promote your goods
                and services. It can take the shape of spam, banner adverts, or
                old-school TV commercials. This marketing paradigm is turned on
                its head by inbound marketing. By providing useful material that
                meets their needs in exchange, you may draw visitors to your
                website. You may persuade visitors to provide their contact
                information and turn it into leads by using blog articles,
                videos, eBooks, reports, and other content types.
              </li>
              <li>
                <span className="font-bold">SMS marketing: </span>
                This is one of the simplest and most effective marketing
                strategies for SMEs. Although SMS marketing is not often
                employed, it helps to keep the brand in the customers' minds,
                update them on promotions and discounts and also attract new
                customers. MTN, a network provider in Africa and the Middle East
                uses SMS marketing to promote its latest services to its
                customers.
              </li>
              <li>
                <span className="font-bold">
                  Leveraging Social media campaigns:{" "}
                </span>
                Campaigns are coordinated marketing efforts that help a company
                achieve its goals. Social media campaigns, unlike everyday
                social media posts, are more targeted and measurable. Although
                most brands use social media campaigns for product promotion,
                they can also be used for engagement and brand awareness as
                well. In 2018, The OMO's 'Father's Day campaign in South Africa
                celebrated men who stood as father figures for non-biological
                children. This campaign triggered a much-needed conversation and
                garnered positive reviews.
              </li>
              <li>
                <span className="font-bold">Content repurposing: </span>
                This is a cost-effective strategy for product marketing. Content
                repurposing simply means reusing the elements of content or
                transforming its format. For example, a blog post could be
                repurposed into infographics for social media content. You can
                also convert video interviews into audio podcasts. This ensures
                your content goes out through multiple channels and reaches a
                larger audience.
              </li>
              <li>
                <span className="font-bold">
                  Answering questions on internet forums:{" "}
                </span>
                Whilst several businesses focus on creating their community,
                leveraging internet forums like NairaLand and Quora are
                effective marketing strategies. On these question-and-answer
                forums, several individuals including your target audience often
                seek answers that you can provide. By joining and actively
                participating in conversations, you can place your value
                proposition better to them.
              </li>
            </ul>
            <p className="mt-5 mb-5">
              Marketing strategies are usually most effective when properly
              planned and implemented. It's also important to note that
              constantly assessing the success of the strategy and reviewing
              analytics and performance helps you make better-informed
              decisions. For insights on how to create marketing strategies that
              can help your business grow, book a free consultation with us at
              Elan Africa.
            </p>
          </div>
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

export default Post6;
