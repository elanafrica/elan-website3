import React, { useState } from "react";
import Image from "next/image";
import Hero from "../../../public/assets/remoteteams.jpg";
import Link from "next/link";
import Navbar from "@/components/Navbar";

function Post15() {
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
          11 Tips For Managing Remote Teams In Africa.
        </h2>
        <Image
          className=" w-full h-full mt-3 mb-4 relative  "
          src={Hero}
          alt="blog hero"
          priority
        />
        <p>
          As digitalization continues to dominate and become the norm in this
          age, work systems are also changing as well. Moreso, not all startups
          or small and medium sized enterprises can afford to get an office
          space fast enough. Although the telecommuting is said to have been
          coined in 1973, remote jobs were still not very popular. However, it
          became more popular over the next forty years—largely aided by the
          COVID-19 pandemic. Presently over 100,000 Africans work remotely for
          organisations in and outside the continent.
        </p>
        <h4 className="font-bold text-center text-xl mt-4 mb-4">
          But first, what is a remote role?
        </h4>
        <p className="mb-2 mt-2">
          To work remotely is to work from any geographical location with or
          without going onsite. Remote roles can be completely virtual or even
          hybrid in nature. For the virtual roles, this means that the role is
          fully remote and all communications will be done via the internet i.e.
          the use of emails, Slack or Whatsapp. However, for hybrid positions,
          the roles will require working on-site for a specific number of days
          and working from anywhere else. For example, you can work on-site for
          2 days in the week and work remotely or from home for the other 3
          days.{" "}
        </p>
        <p className="mt-2 mb-2">
          Several organizations in Africa are already catching up with the
          remote job wave in order to retain talents on the continent. Although
          certain professionals such as construction managers or the production
          team for physical products might not be able to work remotely, other
          individuals like social media managers, content writers, data analysts
          and project managers can ease into the remote life.
        </p>
        <p className="mt-2 mb-2">
          If you are a business owner in Africa, you will, at one point or the
          other, need a remote team to kickstart a project or handle a deal.
          However, several founders are afraid that it would be harder to
          monitor remote teams or ensure that deliverables are met. You have
          nothing to fear. We have curated the best tips for managing a remote
          team effectively.
        </p>
        <div>
          <p className="mt-4 mb-3">
            <span className="font-bold">
              {" "}
              1. Establish communication channels{" "}
            </span>
            Managing remote teams can be fun if you work on clear and consistent
            communication. The best way to do this is to establish communication
            channels early. Would you be using Slack app and gmail? Would your
            team prefer WhatsApp? You also have to consider which platforms you
            want to use for meetings. The popular choice is either Google Meet
            or Zoom. One thing to bear in mind is that you should use virtual
            communication channels that the whole team can access easily. Here
            are a few pointers on that:
          </p>
          <ul>
            <li>
              <span className="font-bold">Accessibility:</span>
              Is it accessible to your team? For example, Slack is available for
              use, however there are some downsides to it. If you are using the
              free version, then a huddle would be limited to just two members
              at a time.
            </li>
            <li>
              <span className="font-bold">Timeliness:</span>
              Will message notifications come in on time? Team members are bound
              to miss messages or updates if your messenger app notifications
              are slow.
            </li>
            <li>
              <span className="font-bold">Privacy:</span>
              Business details are usually sensitive and you have to ensure your
              communication channels are not prone to hacks. Moreso, you should
              work at protecting the privacy of your staff.
            </li>
          </ul>

          <p className="mb-2 mt-2">
            As with many technologies, virtual messenger apps can crash or go
            down without prior notice. You should always have a backup plan for
            this by having two communication channels.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">2. Push for clear communication</span>
            Unfortunately, a downside to messaging apps is that it is easy to
            misunderstand one another or misinterpret a person's tone. For
            remote teams, you should push for clear communication. This means
            when a text or email can not convey what you mean, you can send a
            voice note or make an audio or video call to explain or discuss
            better. You should also encourage all team members to do this.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">
              3. Have contact details and emergency lines of team mates{" "}
            </span>
            Imagine waiting for a team member to respond to the stand up call
            and there is no response. Wild right? Oftentimes, they could be
            experiencing internet problems or personal issues. Having their
            contact details can help you understand what the situation is.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">4. Establish the rules</span>
            To effectively manage your team, you need to set clear rules. For
            example, for your communication channels, how long do members have
            to respond to a message? Are there clear boundaries on what can be
            shared on the general communication page? What is your clock in time
            and when are your closing hours? You can fix a meeting to go over
            all the rules with your teammates.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">
              5. Ensure you have team bonding exercises
            </span>
            Team bonding exercises are gold, literally! Several team members
            might be tense or always walking on eggshells during work hours.
            Team bonding sessions help to ease the tension and allow team
            members to learn more about each other. There are several fun
            virtual games and team bonding exercises your team can play. Moreso,
            you can ask team members to come up with fun games that you can play
            as a team.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">
              6. Always check in with your team on their progress report.
            </span>
            Aside from setting a deadline for deliverables, you should always
            check in with your team at different stages of the project. You can
            pop in 'virtually' and ask where they are on their task. This
            motivates your team members to get their job done faster. Moreso,
            this also helps you to keep track of their progress and understand
            how they work better.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">7. Provide Virtual Training.</span>
            Although this might not be very common, training is not restricted
            to physical meetings. You can organize training sessions on growth,
            how to foster good collaborations or self development. Ensure you
            select training sessions that are updated with the latest industry
            trends, whilst also tailored to your personal company needs. You can
            check for how to get these training sessions{" "}
            <Link href="/ElanTraining">here</Link>
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">
              8. Work With A Project Management Tool.
            </span>
            Although some founders and managers have not embraced this, using a
            project management tool to manage your team can make all the
            difference. Team members might know their deliverables but setting
            it on a project management tool makes it clear. It also makes it
            easy to monitor project progress. They can also reference it if they
            have any questions. There are various tools like Trello and Asana
            with different free and paid plans.
          </p>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">
              9. Consider Technologies And Environmental Factors/Challenges.
            </span>
            Make it a point of duty to understand what technologies your team
            would be using for their work and if there is anything you will have
            to provide to make their work easier. This will improve task
            delivery time and allow them to work better. You should also learn
            about their environment. Is it safe?
          </p>
        </div>

        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">
              10. Make Your Onboarding Session As Detailed And Engaging As
              Possible.
            </span>
            Your onboarding sessions can determine how smooth it would be for
            your team to adjust to one another and also to their work. In most
            startups where the vision and goals of the business continue to
            expand, it's important to let your team know what phase your startup
            is in. Here are a few pointers:
          </p>
          <div>
            <ul>
              <li>
                Create a detailed onboarding document with relevant information.{" "}
              </li>
              <li>Make the onboarding session as engaging as possible.</li>
              <li>Ask teammates to give their opinions.</li>
              <li>Ensure you create a safe place for them to ask questions.</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="mt-4 mb-4">
            <span className="font-bold">11. Celebrate Wins And Teammates</span>
            Although some of your teammates could meet up physically for
            celebrations, not all of them might make the trip. You can celebrate
            your teammates by giving them awards like employee of the month, or
            bonuses for completing projects successfully. This will motivate
            teammates and also give them credibility in the professional
            community.
          </p>

          <p className="mt-4 mb-4">
            Starting or running a business in Africa has its own peculiarities.
            At Elan Africa, we offer free consultations to African business
            owners. Our goal is to cater for the needs of startups, SMEs and
            businesses in Africa. Get high quality training sessions for your
            team, tech services, video content production and much more. Sign up
            for your{" "}
            <Link href="/Contact">
              free consultation with our business experts now.
            </Link>
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

export default Post15;
