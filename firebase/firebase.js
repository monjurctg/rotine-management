// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq5Z4Mb6J1vGt8_0vNVz--8RMyfejDimA",
  authDomain: "rotine-management.firebaseapp.com",
  projectId: "rotine-management",
  storageBucket: "rotine-management.appspot.com",
  messagingSenderId: "825108814575",
  appId: "1:825108814575:web:21a12bb07634295f6dd91a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
