import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const handleGoogleAutntication = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    });
};

function App() {
  return (
    <div>
      <h1>firebase authentication</h1>
      <button onClick={handleGoogleAutntication}>click me</button>
    </div>
  );
}

export default App;
