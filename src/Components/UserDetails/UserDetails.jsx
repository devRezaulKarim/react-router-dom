import { Link, useLoaderData } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import "./UserDetails.css";

export default function UserDetails() {
  const { id, name, username, email, phone, website, company } =
    useLoaderData();
  const img = Math.round(Math.random() * 999);

  return (
    <div className="userDetails">
      <div>
        <div className="profilePic">
          <img src={`https://picsum.photos/id/${img}/250/300`} alt="" />
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>ID:</td>
                <td>{id}</td>
              </tr>
              <tr>
                <td>NAME:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>USERNAME:</td>
                <td>{username}</td>
              </tr>
              <tr>
                <td>PHONE:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td>EMAIL:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>WEBSITE:</td>
                <td>{website}</td>
              </tr>
              <tr>
                <td>COMPANY:</td>
                <td>{company.name}</td>
              </tr>
            </tbody>
          </table>
          <Link to="/users" className="closeBtn">
            <IoCloseSharp />
          </Link>
        </div>
      </div>
    </div>
  );
}
