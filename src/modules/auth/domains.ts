import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { LocalStorageService } from "../../shared/local-storage";
import { renderNotificationError } from "../../shared/notifications";
import { signIn, signUp } from "./services";

export const useSignIn = () => {
  const navigate = useNavigate();

  const { mutate: handleSignIn, ...mutation } = useMutation(signIn, {
    onSuccess: (data) => {
      if (!data) return;
      LocalStorageService.set("access_token", data.access_token);
      navigate("/auth-validation");
    },
    onError: (error: Error) => {
      renderNotificationError({
        message: "Error",
        description: error.message,
      });
    },
  });

  return { ...mutation, handleSignIn };
};

export const useSignUp = () => {
  const { handleSignIn } = useSignIn();

  const { mutate: handleSignUp, ...mutation } = useMutation(signUp, {
    onSuccess: (data, variables) => {
      if (!data) return;
      handleSignIn({ email: data.email, password: variables.password });
    },
    onError: (error: Error) => {
      renderNotificationError({
        message: "Error",
        description: error.message,
      });
    },
  });

  return { ...mutation, handleSignUp };
};
