import { Navigate } from "react-router-dom";
import Auth from "../modules/auth";
import AuthValidation from "../modules/auth-validation/auth.validation";

export default function routes() {
  return [
    { path: "/login", element: <Auth /> },
    { path: "/auth-validation", element: <AuthValidation /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ];
}
