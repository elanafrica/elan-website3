import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/mentalhealth.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post14() {
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
        <h2 className="font-bold text-xl text-center mt-4 mb-4">
          Mental Health in the Workplace: How To Build Safe Spaces...
        </h2>
        <p className="mb-5 mt-7">
          A few months ago in Nigeria, several employees took to Twitter to
          express their frustrations about toxic workplaces and employers. These
          work environments are usually marked with ill-treatment, verbal abuse,
          and unreasonable work demands. The recent outcry has forced several
          team leads and employers to question their work culture and style of
          leadership.{" "}
        </p>
        <p className="mb-2">
          Interestingly, a survey carried out by WellNewMe shows that 4 in 5
          employees are at risk of mental health issues. Not surprisingly,
          anxiety disorders are fast becoming one of the top mental health
          problems in the workplace. These disorders can range from panic, and
          excessive fear to unnecessary worry and medication-induced anxiety.
        </p>
        <Image
          className=" w-full h-full mt-3 mb-4 relative  bg-cover "
          src={Hero}
          alt="home hero"
          priority
        />
        <p className="mt-4 mb-4">
          As an employer or team leader, it is important to create a safe space
          for your team. Every employee wants to be in a workplace that makes
          them feel safe, understood, and appreciated. This, in turn, helps them
          to increase their productivity and loyalty to their organizations.
        </p>
        <p className="mb-3 mt-4">
          In this blog post, we will be sharing five top tips for creating a
          safe mental health space for your employees.
        </p>

        <p className="mb-4 mt-4">
          <span className="font-bold text-xl">
            1. Create Safe Work Cultures
          </span>
          One of the major deterrents to creating a safe space at the workplace
          is the lack of good work culture. In most organizations, there is no
          structure protecting employees from verbal abuse, unreasonable work
          demands, or ill-treatment. As a team leader, you should strive to
          promote a good work culture. A good work culture should, for example,
          promote transparency, a growth mindset, trust, respect, fairness, and
          communication. If you are not certain about your employees' needs, you
          can schedule meetings to have conversations with them to understand
          their needs.
        </p>
        <p className="mb-4 mt-4">
          <span className="font-bold text-xl">2. Be A Listener</span>
          Employees value employers who are willing to listen to them and
          understand them. This freedom of expression builds more loyalty in
          them. Moreso, when employees struggle to express themselves, they tend
          to withdraw emotionally, simply doing their jobs and nothing more. To
          ensure this does not happen, it's important to create an environment
          where everyone in your organization can feel heard. You can schedule
          meetups or hangouts with your team, allowing them to express
          themselves and share their concerns. You should also work on listening
          more to them.
        </p>
        <p className="mb-4 mt-4">
          <span className="font-bold text-xl">3. Understand Your Team</span>
          It is important to understand your team and their needs. Do you have
          more Gen Zs than Millennials? Are there also baby bloomers? There is a
          wide difference in how Gen Z, millennials, and baby bloomers expect a
          safe mental health space should look. For example, Gen Zs prefer a
          space where they can discuss their fears without any judgment. On the
          other hand, Millennials appreciate support but enjoy having control as
          much as possible. Understanding your team can guide how you set up
          structures or create a healthy work environment for them.
        </p>
        <div>
          <p className="mb-4 mt-4">
            <span className="font-bold text-xl">
              4. Treat Mistakes Differently
            </span>
            Verbal abuse is usually triggered by mistakes made by employees. In
            most cases, your employees are already overwhelmed by a sense of
            guilt and shame when they make a mistake, shouting, screaming, or
            insulting them only makes them feel more ashamed. When this happens,
            they become afraid to fail or even try anything new for their
            organization. This can cost your organization a lot as innovation
            might reduce. You can create a safe space by treating mistakes or
            errors differently. Here are a few tips on how to handle employee
            mistakes:
          </p>
          <ul>
            <li>Teach them to focus on the lessons, not the guilt</li>
            <li>Speak to them calmly and respectfully.</li>
            <li>Practice empathy</li>
            <li>Guide them on what to do.</li>
          </ul>
        </div>
        <p className="mb-4 mt-4">
          <span className="font-bold text-xl">
            5. Educate Your Team on Mental Health
          </span>
          Several employees have little knowledge of their mental health. Sadly,
          some of them are not aware of self-care steps to take. You can invite
          mental health experts, psychologists, or psychiatrists to speak with
          your team. These sessions can be quarterly or bi-annual and should
          allow your employees to have one-on-one sessions with these experts.
        </p>
        <p className="mt-3 mb-3">
          Creating a safe space for your team is a continuous process of
          improvement and change. As you work to establish healthy structures,
          your employees become aware that you care about them and can also grow
          in a healthier work environment.{" "}
        </p>
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

export default Post14;
