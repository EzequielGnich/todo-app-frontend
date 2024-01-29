import { useMutation } from "react-query";
import { signIn } from "./services";
import { LocalStorageService } from "../../assets/local-storage";
import { notification } from "antd";

export const useSignIn = () => {
  const { mutate: handleSignIn, ...mutation } = useMutation(signIn, {
    onSuccess: ({ data }) => {
      if (!data) return;
      LocalStorageService.set("access_token", data.access_token);
      notification.success({
        message: "Success",
        description: "Logged in successfully",
      });
    },
    onError: (error) => {
      notification.error({
        message: "Error",
        description: error.message,
      });
    },
  });

  return { ...mutation, handleSignIn };
};
