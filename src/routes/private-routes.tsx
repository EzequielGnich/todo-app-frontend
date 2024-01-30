import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "./layout";

const Home = lazy(() => import("../modules/home"));

export default function privateRoutes() {
  return {
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  };
}
