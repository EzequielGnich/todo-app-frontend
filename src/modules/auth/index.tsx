import AuthTabs from "./components/auth.tabs";
import "./styles.scss";

export const Auth: React.FC = () => {
  return (
    <div className="auth-container">
      <AuthTabs />
    </div>
  );
};
