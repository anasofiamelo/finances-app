import { createContext, useContext, useState, useEffect } from "react";
// import { auth } from "../services/firebase_config";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUserId, setCurrentUserId] = useState("pW0gkZUkWWE75svpE6wt");

  // function signUp(email, password) {
  //   auth.createUserWithEmailAndPassword(email, password);
  // }

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUserId(user);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <AuthContext.Provider value={{ currentUserId }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
