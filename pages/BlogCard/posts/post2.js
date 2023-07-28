import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/mobileseo.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post2() {
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

      <article className="m-4 mt-9 container mb-5 ">
        <Image
          className=" w-full h-full relative"
          src={Hero}
          alt="home hero"
          priority
        />
        <h2 className="text-xl font-bold text-center">
          Top Mobile Extensions to boost SEO Performance
        </h2>
        <p className="mt-5 mb-2">
          In today&#39;s digital landscape, mobile optimization is paramount for
          any website aiming to succeed in search engine rankings. With more
          than 50% of internet users accessing websites via mobile devices,
          optimizing your site for mobile is crucial for improving Search Engine
          Optimization (SEO).
        </p>

        <div>
          <p className="mb-2">
            SEO, which stands for Search Engine Optimization, refers to the
            practice of optimizing a website to improve its visibility and
            ranking in search engine results pages (SERPs). To aid in this
            process, several mobile extensions have emerged, designed to enhance
            mobile optimization and boost your website's visibility on search
            engines.
          </p>
          <p className="mb-2">
            Here are some of the top mobile extensions to help improve SEO:
          </p>
        </div>
        <div>
          <h4 className="font-bold text-center text-xl mb-4">
            Mobile-Friendly Test
          </h4>
          <p>
            Mobile-Friendly Test extension is a valuable tool to assess your
            website's mobile compatibility. It allows you to check the
            mobile-friendliness of your website, analyses your site&#39;s mobile
            responsiveness, identifies issues, and provides recommendations for
            improvement. By addressing the recommendations provided by the test,
            you can ensure that your site meets Google&#39;s mobile-friendly
            criteria, improving its chances of ranking higher in mobile search
            results.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 mt-4">
            Schema App Structured Data
          </h4>
          <p className="mb-2">
            Implementing structured data can greatly enhance your website&#39;s
            visibility in search engine results. The Schema App Structured Data
            extension simplifies the process of adding structured data markup to
            your web pages, especially for mobile optimization. With structured
            data in place, search engines can better understand and display your
            content in rich snippets, knowledge panels, and other search
            features. This improved visibility can lead to higher click-through
            rates and increased organic traffic from mobile search users.
          </p>

          <div className="mt-7">
            <h4 className="text-xl font-bold mb-4 mt-4">Mobile SEO</h4>

            <p className="mb-2">
              Mobile SEO is a comprehensive extension that focuses on optimizing
              your website for mobile devices. It offers a range of features,
              including mobile page speed analysis, mobile-friendly testing, and
              mobile-specific recommendations. The extension helps you identify
              and resolve mobile SEO issues, such as mobile page speed
              optimization, viewport configuration, and mobile usability. By
              following its recommendations, you can enhance your website&#39;s
              mobile SEO performance and provide a seamless user experience on
              mobile devices.
            </p>
          </div>
          <div className="mt-7">
            <h4 className="text-xl font-bold mb-4 mt-4">
              Mobile Optimization Initiative
            </h4>

            <p className="mb-2">
              The Mobile Optimization Initiative extension is a collaborative
              project by Google and several other industry leaders. Its goal is
              to assist webmasters in optimizing their websites for mobile
              devices. This extension offers a range of tools and resources,
              including mobile testing tools, best practices, and optimization
              tips. By leveraging the insights and recommendations provided by
              this extension, you can enhance your website&#39;s mobile SEO
              performance.
            </p>
          </div>
          <div className="mt-7">
            <h4 className="text-xl font-bold mb-4 mt-4">
              Accelerated Mobile Pages (AMP)
            </h4>

            <p className="mb-2">
              Accelerated Mobile Pages is an open-source initiative led by
              Google. This extension creates stripped-down versions of web pages
              that load almost instantly on mobile devices. By implementing AMP,
              your website benefits from improved loading speed and enhanced
              mobile user experience, both of which are crucial ranking factors
              in search engine algorithms.
            </p>
          </div>
          <div className="mt-7">
            <h4 className="text-xl font-bold mb-4 mt-4">Conclusion</h4>

            <p className="mb-2">
              Mobile optimization is an integral part of SEO strategy, and
              utilizing the right extensions can significantly improve your
              website's visibility and ranking on search engines. From enhancing
              mobile page speed to implementing structured data, these top
              mobile extensions provide valuable features and insights to help
              you optimize your site for mobile devices.
            </p>
            <p className="mb-2">
              By investing in mobile optimization, you can provide an excellent
              user experience to mobile visitors and increase your chances of
              attracting organic traffic through improved SEO.
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

export default Post2;
