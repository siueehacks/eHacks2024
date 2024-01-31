import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBO3tslMVos5DmsZ7azY2MddWYKNh-bnWU",
  authDomain: "ehacks2024.firebaseapp.com",
  projectId: "ehacks2024",
  storageBucket: "ehacks2024.appspot.com",
  messagingSenderId: "468899942185",
  appId: "1:468899942185:web:97ed56bdd1d4b3691a7138"
};

const app = initializeApp (firebaseConfig);

// Firebase storage reference
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);