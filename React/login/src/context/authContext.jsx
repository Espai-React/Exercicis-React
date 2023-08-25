import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const MY_AUTH_APP = "MY_AUTH_APP_1";
export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem(MY_AUTH_APP) ?? false
  );

  const login = useCallback(() => {
    localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
    console.log(isAuthenticated);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
        console.log(isAuthenticated);

  }, []);

  const value = useMemo(
    () => ({ login, logout, isAuthenticated }),
    [login, logout, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.object,
};
