import axios from "axios";
import { apiURL } from "../../config/constants";
import { renderNotificationError } from "../../shared/notifications";
import {
  AuthRequest,
  AuthResponse,
  SignUpRequest,
  SignUpResponse,
} from "./models";

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

export const signUp = async ({
  password,
  email,
  name,
}: SignUpRequest): Promise<SignUpResponse | undefined> => {
  if (!email || !password || !name) {
    renderNotificationError({
      message: "Error",
      description: "Email and password are required",
    });
    return;
  }

  const response = await axios.post<SignUpResponse>(`${apiURL}/users`, {
    password,
    email,
    name,
  });

  return response.data;
};
