import axios from "axios";
import { apiURL } from "../../config/constants";
import { AuthRequest, AuthResponse } from "./models";
import { notification } from "antd";

const renderError = () => {
  notification.error({
    message: "Error",
    description: "Email and password are required",
  });
};

export const signIn = async ({
  email,
  password,
}: AuthRequest): Promise<AuthResponse | undefined> => {
  if (!email || !password) {
    renderError();
    return;
  }

  const response = await axios.post<AuthResponse>(`${apiURL}/login`, {
    email,
    password,
  });

  return response.data;
};
