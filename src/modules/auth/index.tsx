import { SignInTab } from "./components/signin.tab";
import { SignUpTab } from "./components/signup.tab";
import "./styles.scss";
import { buttons, setActiveTabAndButton } from "./functions";
import { useEffect } from "react";

export default function Auth() {
  useEffect(() => {
    buttons().signin();
  }, []);

  return (
    <div className="container-centralized">
      <div className="auth-container">
        <div className="auth-container__buttons-container">
          <span style={{ fontWeight: 800 }}>Todo App</span>
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
  );
}
