// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHdJdlAwZnx8Y-pJ2POH4J8RIJkjxs1sU",
  authDomain: "coffee-store-549c0.firebaseapp.com",
  projectId: "coffee-store-549c0",
  storageBucket: "coffee-store-549c0.firebasestorage.app",
  messagingSenderId: "1095565663256",
  appId: "1:1095565663256:web:1b2f6f558dd3ca697fb76d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);