import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import GamePage from "./Pages/game.jsx";
import Dashboard from "./Pages/dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/games",
    element: <GamePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
