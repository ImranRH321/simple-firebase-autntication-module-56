import React, { useState } from "react";
import app from "./firebase.init";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();
  const githupProvider = new GithubAuthProvider();

  // sign login
  const handleGoogleSign = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
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
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      });
  };

  // Gitup
  const handleGithupSignIn = () => {
    signInWithPopup(auth, githupProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch(error => {
        console.log(error);
        setUser({});
      });
  };

  return (
    <div>
      <h3>go for app</h3>
      {user.uid ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSign}>Goggle sign in</button>
          <button onClick={handleGithupSignIn}>Githup Sign In</button>
        </div>
      )}

      <h1>Name: {user.displayName}</h1>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default App;
