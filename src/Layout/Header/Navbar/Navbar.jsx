import { Link } from "react-router-dom";
import logo from "../../../assets/Globe.svg";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navContainer">
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
