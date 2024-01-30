import { Button } from "antd";
import { LocalStorageService } from "../../assets/local-storage";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    LocalStorageService.remove("access_token");
    navigate("/login");
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <span style={{ marginBottom: 20 }}>Welcome to the app!</span>
      <Button onClick={handleLogout} style={{ width: 150 }} type="primary">
        <span>Logout</span>
      </Button>
    </div>
  );
}
