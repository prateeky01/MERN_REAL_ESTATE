// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-1b38e.firebaseapp.com",
  projectId: "mern-estate-1b38e",
  storageBucket: "mern-estate-1b38e.appspot.com",
  messagingSenderId: "350379176729",
  appId: "1:350379176729:web:b2e6b02a4d46e796514b88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);