import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {createContext, useEffect, useState} from "react";
import {auth} from "../FAuth/firebase.init";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [currentUsers, setCurrentUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUsers(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    creatUser,
    currentUsers,
    loading,
    signout,
  };

  return <AuthContext value={userInfo}> {children} </AuthContext>;
};
