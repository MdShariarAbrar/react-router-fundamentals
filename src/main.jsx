import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Home/About/About";
import Contact from "./components/Home/Contact/Contact";
import User from "./components/Home/Users/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      { path: "/about", element: <About></About> },

      { path: "/contact", element: <Contact></Contact> },

      { path: "/users", element: <User></User> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
