import { Spin } from "antd";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DateTime } from "luxon";
import { LocalStorageService } from "../../shared/local-storage";
import "./styles.scss";

const storedToken = LocalStorageService.get("access_token");

export default function AuthValidation() {
  const [iat, setIat] = useState<number>();
  const [exp, setExp] = useState<number>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!storedToken) {
      navigate("/login");
      return;
    }

    const decodedToken = jwtDecode(storedToken);

    if (!decodedToken?.iat || !decodedToken?.exp) {
      navigate("/login");
      return;
    }

    setIat(decodedToken.iat);
    setExp(decodedToken.exp);
  }, [navigate]);

  useEffect(() => {
    if (!iat || !exp) return;

    const now = DateTime.now().toSeconds();
    const expDate = DateTime.fromSeconds(exp);
    const nowDate = DateTime.fromSeconds(now);

    if (expDate < nowDate) {
      navigate("/login");
      return;
    }

    navigate("/home");
  }, [iat, exp, navigate]);

  return (
    <div className="container">
      <Spin className="container__spin" spinning />
    </div>
  );
}
