// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1xRqryOh0PtYut3o6pl1JsOolwOZbv7Q",
  authDomain: "pokeapi-e3766.firebaseapp.com",
  projectId: "pokeapi-e3766",
  storageBucket: "pokeapi-e3766.appspot.com",
  messagingSenderId: "1082922404744",
  appId: "1:1082922404744:web:c5e097a209e7375c13c83d",
  measurementId: "G-EKGZE4GJ6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app; 