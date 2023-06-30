// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMPb9LUNMzxzWErwBlOs3ieuoyOBhyds",
  authDomain: "matthew-management-system.firebaseapp.com",
  projectId: "matthew-management-system",
  storageBucket: "matthew-management-system.appspot.com",
  messagingSenderId: "198310427108",
  appId: "1:198310427108:web:1908ab0aca882816996ff1",
  measurementId: "G-6HV1HERG7E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
