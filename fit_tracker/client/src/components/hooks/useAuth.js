import { useState, useEffect } from "react";

const useAuth = (initialToken = null) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [accessToken, setAccessToken] = useState(initialToken);

  useEffect(() => {
    if (accessToken) {
      // Assuming token is valid if it exists
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, [accessToken]);

  return { isAuthorized, accessToken, setAccessToken };
};

export default useAuth;
