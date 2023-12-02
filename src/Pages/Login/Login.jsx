import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="loginContainer">
        <div className="login">
          <fieldset>
            <legend>
              <h1>Login</h1>
            </legend>
            <form onSubmit={handleSubmit} action="">
              <label htmlFor="email">Email: </label>
              <input type="email" id="email" name="email" placeholder="Email" />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="remember"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <label className="remember" htmlFor="remember">
                {" "}
                Remember Me
              </label>
              <input type="submit" value="Login" />
            </form>
            <hr className="hrLine" />
            <span>
              New Here?{" "}
              <Link to="/" className="signup">
                Sign Up
              </Link>
            </span>
          </fieldset>
        </div>
      </div>
    </>
  );
}
