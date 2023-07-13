import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/deademailmarketing.jpg";
import Link from "next/link";

function Post9() {
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
          Is Email Marketing Dead?
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4 relative bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-3 mb-2">
          Email marketing has been around for decades and continues to be one of
          the most cost-effective and measurable methods for businesses to reach
          out to their customers. While some may argue that social media or
          other marketing channels have surpassed email marketing in terms of
          ROI, the fact remains that email marketing provides the highest ROI of
          any marketing channel, with an average return of $42 for every $1
          spent .
        </p>
        <p className="mt-3 mb-2">
          Despite the rise of newer marketing channels, email marketing retains
          its ability to connect with customers on a more personal level.
          Businesses can segment their email lists and deliver personalised
          messages to each individual recipient using advanced email marketing
          tools. This can result in increased engagement, improved customer
          loyalty, and, ultimately, increased sales. Furthermore, email
          marketing is a scalable and measurable marketing channel that allows
          businesses to optimise campaigns using valuable data analytics. With
          all of these benefits, it's no surprise that email marketing remains
          an essential component of any successful digital marketing strategy.
        </p>

        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            What is Email Marketing?
          </h4>
          <p className="mt-3 mb-2">
            Email marketing is the process of sending messages to a large group
            of people via email, as a way of marketing a product, service or
            event which is used to drive sales and promote customer loyalty,
            build relationships, and increase awareness of a brand. It is
            unarguably one of the most cost-effective methods of digital
            marketing, allowing businesses to reach a large audience with
            relatively low investment.
          </p>
          <p className="mt-3 mb-2">
            Email campaigns can be tailored to each individual customer,
            allowing companies to provide highly personalised messages. This can
            also be used to target existing customers, potential leads, and
            testimonials for website visitors. Effective email marketing
            campaigns can help businesses connect with their target audience,
            drive traffic to their website, and increase sales.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            What is Email Marketing?
          </h4>
          <p className="mt-3 mb-2">
            Email marketing is the process of sending messages to a large group
            of people via email, as a way of marketing a product, service or
            event which is used to drive sales and promote customer loyalty,
            build relationships, and increase awareness of a brand. It is
            unarguably one of the most cost-effective methods of digital
            marketing, allowing businesses to reach a large audience with
            relatively low investment.
          </p>
          <p className="mt-3 mb-2">
            Email campaigns can be tailored to each individual customer,
            allowing companies to provide highly personalised messages. This can
            also be used to target existing customers, potential leads, and
            testimonials for website visitors. Effective email marketing
            campaigns can help businesses connect with their target audience,
            drive traffic to their website, and increase sales.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Benefits of Email Marketing
          </h4>
          <p className="mt-2 mb-3">
            Email marketing is an excellent way to engage with your target
            audience and potential customers.
          </p>
          <p className="mt-3 mb-2">
            Here are a few benefits of email marketing:
          </p>
          <div>
            <p className="mt-3 mb-2">
              <span className="text-bold">Cost-effective: </span>
              Email marketing is a cost-effective way to communicate with your
              customers, as it eliminates the need for printing and postage
              costs.
            </p>
            <p className="mt-3 mb-2">
              <span className="text-bold">Increased brand awareness: </span>
              By sending regular emails to your target audience, you can
              increase brand awareness and visibility.
            </p>
            <p className="mt-3 mb-2">
              <span className="text-bold">Better customer engagement:</span>
              Email marketing allows you to personalize your communication and
              address customers’ specific needs and interests, leading to better
              engagement and higher conversion rates.
            </p>
            <p className="mt-3 mb-2">
              <span className="text-bold">Increased website traffic:</span>
              Email marketing campaigns can drive higher website traffic,
              leading to more sales and conversions.
            </p>
            <p className="mt-3 mb-2">
              <span className="text-bold">Enhanced customer loyalty:</span>
              Regular communication with your customers through email marketing
              can create a sense of loyalty, leading to increased customer
              retention and higher customer lifetime value.
            </p>
            <p className="mt-3 mb-2">
              <span className="text-bold">Easy to measure: </span>
              With email marketing, you can easily track and measure the success
              of your campaigns. You can see how many people opened your emails,
              clicked on links, and made purchases.
            </p>
            <p className="mt-3 mb-2">
              <span className="text-bold">Mobile-friendly: </span>
              Many people check their email on their phones these days, so it is
              important to ensure that your mails are easy to read and navigate
              on a mobile device.
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            5 Tips and Benefits of Email Marketing in Businesses
          </h4>
          <Image
            className=" w-72 h-full mt-3 mb-4 relative bg-cover "
            src={Hero}
            alt="home hero"
            priority
          />
          <p className="mt-3 mb-2">
            <span className="text-bold">
              Personalize your emails by including the recipient’s name and
              other relevant information.{" "}
            </span>
            This can help increase engagement and make people more likely to
            read your emails.
          </p>
          <p className="mt-3 mb-2">
            <span className="text-bold">
              Make sure your emails are mobile-friendly.
            </span>
            Many people check their email on their phones these days, so it’s
            important to ensure that your emails are easy to read and navigate
            on a mobile device.
          </p>
          <p className="mt-3 mb-2">
            <span className="text-bold">
              Use clear and concise language in your emails.
            </span>
            Be sure to get your message across quickly and effectively, without
            using too many words or complex language. Ensure your email is void
            of grammar and spelling errors.
          </p>
          <p className="mt-3 mb-2">
            <span className="text-bold">
              Include a clear call-to-action in your emails.{" "}
            </span>
            Whether you want people to visit your website, make a purchase, or
            simply reply to your email, be sure to include a clear and
            compelling call-to-action to encourage them to take action.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-center mt-4 mb-4">
            Conclusion
          </h4>
          <p className="mt-3 mb-2">
            In conclusion, email marketing is not dead, in fact, it is more
            alive and well than ever. It is still one of the most reliable and
            effective forms of online marketing. Email marketing, when done
            right, has proven to be a successful method for driving leads,
            sales, website visits and increasing customer loyalty over the
            years. Even with the emergence of new marketing tools, email
            continues to remain a powerful tool for digital marketing.
          </p>
          <p className="mt-2 mb-5">
            Overall, email marketing is an essential tool for any business that
            wants to grow its customer base and increase its revenue.
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

export default Post9;
