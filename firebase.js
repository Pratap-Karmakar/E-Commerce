// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW10Vc4OfcCTYhNxh82B79XtGdxeHeKZM",
  authDomain: "e-commerce-app-aeeec.firebaseapp.com",
  projectId: "e-commerce-app-aeeec",
  storageBucket: "e-commerce-app-aeeec.appspot.com",
  messagingSenderId: "1045356150330",
  appId: "1:1045356150330:web:9ca1c70a8296c9a289ff03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// for the firebase database
export const db = getFirestore(app)

// for firebase authentication
export const auth=getAuth(app)
export const provider = new GoogleAuthProvider(app);