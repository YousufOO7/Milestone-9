// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzF_dSCkH3YJbSP_wAKooBiYLIvFDwN7I",
  authDomain: "fir-login-6f007.firebaseapp.com",
  projectId: "fir-login-6f007",
  storageBucket: "fir-login-6f007.firebasestorage.app",
  messagingSenderId: "630020987378",
  appId: "1:630020987378:web:f635117b1880ccad10b36b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);