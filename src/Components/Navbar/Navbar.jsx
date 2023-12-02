import { Link } from "react-router-dom";
import logo from "../../assets/Globe.svg";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/services">users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
