import { useLoaderData } from "react-router-dom";
import "./Posts.css";
import Post from "../../Components/Post/Post";
export default function Posts() {
  const posts = useLoaderData();
  return (
    <>
      <div className="postsContainer">
        <div className="posts">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
