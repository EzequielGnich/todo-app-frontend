export const buttons = () => {
  const buttonSignin = document.querySelector(
    ".auth-container__buttons-container__wrapper__signin-button"
  );
  const buttonSignup = document.querySelector(
    ".auth-container__buttons-container__wrapper__signup-button"
  );

  const signin = () => {
    buttonSignin?.classList.add("active");
    buttonSignup?.classList.remove("active");
  };
  const signup = () => {
    buttonSignin?.classList.remove("active");
    buttonSignup?.classList.add("active");
  };

  return {
    signin,
    signup,
  };
};

const tabs = () => {
  const signinTab = document.querySelector(".auth-container__signin-wrapper");

  const signupTab = document.querySelector(".auth-container__signup-wrapper");

  const signin = () => {
    signinTab?.classList.add("tab-active");
    signinTab?.classList.remove("tab-inactive");

    signupTab?.classList.remove("tab-active");
    signupTab?.classList.add("tab-inactive");
  };

  const signup = () => {
    signupTab?.classList.add("tab-active");
    signupTab?.classList.remove("tab-inactive");

    signinTab?.classList.remove("tab-active");
    signinTab?.classList.add("tab-inactive");
  };

  return {
    signin,
    signup,
  };
};

export const setActiveTabAndButton = (tab: string) => {
  if (tab === "signin") {
    buttons().signin();
    tabs().signin();
  } else {
    buttons().signup();
    tabs().signup();
  }
};
