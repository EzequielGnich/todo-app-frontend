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

export const container = () => {
  const containerButtons = document.querySelector(
    ".auth-container__buttons-container"
  );

  const animationEnded = () => {
    containerButtons?.addEventListener("animationend", () => {
      containerButtons?.classList.remove("container-buttons-expanding");
    });
  };

  const expanded = () => {
    containerButtons?.classList.add("container-buttons-expanding");

    animationEnded();
  };

  return {
    expanded,
    containerInstance: containerButtons,
  };
};

export const backgroundCard = () => {
  const background = document.querySelector(".background-animated");

  const animationEnded = () => {
    background?.addEventListener("animationend", () => {
      background?.classList.remove("background-animated-expanding");
    });
  };

  const expanded = () => {
    background?.classList.add("background-animated-expanding");

    animationEnded();
  };

  return {
    expanded,
    containerInstance: background,
  };
};

export const setActiveTabAndButton = (tab: string) => {
  if (tab === "signin") {
    backgroundCard().expanded();
    container().expanded();
    buttons().signin();
    tabs().signin();
  } else {
    backgroundCard().expanded();
    container().expanded();
    buttons().signup();
    tabs().signup();
  }
};
