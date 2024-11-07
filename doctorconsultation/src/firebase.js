// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz1CksYF-ig7PJ_zTAUUusdRWAqjyZeb0",
  authDomain: "cognitive-companion.firebaseapp.com",
  projectId: "cognitive-companion",
  storageBucket: "cognitive-companion.appspot.com",
  messagingSenderId: "803585897562",
  appId: "1:803585897562:web:a3075bd0d9167805d61463",
  measurementId: "G-4RR59EJ7EM"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export { db };
