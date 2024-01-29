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
