/* eslint-disable react/prop-types */
import "./Post.css";
export default function Post({ post: { id, title, body } }) {
  return (
    <div className="post">
      <h3>{id}</h3>
      <h4>{title.slice(0, 30)}</h4>
      <p>{body}</p>
    </div>
  );
}
