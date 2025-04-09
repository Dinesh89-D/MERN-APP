// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-89d5b.firebaseapp.com",
  projectId: "mern-auth-89d5b",
  storageBucket: "mern-auth-89d5b.firebasestorage.app",
  messagingSenderId: "96112258831",
  appId: "1:96112258831:web:7642b7879dd5e5d2a0987a",
  measurementId: "G-JR6TM6M2XK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);