import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Typography from "../../../shared/typography";
import { ColorVariants } from "../../../shared/typography/models";

import { useSignUp } from "../domains";
import "./signup.styles.scss";

export const SignUpTab: React.FC = () => {
  const { t } = useTranslation();
  const { handleSignUp } = useSignUp();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSignUp({
        email: values.email,
        name: values.name,
        password: values.password,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="signup-container">
      <div className="signup-container__wrapper">
        <label className="custom-field">
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            type="email"
            name="email"
            id="email"
            required
          />
          <span className="placeholder">{t("signup.input.email")}</span>
        </label>
      </div>

      <div className="signup-container__wrapper">
        <label className="custom-field">
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            type="name"
            id="name"
            required
          />
          <span className="placeholder">{t("signup.input.name")}</span>
        </label>
      </div>

      <div className="signup-container__wrapper">
        <label className="custom-field">
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            name="password"
            type="password"
            id="password"
            required
          />
          <span className="placeholder">{t("signup.input.password")}</span>
        </label>
      </div>

      <button className="signup-container__button-submit" type="submit">
        <Typography tag="span" color={ColorVariants.PRIMARY}>
          {t("signup.input.button")}
        </Typography>
      </button>
    </form>
  );
};
