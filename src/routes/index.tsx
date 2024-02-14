import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useCheckAuth } from "../modules/auth/hooks";
import { LocalStorageService } from "../shared/local-storage";
import PrivateRoute from "./private-routes";
import PublicRoute from "./public-routes";

export default function AppRoutes() {
  const checkAuth = useCheckAuth(LocalStorageService.get("access_token"));

  const router = createBrowserRouter([
    checkAuth ? PrivateRoute() : {},
    ...PublicRoute(),
  ]);

  return <RouterProvider router={router} />;
}
