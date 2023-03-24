import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyDQyYYIs8Ieu2ARWaWqBKnWie4ArUZk1hU",
  authDomain: "shecode-7aae7.firebaseapp.com",
  projectId: "shecode-7aae7",
  storageBucket: "shecode-7aae7.appspot.com",
  messagingSenderId: "173462445402",
  appId: "1:173462445402:web:46d292cf9c28274be66763"
});

// Firebase storage reference
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);