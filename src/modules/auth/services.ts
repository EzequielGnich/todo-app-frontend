import axios from "axios";
import { apiURL } from "../../config/constants";
import { AuthRequest, AuthResponse } from "./models";
import { renderNotificationError } from "../../shared/notifications";

export const signIn = async ({
  email,
  password,
}: AuthRequest): Promise<AuthResponse | undefined> => {
  if (!email || !password) {
    renderNotificationError({
      message: "Error",
      description: "Email and password are required",
    });
    return;
  }

  const response = await axios.post<AuthResponse>(`${apiURL}/login`, {
    email,
    password,
  });

  return response.data;
};
