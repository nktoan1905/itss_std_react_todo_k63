import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAJVPAaiBSrOsEKd6B3CfsKJDUc3759cUA",
  authDomain: "todo-42c29.firebaseapp.com",
  projectId: "todo-42c29",
  storageBucket: "todo-42c29.appspot.com",
  messagingSenderId: "436835056595",
  appId: "1:436835056595:web:afed1da945fab45a7f8d26",
  measurementId: "G-E30MQ7NW4G"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);