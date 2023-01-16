import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [register, setRegister] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  
  return (
    <AuthContext.Provider value={{ register,setRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
