import { getAuth, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase.init";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const handleGoogleAutntication = () => {
  console.log('click');
}

function App() {

  return (
    <div>
      <h1>firebase authentication</h1>
      <button onClick={handleGoogleAutntication}>click me</button>
    </div>
  );
}

export default App;
