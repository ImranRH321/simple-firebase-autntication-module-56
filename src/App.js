import React, { useState } from "react";
import app from "./firebase.init";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const App = () => {
  const [user, setUser] = useState({});

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // sign login
  const handleGoogleSign = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // sign out
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      });
  };

  return (
    <div>
      <h3>go for app</h3>
      {user.email ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSign}>Goggle sign in</button>
      )}

      <h1>Name: {user.displayName}</h1>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default App;
