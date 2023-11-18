import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyDlMgc4M17jF-PB8sDbR9r_Wlvt6AuDWyo",
  authDomain: "ehacks2024-development.firebaseapp.com",
  projectId: "ehacks2024-development",
  storageBucket: "ehacks2024-development.appspot.com",
  messagingSenderId: "931961028127",
  appId: "1:931961028127:web:40aef58ae25f88a85d9f2a"
});

// Firebase storage reference
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);