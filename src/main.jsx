import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes}>
      <HomePage />
    </RouterProvider>
  </React.StrictMode>
);
