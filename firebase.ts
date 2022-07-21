// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdUd2GswN8Lw2_BSdgnpg-2C_ca4peVh4",
  authDomain: "netflix-clone-d26dc.firebaseapp.com",
  projectId: "netflix-clone-d26dc",
  storageBucket: "netflix-clone-d26dc.appspot.com",
  messagingSenderId: "809701527683",
  appId: "1:809701527683:web:873486d52163245f7acbb6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
