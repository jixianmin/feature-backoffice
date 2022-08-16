import { useState, useEffect, createContext, useContext, useRef } from "react";
import { LayoutSplashScreen } from "../../../../_metronic/layout/core";
import * as authHelper from "./AuthHelpers";
const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => {},
  currentUser: undefined,
  setCurrentUser: () => {},
  logout: () => {},
};
const AuthContext = createContext(initAuthContextPropsState);
const useAuth = () => {
  return useContext(AuthContext);
};
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(authHelper.getAuth());
  const [currentUser, setCurrentUser] = useState();
  const saveAuth = (auth) => {
    setAuth(auth);
    if (auth) {
      authHelper.setAuth(auth);
    } else {
      authHelper.removeAuth();
    }
  };
  const logout = () => {
    saveAuth(undefined);
    setCurrentUser(undefined);
  };
  return (
    <AuthContext.Provider
      value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const AuthInit = ({ children }) => {
  const { auth, logout, setCurrentUser } = useAuth();

  const [showSplashScreen, setShowSplashScreen] = useState(true);
  // We should request user by authToken (IN OUR EXAMPLE IT'S API_TOKEN) before rendering the application
  useEffect(() => {
    if (auth && auth.access_token) {
      setCurrentUser(auth);
      setShowSplashScreen(false);
    } else {
      logout();
      setShowSplashScreen(false);
    }

    // eslint-disable-next-line
  }, []);
  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>;
};
export { AuthProvider, AuthInit, useAuth };
