// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQ5zwvF2iKCvcYzZN_EZ6X_ive2wa1LE",
  authDomain: "netflix-d1984.firebaseapp.com",
  projectId: "netflix-d1984",
  storageBucket: "netflix-d1984.appspot.com",
  messagingSenderId: "945642770359",
  appId: "1:945642770359:web:8102cf202921c8f497e232",
  measurementId: "G-SXDK6Z74GT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);