// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApiKey } from "../secrets/firebaseapikey.secret";
import { getFireStore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "mymoni-3e597.firebaseapp.com",
  projectId: "mymoni-3e597",
  storageBucket: "mymoni-3e597.appspot.com",
  messagingSenderId: "930051132387",
  appId: "1:930051132387:web:a69f1758f2c8f7c7e3aed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app);
const authentication = getAuth(app);
export {db, authentication}