import { api } from "../../config/api";
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

  const response = await api.post<AuthResponse>(`/login`, {
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

  const response = await api.post<SignUpResponse>(`/users`, {
    password,
    email,
    name,
  });

  return response.data;
};
