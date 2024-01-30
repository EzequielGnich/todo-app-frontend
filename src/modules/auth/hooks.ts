import { LocalStorageService } from "../../assets/local-storage";

export const useCheckAuth = () => {
  const accessToken = LocalStorageService.get("access_token");

  return !!accessToken;
};
