import { isAfter } from "date-fns";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { LocalStorageService } from "../../shared/local-storage";

export const useCheckAuth = () => {
  const accessToken = LocalStorageService.get("access_token");
  const [hasAccess, setHasAccess] = useState(false);

  const [exp, setExp] = useState<number>();

  useEffect(() => {
    if (!accessToken) {
      setHasAccess(false);
      return;
    }

    const decodedToken = jwtDecode(accessToken);

    if (!decodedToken?.exp) {
      setHasAccess(false);
      return;
    }

    setExp(decodedToken.exp);
  }, [accessToken]);

  useEffect(() => {
    if (!exp) return;

    const now = new Date();

    const isExpire = isAfter(now, new Date(exp * 1000));

    setHasAccess(!isExpire);
  }, [exp]);

  return hasAccess;
};
