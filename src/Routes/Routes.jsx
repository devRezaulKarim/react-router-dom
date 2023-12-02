import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Components/About/About";
import Login from "../Components/Login/Login";
import Users from "../Components/Users/Users";
import App from "../App";
import Posts from "../Components/Posts/Posts";
import UserDetails from "../Components/UserDetails/UserDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "posts",
        element: <Posts />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
    ],
  },
  {
    path: "users/:id",
    element: <UserDetails />,
    loader: ({ params }) =>
      fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
    lazy: () => import("../Components/UserDetails/UserDetails"),
  },

  {
    path: "*",
    element: <h1>Nothing Found</h1>,
  },
]);

export default Routes;
