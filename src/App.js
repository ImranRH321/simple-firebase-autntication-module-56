import React from "react";
import app from "./firebase.init";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const App = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSign = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3>go for app</h3>
      <button onClick={handleGoogleSign}>Goggle sign in</button>
    </div>
  );
};

export default App;
