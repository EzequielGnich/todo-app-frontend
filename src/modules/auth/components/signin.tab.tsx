import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useSignIn } from "../domains";

import { Spin } from "antd";
import Typography from "../../../shared/typography";
import { ColorVariants } from "../../../shared/typography/models";
import "./signin.styles.scss";

export const SignInTab: React.FC = () => {
  const { t } = useTranslation();

  const { handleSignIn, isLoading } = useSignIn();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSignIn(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="signin-container">
      <div className="signin-container__wrapper">
        <label className="custom-field">
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
            required
          />
          <span className="placeholder">{t("signin.input.email")}</span>
        </label>
      </div>

      <div className="signin-container__wrapper">
        <label className="custom-field">
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
            id="password"
            required
          />
          <span className="placeholder">{t("signin.input.password")}</span>
        </label>
      </div>

      <button
        className="signin-container__button-submit"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? (
          <Spin className="signin-container__spin" />
        ) : (
          <Typography tag="span" color={ColorVariants.PRIMARY}>
            {t("signin.input.button")}
          </Typography>
        )}
      </button>
    </form>
  );
};
