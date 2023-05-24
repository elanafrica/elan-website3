import { useRouter } from "next/router";
import dynamic from "next/dynamic";

function BlogPost() {
  const router = useRouter();
  const { id } = router.query;

  const PostComponent = dynamic(() => import(`./posts/post${id}.js`), {
    loading: () => <div>Loading...</div>,
    ssr: false,
  });

  return <PostComponent />;
}

export default BlogPost;
