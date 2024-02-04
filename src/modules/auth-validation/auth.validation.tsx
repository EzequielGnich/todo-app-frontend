import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

export default function AuthValidation() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 5000);

  return <Spin />;
}
