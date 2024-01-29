import axios from "axios";
import { apiURL } from "../../config/constants";
import { AuthRequest, AuthResponse } from "./models";
import { notification } from "antd";

export const signIn = ({ email, password }: AuthRequest) => {
  if (!email || !password) {
    notification.error({
      message: "Error",
      description: "Email and password are required",
    });

    return;
  }

  return axios.post<AuthResponse>(`${apiURL}/login`, {
    email,
    password,
  });
};
