import { createContext, useContext, useState, useEffect } from "react";
import { getDocs, getDoc, doc, collection } from "firebase/firestore";
import { db } from "../services/firebase_config";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setAllUsers] = useState([]);

  async function getUser(userId) {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      return { userId, ...docSnap.data() };
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    async function getUsers() {
      const users = await getDocs(collection(db, "users"));
      const usersData = users.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllUsers(usersData);
    }

    getUsers();
  }, []);

  return (
    <UserContext.Provider value={(users, getUser)}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserContext);
}
