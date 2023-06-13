import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/elanblogg3.jpg";
import Link from "next/link";

function Post2() {
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

      <article className="m-4 mt-9 container mb-5">
        <h2 className="text-3xl font-bold text-center">
          How to Do Social Media Marketing for Small Businesses.
        </h2>
        <Image
          className=" w-full h-full  "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-5 mb-2">
          According to Datareportal, there are now more than 5.18 billion
          internet individuals, making up almost 65% of the world’s population!
        </p>

        <div>
          <p className="mb-2">
            Several small businesses are expanding their marketing efforts
            digitally, using social media as a tool to reach a wide audience and
            increase visibility. In this article, we will review what social
            media marketing is, the right platforms to use, best practices for
            social media, and common mistakes you should avoid.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-center text-xl mb-4">
            What is Social Media Marketing?
          </h4>
          <p>
            Social media marketing is the use of social media platforms and
            websites to promote a product or service. It is simply the use of
            social media to market your products or services.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 mt-4">
            What Social Media Platforms Should Small Businesses Use?{" "}
          </h4>
          <p className="mb-2">
            Although it is common practice to have a business page on as many
            social media platforms as possible, this is not a requirement for
            success.
          </p>
          <p className="mb-2">
            It's more important to review which platforms your target audience
            use the most and what is most suited for your business. For example,
            a pastry business would find most of its target audience on
            Instagram, Facebook, YouTube, and Pinterest. These platforms are the
            top choices for customers looking to buy pastries.{" "}
          </p>
          <p className="mb-2">
            Another detail to consider is understanding how these social media
            platforms work. Here are details you should know:{" "}
          </p>
          <div>
            <p>
              1. Facebook: Facebook continues to be the most used social media
              platform globally. It boasts over 2.989 billion monthly active
              users (Data in April 2023). It also has the largest demographic of
              users ranging from boomers to Gen Zs.
            </p>
            <p className="mb-2">
              Best Content Format: Long posts, photos, and videos usually
              perform well on Facebook.
            </p>
            <p className="mb-2">
              Pros: Works well for online advertising and running campaigns.
              Meta also offers a wide range of tools for small businesses.
            </p>
            <p className="mb-2">
              Cons: It is more of a generalist platform. Also, most younger
              users tend to spend less time on the platform.
            </p>
          </div>
          <div>
            <p className="mt-2 mb-2">
              2. Instagram: Functioning under the parent company Meta, Instagram
              is mostly used by a younger audience and works best for more
              specialized businesses.{" "}
            </p>
            <p className=" mb-2">
              Best Content Format: Visual content including videos, photos, and
              graphic designs works best on this platform. Although hashtags
              also matter, general visual aesthetics are very important to the
              audience. Several brands use a specific grid layout to achieve the
              look on their feeds.{" "}
            </p>
            <p className="mb-2">
              Pros: It can be linked to Facebook, allowing you to easily share
              your posts on both platforms. Instagram also works well for online
              advertising and has different features to support small
              businesses.
            </p>
            <p className="mb-2">
              Cons: Individuals older than 44 are not usually on this platform.
              Moreso, due to the demand for visual content, not all small
              businesses can effectively use the platform.{" "}
            </p>
          </div>
          <div className="mt-2 mb-2">
            <p className="mb-2">
              3. Twitter: Twitter is the 'conversation powerhouse'. Usually, the
              most important conversations happen on Twitter in tweets of less
              than 280 characters. This audience has more Millennials and Gen Zs
              than boomers.{" "}
            </p>
            <p className="mb-2">
              Best Content Format: Written content works best on this platform.
              Although visual or audio content can be posted, tweets are more
              likely to receive engagement.
            </p>
            <p className="mb-2">
              Pros: It's a great platform to practice social listening. Twitter
              is also good for community building and engagement.
            </p>
            <p className="mb-2">
              Cons: Small businesses that depend on the use of visuals to
              showcase their products might be at a disadvantage. The age grades
              active on the platform are limited.{" "}
            </p>
          </div>
          <div className="mt-2 mb-2">
            <p className="mb-2">
              4. LinkedIn: With over 900 million professionals accessing this
              platform across the globe, LinkedIn remains the biggest platform
              for professionals.{" "}
            </p>
            <p className="mb-2">
              Best Content Format: Long posts, photos, and videos work well on
              this platform.
            </p>
            <p className="mb-2">
              Pros: LinkedIn allows paid advertising. Encouraging employees to
              post about the business can also increase visibility. Moreso,
              small businesses in the B2B sector might find LinkedIn more suited
              for them.{" "}
            </p>
            <p className="mb-2">
              Cons: This platform is mostly viewed as a place for company PR
              than an actual sales platform.
            </p>
          </div>
          <div className="mt-2 mb-2">
            <p className="mb-2">
              5. YouTube: This is mostly used for educational and entertainment
              purposes.{" "}
            </p>
            <p className="mb-2">
              Best Content Format: Visual content particularly videos work best
              on YouTube. Other content formats might not perform well.
            </p>
            <p className="mb-2">
              Pros: Both long-form and short-form video content work well on the
              platform. The YouTube video 'comment' section is an amazing place
              to engage with customers. Several users prefer to read comments
              first before watching a video of interest.
            </p>
            <p className="mb-2">
              Cons: YouTube is majorly for videos. Small businesses might find
              it strenuous to keep up with their post frequency on this
              platform.
            </p>
          </div>
          <div className="mt-2 mb-2">
            <p className="mb-2">
              6. TikTok: Mostly used by the younger generation, TikTok is also a
              fast-growing social media platform.{" "}
            </p>
            <p className="mb-2">Best Content Format: Video content.</p>
            <p className="mb-2">
              Pros: It offers a sense of community. TikTok is also the place to
              stay updated about what is trending.{" "}
            </p>
            <p className="mb-2">
              Cons: Most of its users are relatively young. This might be
              restrictive if your target audience are boomers. You might also
              face privacy issues due to personal data insecurity.{" "}
            </p>
          </div>
          <div className="mt-2 mb-2">
            <p className="mb-2">
              7. Pinterest: This platform is dubbed as the place to find
              'inspiration'. Fashion designers, cake makers, and other creatives
              use this platform to display their art. Most users explore it for
              ideas, entertainment, and inspiration.{" "}
            </p>
            <p className="mb-2">
              Best Content Format: Visual content, particularly images.{" "}
            </p>
            <p className="mb-2">
              Pros: Helps with brand visibility and sales. Pinterest pins can be
              discovered by anyone and you can easily drive traffic to your
              online store from the platform.
            </p>
            <p className="mb-2">
              Cons: Overnight success is not common on the platform, marketing
              results might take some time to show. Due to the nature of the
              content, images have to be creative and of high quality.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-center text-xl mb-4">
              Mistakes To Avoid Using Social Media Marketing For Small
              Businesses
            </h4>

            <div>
              <ul>
                <li>
                  <span className="font-bold">
                    Sharing content in the same format:{" "}
                  </span>
                  Several small businesses often share their content on
                  different platforms in the same formats. This reduces the
                  level of engagement they receive on these platforms and makes
                  it less interesting. For example, a witty tweet would perform
                  better on Twitter than sharing a graphic design from
                  Instagram.
                </li>
                <li>
                  <span className="font-bold">Ignoring Page Analytics: </span>
                  Page analytics are a great way to understand your post and
                  page performance. By reviewing this data, you can analyze your
                  best-performing posts and understand what your audience wants
                  to see.
                </li>
                <li>
                  <span className="font-bold">
                    Jumping on everything trending:{" "}
                  </span>
                  This is a constant 'trend' with small businesses to jump on
                  everything that is trending on social media. Although this
                  might give more visibility and exposure, it's usually
                  temporary and might even be contradictory to your brand
                  values. Rather than jumping on a trending mental health issue,
                  you can focus on how to build a supportive and sustainable
                  mental health community.
                </li>
                <li>
                  <span className="font-bold">Ignoring negative reviews:</span>
                  Bad publicity is still publicity. By responding to negative
                  reviews in a professional manner and following up with action,
                  you can increase your credibility and trust. This also shows
                  your customers that you are always listening
                </li>
                <li>
                  <span className="font-bold">Posting inconsistently: </span>
                  Inconsistent posts are often the reason why small businesses
                  are not growing. To increase mental availability, you must
                  ensure you maintain the same posting frequency. You can decide
                  how many times you want to post every week, this helps you to
                  show up more consistently.
                </li>
                <li>
                  <span className="font-bold">Lack of brand authenticity:</span>
                  It's important to establish your brand identity early and also
                  stick to it.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h4 className="font-bold text-center text-xl mb-4">
              Best Practices For Small Businesses Doing Social Media Marketing
            </h4>

            <div>
              <ul>
                <li>
                  <span className="font-bold">Understand Your Goals:</span>
                  Your goals are what you aim to achieve and will guide your
                  social media marketing strategy. It's important to set SMART
                  goals and also consistently review them. Important goals for
                  small businesses include brand awareness, visibility, and
                  sales.
                </li>
                <li>
                  <span className="font-bold">Understand Your Audience: </span>
                  Based on your target audience research, you should invest time
                  in understanding your audience, the kind of content they
                  enjoy, and which platforms they are most likely to be on. A
                  good way to do this is by checking your competitors' pages to
                  see what their customers enjoy. You can also check online
                  forums to view frequently asked questions and other queries.
                </li>
                <li>
                  <span className="font-bold">Practice Social Listening:</span>
                  Social listening allows you to learn and jump on conversations
                  related to your brand. There are different free social
                  listening tools that small businesses can use for their social
                  media marketing.
                </li>
                <li>
                  <span className="font-bold">Have a Content Plan:</span>
                  Winging content is not healthy for social media marketing.
                  It's important to have a content calendar or plan covering a
                  number of days, weeks, or months. This helps content flow and
                  reduces inconsistencies.
                </li>
                <li>
                  <span className="font-bold">
                    Repurpose content into different formats:
                  </span>
                  Creating a carousel post from a blog post or transcribing a
                  podcast episode into a newsletter are good ways to repurpose
                  content into different formats. By doing this, you can keep
                  your content flowing and also ensure your target audience can
                  access it in whichever format they prefer.
                </li>
              </ul>
            </div>
            <div className="mt-4 mb-4">
              <p className="text-italics">
                Disclaimer: Repurposing can be exhausting for small businesses
                with small marketing teams. It's important to focus on what
                format would best give value.
              </p>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <div>
              <ul>
                <li>
                  <span className="font-bold">
                    Focus on building a community:
                  </span>
                  By building a community from your target audience, you can
                  interact with them and share new products and services
                  directly with them. You can receive feedback and share
                  important information with them.
                </li>
                <li>
                  <span className="font-bold">
                    Focus on sustainability not virality:
                  </span>
                  Contrary to popular opinion, virality might give a small
                  business visibility however it does not grant sustainability.
                  It's important to focus on long-term growth rather than
                  short-term. This helps build trust and strengthen your
                  community.
                </li>
                <li>
                  <span className="font-bold">
                    Analyze results and make adjustments:{" "}
                  </span>
                  Consistent review of your social media performance can help
                  you to understand what kind of content is helpful. It is also
                  important to constantly adjust your content plan accordingly.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <p className="text-2xl font-bold text-center mb-3">Conclusion </p>
            <p className="mb-3">
              Social media marketing can be fun for small businesses, it gives
              you freedom to be creative and connect directly with your
              customers. By implementing some of the best practices,
              understanding the platforms, and avoiding mistakes, small
              businesses can use social media to grow and make sales.
            </p>
          </div>
          <div>
            <hr className="my-4 border-gray-300" />
          </div>
        </div>
      </article>
      <div>
        <p>Recent Posts</p>
      </div>
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

export default Post2;
