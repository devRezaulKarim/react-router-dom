import { Link } from "react-router-dom";
import "./HomePage.css";
import heroImg from "../../assets/problem-solving.gif";

export default function HomePage() {
  return (
    <>
      <div className="homePageContainer">
        <div className="heroLeft">
          <h1>
            Lorem <span>ipsum</span> <span>dolor</span> sit amet.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            nesciunt doloremque distinctio expedita saepe ipsam fuga nisi,
            incidunt delectus! Ducimus culpa eaque rem unde, sint dolorum
            numquam repellat natus similique.
          </p>
          <div>
            <Link>lorem</Link>
          </div>
        </div>
        <div className="heroRight">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </>
  );
}
