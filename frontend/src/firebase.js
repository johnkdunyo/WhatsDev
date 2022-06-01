// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB5EPH5ioZlA1q-OPKNLrzJ928v8s7-WI",
  authDomain: "whatsdev-b66ec.firebaseapp.com",
  projectId: "whatsdev-b66ec",
  storageBucket: "whatsdev-b66ec.appspot.com",
  messagingSenderId: "1094643963651",
  appId: "1:1094643963651:web:a4d2dde2698021a4527b36",
  measurementId: "G-1Z5HWPH5HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);