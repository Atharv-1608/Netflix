// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZRfiGsIgp3jYGOBm6eughWaH2DIHFZBo",
  authDomain: "project-694b2.firebaseapp.com",
  projectId: "project-694b2",
  storageBucket: "project-694b2.appspot.com",
  messagingSenderId: "800441620447",
  appId: "1:800441620447:web:e3af1f728cf0f911a3966a",
  measurementId: "G-V84833VPJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();