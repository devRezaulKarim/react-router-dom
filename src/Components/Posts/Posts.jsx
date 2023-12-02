import { useLoaderData } from "react-router-dom";
import "./Posts.css";
export default function Posts() {
  const posts = useLoaderData();
  return (
    <>
      <div className="postsContainer">
        <h1>Total Posts: {posts.length}</h1>
      </div>
    </>
  );
}
