// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFNy7t_gT4ijYfFhdOl3HYzccsqCLoE4Y",
  authDomain: "email-login-auth-cf7be.firebaseapp.com",
  projectId: "email-login-auth-cf7be",
  storageBucket: "email-login-auth-cf7be.firebasestorage.app",
  messagingSenderId: "895152394726",
  appId: "1:895152394726:web:cdd4ba19f8b1d239f6c627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);