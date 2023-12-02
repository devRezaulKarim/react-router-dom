import { useLoaderData } from "react-router-dom";
import "./Users.css";
import User from "../../Components/User/User";
export default function Users() {
  const users = useLoaderData();

  return (
    <>
      <div className="usersContainer">
        <div className="users">
          {users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
