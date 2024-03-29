import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { TfiComments } from "react-icons/tfi";
import { FcLike } from "react-icons/fc";

function BlogCard() {
  const router = useRouter();
  const { post } = router.query || {};

  const [views, setViews] = useState(0);

  useEffect(() => {
    setViews((prevViews) => prevViews + 1);
  }, []);

  if (!post || !post.title) {
    return null;
  }
  return (
    <div
      key={post.id}
      className="singleCareer group group/item w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#0b2546] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
    >
      {post.image && (
        <Image src={post.image} alt={elan} width={500} height={300} priority />
      )}

      <h2 className="text-xl bold text-black group-hover:text-white">
        {post.title}
      </h2>
      <p className="text-[13px]">
        <span>By {post.name} </span>
      </p>
      <p className="text-[13px]">{post.date}</p>
      <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
        {post.description}
      </p>
      <div className="flex mt-9  flex-wrap items-center justify-center items-center text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]">
        <p className="flex items-center gap-2">
          <AiOutlineEye />
          <span>{post.views}</span>
        </p>
        <p className="flex items-center gap-2">
          <TfiComments />
          <span>{post.comments.length}</span>
        </p>
        <p className="flex items-center gap-2">
          <FcLike />
          <span>{post.likes}</span>
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
