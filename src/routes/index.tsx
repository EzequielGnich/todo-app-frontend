import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCheckAuth } from "../modules/auth/hooks";
import PrivateRoute from "./private-routes";
import PublicRoute from "./public-routes";

export default function AppRoutes() {
  const checkAuth = useCheckAuth();

  const router = createBrowserRouter([
    checkAuth ? PrivateRoute() : {},
    ...PublicRoute(),
  ]);

  return <RouterProvider router={router} />;
}
