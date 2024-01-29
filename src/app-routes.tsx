import {
  Link,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Auth } from "./modules/auth";
import { Button } from "antd";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <div>
            <Button type="primary">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        }
      />
      <Route path="/login" element={<Auth />} />
    </>
  )
);
