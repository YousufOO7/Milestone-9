// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmFi_jGUjPesLxhtn3pVQbI4BEadv-xMQ",
  authDomain: "login-form-9045f.firebaseapp.com",
  projectId: "login-form-9045f",
  storageBucket: "login-form-9045f.firebasestorage.app",
  messagingSenderId: "440645513118",
  appId: "1:440645513118:web:5fc5f744036e715840b08f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);