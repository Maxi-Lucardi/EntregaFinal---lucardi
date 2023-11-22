import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNc6a4R4hSUjqarFouvZRJNoAWWfBzwkc",
  authDomain: "pepe-d7671.firebaseapp.com",
  projectId: "pepe-d7671",
  storageBucket: "pepe-d7671.appspot.com",
  messagingSenderId: "829747756875",
  appId: "1:829747756875:web:796c58503a15e41bc732ce",
  measurementId: "G-QBCD5149B8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);