import { useMutation } from "react-query";
import { signIn } from "./services";
import { LocalStorageService } from "../../assets/local-storage";
import { renderNotificationError } from "../../shared/notifications";
import { useNavigate } from "react-router-dom";

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
