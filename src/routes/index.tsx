import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./private-routes";
import PublicRoute from "./public-routes";
import { useCheckAuth } from "../modules/auth/hooks";

export default function AppRoutes() {
  const checkAuth = useCheckAuth();

  const router = createBrowserRouter([
    checkAuth ? PrivateRoute() : {},
    ...PublicRoute(),
  ]);

  return <RouterProvider router={router} />;
}
