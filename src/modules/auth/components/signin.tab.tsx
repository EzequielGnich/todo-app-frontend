import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useSignIn } from "../domains";

import { Spin } from "antd";
import { CustomInput } from "../../../shared/custom-input";
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
      <CustomInput
        placeholder={t("signin.input.email")}
        onChange={formik.handleChange}
        value={formik.values.email}
        type="email"
        name="email"
        id="email"
        required
      />
      <CustomInput
        placeholder={t("signin.input.password")}
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password"
        name="password"
        id="password"
        required
      />

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
