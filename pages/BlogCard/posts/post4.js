import { useState } from "react";

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

      <article>
        <h2>How to maximize your marketing budget</h2>
        <p>
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
        <h4>
          Here are some tips on how to businesses can maximize their marketing
          budget
        </h4>
        <div>
          <ul>
            <li>
              Set clear and measurable marketing goals to help you track the
              effectiveness of your marketing activities.{" "}
            </li>
            <li>
              Determine your target audience and tailor your marketing efforts
              specifically to them.{" "}
            </li>
            <li>
              Invest in high-quality content that can be repurposed across
              different channels, such as blogs or videos.{" "}
            </li>
            <li>
              Use social media platforms strategically to reach a wider
              audience. Utilize paid advertising options on these platforms to
              target specific demographics.{" "}
            </li>
            <li>
              Focus on search engine optimization (SEO) to increase your
              visibility and rank higher in search engine results pages.{" "}
            </li>
            <li>
              Leverage on email marketing campaigns to keep in touch with
              existing customers and drive conversions.{" "}
            </li>
            <li>
              Consider partnering with other businesses and influencers to reach
              new audiences and increase brand awareness.{" "}
            </li>
            <li>
              Evaluate the effectiveness of your marketing campaigns regularly
              and adjust your strategies as needed to ensure you are getting the
              most out of your budget.
            </li>
          </ul>
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
