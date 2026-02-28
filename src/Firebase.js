// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAevf_ThRQ6RzNNlsoRtgljMvYAcGdoBWQ",
  authDomain: "az-2ec99.firebaseapp.com",
  projectId: "az-2ec99",
  storageBucket: "az-2ec99.appspot.com",
  messagingSenderId: "218240786554",
  appId: "1:218240786554:web:ab9f92f184a291ac1c5bc3",
  measurementId: "G-TJCTDLMR79",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db=app.firestore();
export { auth ,db};

