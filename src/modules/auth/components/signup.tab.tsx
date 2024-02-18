import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import Typography from "../../../shared/typography";
import { ColorVariants } from "../../../shared/typography/models";

import { CustomInput } from "../../../shared/custom-input";
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
        placeholder={t("signin.input.name")}
        onChange={formik.handleChange}
        value={formik.values.name}
        type="name"
        name="name"
        id="name"
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

      <button className="signup-container__button-submit" type="submit">
        <Typography tag="span" color={ColorVariants.PRIMARY}>
          {t("signup.input.button")}
        </Typography>
      </button>
    </form>
  );
};
