import { Link } from "react-router-dom";
import "./User.css";
/* eslint-disable react/prop-types */
export default function User({ user: { id, name, email } }) {
  return (
    <div className="userCard">
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <Link to={`/users/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}
