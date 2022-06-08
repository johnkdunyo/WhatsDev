// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// import { getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"


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
  measurementId: "G-1Z5HWPH5HW",
  databaseURL: "https://whatsdev-b66ec-default-rtdb.firebaseio.com"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);
const realtimeDB = getDatabase(app)

// const chat


export {auth ,database, analytics, realtimeDB};