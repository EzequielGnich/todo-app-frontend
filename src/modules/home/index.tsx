import { LogoutOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LocalStorageService } from "../../shared/local-storage";
import TodosContent from "../todos";
import "./styles.scss";

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    LocalStorageService.remove("access_token");
    navigate("/login");
  };

  return (
    <Layout className="home-container">
      <Header className="home-container__header">
        <div className="home-container__header__wrapper">
          <div className="home-container__header__wrapper__left">
            <button
              className="home-container__header__wrapper__right__button"
              type="button"
            >
              <span>{t("home.menu.todos")}</span>
            </button>
          </div>
          <div className="home-container__header__wrapper__right">
            <button
              className="home-container__header__wrapper__right__button"
              onClick={handleLogout}
              type="button"
            >
              <LogoutOutlined />
              <span>{t("home.menu.logout")}</span>
            </button>
          </div>
        </div>
      </Header>
      <div className="home-container__content">
        <TodosContent />
      </div>
    </Layout>
  );
}
