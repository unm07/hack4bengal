import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(""); // Set the initial value as empty string or null

  const updateEmail = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <AuthContext.Provider value={{ email, updateEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };