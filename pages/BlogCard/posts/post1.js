import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/brandidentity.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post1() {
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

      <article className="m-4 mt-9 container mb-5">
        <Image
          className=" w-full h-full relative"
          src={Hero}
          alt="home hero"
          priority
        />
        <h2 className="text-xl font-bold text-center">
          Inside Elan Africa Series: Creating A Brand Identity For SMEs - Elan
          lead designer, Ebuka.
        </h2>
        <p className="mt-5 mb-2">
          The <span className="font-bold">Inside Elan Africa</span> Series
          delves into the world of digital marketing through the eyes and
          experiences of Elan Africa Creatives. From brand identity, and web
          development to leading a remote marcomms team, these interviews offer
          insights into what African-based SMEs and startups should know about
          business growth.
        </p>

        <div>
          <p className="mb-2">
            Ebuka Olisaemeka is Elan Africa's lead designer and 'in-house
            celebrity'. In this interview, we will learn more about creating a
            brand identity and debunk common myths about it.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 mt-4">
            {" "}
            Hi Ebuka, the word, 'Brand identity' gets thrown around a lot. What
            is brand identity? Break it down.
          </h4>
          <p>
            In primary and secondary school, we were asked in English class to
            write about ourselves.
          </p>
          <p>
            In the world of networking, people ask us to tell them about
            ourselves.
          </p>
          <p>
            That's how brand identity works. If your business was a person, how
            would it describe itself? When you get that answer, you get your
            brand identity.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 mt-4">
            Awesome, What's a major factor to consider in creating a brand
            identity?{" "}
          </h4>
          <p className="mb-2">
            Brand identity should be the first thing to create before kicking
            off because you have to be aware of how the public views your brand.
            A major pointer would be to consider your target audience and what
            they like.
          </p>
          <div>
            <p>
              If I am a soft-spoken person and I want to sell to punk rockers, I
              have to make sure my brand is loud. A lot of people make the
              mistake of doing it according to their preferences or personal
              style.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 mt-4">
              What details make up a brand's identity?
            </h4>

            <p>
              Brand name, logo, tagline, colors, fonts, patterns, brand voice,
              video backgrounds, mascot, jingle, etc
            </p>
            <p>
              This is a really long list. It depends on your kind of brand. For
              example, while a sports or food brand might use a mascot, a
              finance brand wouldn't.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 mt-4 ">
              For most SMEs, the focus is profitability beyond anything else.
              How important is the brand identity for them before any plans of
              scaling?
            </h4>
            <p>
              Profitability is important. Scaling is important too but
              regardless of what you do and how great your product is, there are
              a million other competitors. You stay ahead of them with a great
              brand identity so that your target audience can remember and keep
              coming to you.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 mt-4">
              As a designer, how important are design details in brand identity?
            </h4>
            <p>
              The difference between art and design is this; while art is open
              to different interpretations, design is communicating a single
              message.
            </p>
            <p>
              So it's important because the brand's identity is communicated
              with designs which is the best way to keep a lasting memory in the
              viewer's minds.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 mt-4">
              The phrase 'strong brand identity' gets thrown around a lot. What
              makes a brand identity 'strong'?
            </h4>
            <p>When I say Fanta, you think about fun, yellow etc.</p>
            <p>
              When I say Wizkid, you think about this guy that doesn't talk
              much. Just sings and goes back to chill.
            </p>
            <p>
              This is what a strong brand identity is. When people can tell what
              your brand is all about in simple terms without having to explain
              yourself much.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 mt-7">Debunking Myths…</h4>
            <p>
              You can not change any detail in your brand identity once it's
              set.
            </p>
            <p>
              You can but it's best not to, except absolutely necessary. As I
              said earlier, brand identity should be the first point of action
              and it requires a lot of thought
            </p>
            <p>
              If by chance you need to change things when the operation has
              begun, let it be minor changes only. A major change, such as
              color, logo, jingle, etc should come with a lot of PR to update
              your clients.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 mt-7 ">
              Creating a brand identity is very expensive.
            </h4>
            <p>
              Yes, it is. This is because your modus operandi is dependent on
              what your brand identity is. The print materials are dependent on
              it. Your ads are all dependent on it as well.
            </p>
            <p>
              So in the long run, you spend a lot of money, time, resources, and
              energy. It might not seem like much but think about changing it
              and spending all this from the top.
            </p>
            <p>Gerrit?</p>
          </div>
          <div className="mt-7">
            <p>
              Only big brands need to create a brand identity, small businesses
              don't.
            </p>
          </div>
          <div className="mt-7">
            <p>
              If you check most big brands' social media pages, they aren't
              consistent with posting. This is because they are known now.
            </p>
            <p>
              As a small brand, no one knows you so you need a solid and
              memorable brand identity to rise in the charts.
            </p>
          </div>
          <div className="mt-7">
            <h4 className="text-xl font-bold mb-4 mt-4">
              Knowledge Sharing Corner…
            </h4>
            <p className="font-bold">
              Share 3 secrets behind successful brand identity.
            </p>
          </div>
          <div>
            <ul>
              <li>Creativity</li>
              <li>Powerful storytelling</li>
              <li>Timelessness</li>
            </ul>
          </div>
          <div className="mt-7">
            <h4 className="text-xl font-bold mb-4 mt-4">
              What's one mistake designers make in creating a brand identity and
              how can they avoid it?
            </h4>
            <p>Listening to the client's every word.</p>
            <p className="mb-4 mt-4">
              Now before you cancel me for "not knowing what I'm talking about",
              think about this... If your client wants to create a beer brand
              and loves a bright yellow color with doodles of children playing
              in a sunny field, would you support this? I guess not.
            </p>
            <p className="mb-4 mt-4">
              The people to look out for are your client's target audience. What
              do they want to make the brand stay in their heads? You're the
              professional so you know what's best for your client. You need to
              learn how to convince and negotiate to make them listen and
              understand that you have to do what needs to be done but if they
              disagree with your point of view. You can create multiple designs
              which include the client's desired details and professional
              requirements, then leave it for the client to pick from. Remember
              your goal is to bring out the image in your client's imagination.
            </p>
            <p className="mb-4 mt-7">
              It was amazing learning about brand identity from Ebuka. If you
              have further questions or need consultation on creating a brand
              identity, send us a message at team@elanafrica.com
            </p>
            <p className="mb-4 mt-7">
              Next, we will explore what SMEs should know about social media
              management from Ifeoma. See you soon.
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

export default Post1;
