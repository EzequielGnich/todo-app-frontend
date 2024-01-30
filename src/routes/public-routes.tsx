import { Navigate } from "react-router-dom";
import Auth from "../modules/auth";

export default function routes() {
  return [
    { path: "/login", element: <Auth /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}
