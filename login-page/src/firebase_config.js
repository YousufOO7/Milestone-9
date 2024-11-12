// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqYtsV3vhHxRW0Jum3UIH67YXAUkL8zvk",
  authDomain: "signup-page-a5898.firebaseapp.com",
  projectId: "signup-page-a5898",
  storageBucket: "signup-page-a5898.firebasestorage.app",
  messagingSenderId: "274019577111",
  appId: "1:274019577111:web:f082133460577998bc5b52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);