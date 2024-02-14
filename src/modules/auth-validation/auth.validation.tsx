import { Spin } from "antd";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorageService } from "../../shared/local-storage";
import { useCheckAuth } from "../auth/hooks";
import "./styles.scss";

export default function AuthValidation() {
  const hasAccess = useCheckAuth(LocalStorageService.get("access_token"));
  const navigate = useNavigate();

  useEffect(() => {
    if (hasAccess) {
      navigate("/home");
      return;
    } else {
      navigate("/login");
      return;
    }
  }, [hasAccess, navigate]);

  return (
    <div className="container">
      <Spin className="container__spin" spinning />
    </div>
  );
}
