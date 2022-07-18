import { View, Text } from "react-native";
import React, { createContext, useContext, useState} from "react";

const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [cred, setCred] =  useState(null)
  return (
    <AuthContext.Provider value={{ user: cred, setcred:setCred}}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
