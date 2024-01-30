import { useMutation } from "react-query";
import { signIn } from "./services";
import { LocalStorageService } from "../../assets/local-storage";
import { notification } from "antd";

const renderSuccess = () => {
  notification.success({
    message: "Success",
    description: "Logged in successfully",
  });
};

const renderError = (error: unknown) => {
  notification.error({
    message: "Error",
    description: error.message,
  });
};

export const useSignIn = () => {
  const { mutate: handleSignIn, ...mutation } = useMutation(signIn, {
    onSuccess: (data) => {
      if (!data) return;
      LocalStorageService.set("access_token", data.access_token);
      renderSuccess();
    },
    onError: (error) => {
      renderError(error);
    },
  });

  return { ...mutation, handleSignIn };
};
