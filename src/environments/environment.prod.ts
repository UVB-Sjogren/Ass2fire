// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9RBn9xPhEGCFAkAwztICLQLLKees9WOI",
  authDomain: "ik163-1b3aa.firebaseapp.com",
  databaseURL: "https://ik163-1b3aa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ik163-1b3aa",
  storageBucket: "ik163-1b3aa.appspot.com",
  messagingSenderId: "163157500265",
  appId: "1:163157500265:web:0767bd827d3b0b036d9df8",
  measurementId: "G-48KKM7T7V5"
};
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyC9RBn9xPhEGCFAkAwztICLQLLKees9WOI",
    authDomain: "ik163-1b3aa.firebaseapp.com",
    databaseURL: "https://ik163-1b3aa-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ik163-1b3aa",
    storageBucket: "ik163-1b3aa.appspot.com",
    messagingSenderId: "163157500265",
    appId: "1:163157500265:web:0767bd827d3b0b036d9df8",
    measurementId: "G-48KKM7T7V5",

  }
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
