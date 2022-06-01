// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6woUjAyvs6g8ia_CFKBJqG_Mhaj5tqWw",
  authDomain: "simple-firebase-auth-log-9a4ef.firebaseapp.com",
  projectId: "simple-firebase-auth-log-9a4ef",
  storageBucket: "simple-firebase-auth-log-9a4ef.appspot.com",
  messagingSenderId: "3115954631",
  appId: "1:3115954631:web:24e7e7b648ff6e7435e9e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default app;