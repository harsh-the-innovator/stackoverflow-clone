import React, { useContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext({
  user: {},
  setUser: () => {},
  logout: () => {},
  isLoggedIn: Boolean,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", {});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    console.log("LOGOUT SUCCESSFULL");
    setUser({});
  };

  useEffect(() => {
    if (user && Object.keys(user).length !== 0 && user.token) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        setUser: setUser,
        logout: logout,
        isLoggedIn: isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
