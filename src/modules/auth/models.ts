export type FieldType = {
  name?: string;
  email?: string;
  password?: string;
};

export type AuthResponse = {
  access_token: string;
};

export type AuthRequest = {
  email?: string;
  password?: string;
};

export const SignInKey = "SignIn";

export interface SignUpRequest {
  password: string;
  email: string;
  name: string;
}

export interface SignUpResponse {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
