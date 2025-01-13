// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA24Fkttr1aWI6QQicMIm4RtmXq9PGvLJw",
  authDomain: "scholar-ease-c79fe.firebaseapp.com",
  projectId: "scholar-ease-c79fe",
  storageBucket: "scholar-ease-c79fe.firebasestorage.app",
  messagingSenderId: "521322390107",
  appId: "1:521322390107:web:a7985377750fdf2bdf157e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
