import { useLoaderData } from "react-router-dom";
import "./Posts.css";
import Post from "../../Components/Post/Post";
import { useState } from "react";
export default function Posts() {
  const posts = useLoaderData();
  const [showAll, setShowAll] = useState(false);
  const renderPosts = showAll ? posts : posts.slice(0, 8);
  return (
    <>
      <div className="postsContainer">
        <h1 style={{ textAlign: "center", marginBottom: "16px" }}>Posts</h1>
        <div className="posts">
          {renderPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="showAllBtn">
          <button onClick={() => setShowAll(!showAll)}>Show all</button>
        </div>
      </div>
    </>
  );
}
