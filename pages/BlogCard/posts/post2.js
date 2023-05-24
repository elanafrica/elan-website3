import { useState } from "react";
import Image from "next/image";

function Post2() {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h1>Post 1</h1>

      <article className="m-4 mt-9">
        <h2>How to Create a Marketing Plan That Works.</h2>

        <div>
          <Image />
        </div>
        <div>
          <p>
            Ignoring online marketing is like opening a business but not telling
            anyone. — KB Marketing Agency
          </p>
          <p>
            Several entrepreneurs and businesses are often too focused on
            building a viable and amazing product or service. While this is
            good, a major pitfall is that most of them ignore or put less effort
            into their marketing plan.
          </p>
        </div>
        <div>
          <p>
            Although the term 'marketing' is broad, it is generally defined as
            the process of promoting and selling products or services. Marketing
            includes traditional advertising, social media marketing, blogging,
            influencer marketing, and podcast as well. To create a good plan,
            it's important to find a good marketing framework to guide you.
          </p>
        </div>
        <div>
          <h4>But first, what's a marketing framework or mix? </h4>
          <p>
            Marketing involves different tools that businesses use to achieve
            their objectives. The mixture of these tools is known as a marketing
            mix. These mixes help us to understand the product and guide the
            marketing plan. Although there are several marketing mixes including
            5Ps, 7Ps, and 8Ps, the 4Ps are the foundational framework for most
            marketing plans.
          </p>
          <div>
            <p>
              The 4Ps of the marketing mix are product, price, placement, and
              promotion.
            </p>

            <p>
              1. Product: This involves a service or product that is designed to
              satisfy a user's needs and wants. Before creating your marketing
              plan, you will need to understand the product or service. Here are
              some questions that can be a guide:
            </p>
            <div>
              <ul>
                <li>Is it a specific product or a service?</li>
                <li>What problem does the product solve?</li>
                <li>Who are the target customers for the product/service?</li>
                <li>What makes the product stand out?</li>
              </ul>
            </div>
            <p>
              2. Price: This is the cost a customer pays for the product or
              service. Several businesses focus only on their competitors'
              prices rather than evaluating their customer's needs and product
              value. To understand pricing in marketing, it's essential to ask
              these questions:
            </p>
            <div>
              <ul>
                <li>What value does the product or service offer? </li>
                <li>
                  How much do the competitors charge for similar products?
                </li>
                <li>What can your target consumers afford?</li>
                <li>
                  What is the lowest and highest price that the product can sell
                  for?
                </li>
              </ul>
            </div>

            <p>
              3. Placement: This answers the question of where the product or
              service can be found or marketed. Several years ago, products
              would be in a store or a TV Ad, however, digital innovations have
              changed marketing and distribution. Products can be marketed on
              social media, magazines, or even podcasts. For this part of the
              framework, you will need to consider where your product would be
              placed. Here are some questions to guide you:
            </p>
            <div>
              <ul>
                <li>Where is your target audience (online and offline)? </li>
                <li>Where will products and services be placed?</li>
                <li>How accessible are the products and services?</li>
              </ul>
            </div>

            <p>
              4. Promotion: The last of the 4Ps framework is promotion. This
              covers all the tactics and efforts involved in reaching the right
              audience at the right time. For example, an African e-commerce
              store that sells back-to-school items would have its peak sales
              just before school resumption. To use the promotion framework,
              increasing their marketing efforts to parents and guardians a few
              weeks before resumption would boost sales. This is the effect of
              reaching the right audience at the right time. Promotion tactics
              include word of mouth, blogging, paid advertising, and email
              marketing.
            </p>
          </div>
          <div>
            <p>5 Steps To Building A Marketing Plan That Works.</p>
            <p>
              Once you understand the framework, it becomes easier to market the
              product and service. Marketing plans are developed with different
              goals in mind, depending on the business objectives and product
              nature.{" "}
            </p>
            <p>
              For example, the marketing goal of a fashion brand during the
              holiday season would be sales while a confectionery store yet to
              launch might want engagement and awareness.{" "}
            </p>
            <p>Here are 5 steps to creating a marketing plan that works. </p>

            <div>
              <p>Conduct a SWOT Analysis</p>
              <p>
                You should analyze both the business and its past marketing
                efforts. SWOT analyses are quite detailed and help you to focus
                on important details. Were the past marketing efforts
                successful? If not, you will need to understand what went wrong
                in order to prevent it from happening again. For example, if a
                KidsWear brand has had unsuccessful marketing campaigns for
                footwear products, you might have to review the product, the
                marketing tactics, and most importantly the audience's reaction
                to it. A detailed SWOT analysis can provide this.{" "}
              </p>
            </div>
            <div>
              <p>Define Your Goals</p>
              <p>
                Your goals are what you hope to achieve through the marketing
                plan. To create a marketing plan that works, your goals should
                be SMART. SMART goals are specific, measurable, attainable,
                relevant, and time-bound.{" "}
              </p>
              <p>"Increase email subscribers" is not a SMART goal. </p>
              <p>
                "Increase email subscribers by 10% in 3 months." is a SMART
                goal.{" "}
              </p>
              <p>
                It is specific, measurable, and can be achieved within a time
                frame. It's important to note that a marketing plan can have
                more than one goal and your goals should define what tactic you
                employ.{" "}
              </p>
            </div>
            <div>
              <p>Define Your Target Audience.</p>
              <p>
                Your target audience are your potential customers. These are the
                people you want to attract to your product or service.
                Oftentimes, your target audience cuts across a wide demographic
                and can be a lot to document. Using buyer personas can save time
                and help you gain clarity on customer needs. Buyer personas show
                at a glance, information about your customer, their pain points,
                and needs. These are several free buyer persona templates you
                can use in your marketing plan.{" "}
              </p>
            </div>
            <div>
              <p>Plan Your Strategy</p>
              <p>
                Once you define your target audience and goals, you can set your
                marketing strategy. Strategies involve the right channels,
                content, and action items for your marketing.{" "}
              </p>
              <p>
                For example, if your goal is to increase email subscribers, you
                can create a free resource, a personalized quiz, or award points
                for email referrals.{" "}
              </p>
              <p>
                For example, Piggyvest, a Nigerian tech startup created a comic
                series showcasing the lives of young Nigerians and how they
                navigate their finances. This content strategy increased Ad
                clicks for the brand. It also shows their target audience enjoys
                good storytelling and Piggyvest created a creative platform to
                share it.{" "}
              </p>
              <p>
                Adding a creative touch and keeping your target audience in mind
                while creating these strategies help you build a successful
                marketing plan.{" "}
              </p>
            </div>
            <div>
              <p>Set Your Budget</p>
              <p>
                This defines what can run and what strategy might have to be
                adjusted.{" "}
              </p>
              <p>
                Your marketing budget should include the cost of running each
                strategy and marketing efforts. For example, your budget can
                include Ad costs, influencer rates, the cost of marketing tools
                like SEMrush payment, and much more.
              </p>
              <p>
                A budget also helps you to know how much you are investing in
                the marketing plan.
              </p>
            </div>
            <div>
              <p>Measuring Success </p>
              <p>
                It's important to note that marketing plans differ in goals and
                what success metrics are used to run them. A marketing plan
                designed for boosting engagement and awareness should not use
                sales success metrics as a tool.{" "}
              </p>
              <p>
                It's important to identify what tools work for which plan. For
                example, marketing plans for awareness are often measured by
                social media metrics, search ranking on search engines, and
                brand mentions.{" "}
              </p>
              <p>
                Finally, once you get your results, you should analyze them and
                make changes to improve your work.
              </p>
            </div>
            <p>Conclusion </p>
            <p>
              Creating a marketing plan that works involves understanding and
              implementing the right framework. Applying the 4Ps marketing mix
              to understand the product, price, placement, and promotion guides
              your plans. It's important to understand how to create a marketing
              plan that works and use the right tools to measure and analyze
              your progress.
            </p>
            <p>
              Want to create a marketing plan that works? Contact us to learn
              more.{" "}
            </p>
          </div>
          <div>
            <hr className="my-4 border-gray-300" />
          </div>
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

export default Post2;
