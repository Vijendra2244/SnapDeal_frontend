import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const updateAuth = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("auth", JSON.stringify(newAuth));
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth: updateAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
