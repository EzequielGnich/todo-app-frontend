import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../../shared/typography";
import { SignInTab } from "./components/signin.tab";
import { SignUpTab } from "./components/signup.tab";
import { buttons, setActiveTabAndButton } from "./functions";
import { useCheckAuth } from "./hooks";

import { LocalStorageService } from "../../shared/local-storage";
import "./styles.scss";

export default function Auth() {
  const hasAccess = useCheckAuth(LocalStorageService.get("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    buttons().signin();
  }, []);

  useEffect(() => {
    if (hasAccess) {
      navigate("/home");
      return;
    }
  }, [hasAccess, navigate]);

  return (
    <div className="container-centralized">
      <div className="background-animated">
        <div className="auth-container">
          <div className="auth-container__buttons-container">
            <div className="auth-container__buttons-container__card-title">
              <Typography tag="h4">Welcome to</Typography>
              <Typography tag="h2">Todo app</Typography>
            </div>
            <div className="auth-container__buttons-container__wrapper">
              <button
                onClick={() => setActiveTabAndButton("signin")}
                className="auth-container__buttons-container__wrapper__signin-button"
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTabAndButton("signup")}
                className="auth-container__buttons-container__wrapper__signup-button"
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="auth-container__signin-wrapper">
            <SignInTab />
          </div>
          <div className="auth-container__signup-wrapper">
            <SignUpTab />
          </div>
        </div>
      </div>
    </div>
  );
}
