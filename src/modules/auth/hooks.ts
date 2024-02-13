import { LocalStorageService } from "../../shared/local-storage";

export const useCheckAuth = () => {
  const accessToken = LocalStorageService.get("access_token");

  return !!accessToken;
};
