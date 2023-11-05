import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAyL584fuwJVPGnVrJAIVMxTleB8dhW5Sk",
  authDomain: "entregafinal-fae34.firebaseapp.com",
  projectId: "entregafinal-fae34",
  storageBucket: "entregafinal-fae34.appspot.com",
  messagingSenderId: "1001569903268",
  appId: "1:1001569903268:web:3ba19d171bcd12f1513c31",
  measurementId: "G-3ZM032P18F"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);