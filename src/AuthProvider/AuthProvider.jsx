import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import app from "../firebase/firebase.conifg";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();

export const ContextData = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create use with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email pass sign in
  const emailPassSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Sign In
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const profileUpdateOfUsers = (username) => {
    updateProfile(auth.currentUser, {
      displayName: username,
    });
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // OnOuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const values = {
    user,
    loading,
    createUser,
    emailPassSignIn,
    googleSignIn,
    profileUpdateOfUsers,
    logout,
  };
  return <ContextData.Provider value={values}>{children}</ContextData.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
