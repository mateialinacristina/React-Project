import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeRGY0Q1U52lO1mGRGzzVpDxIoZmXDxdg",
  authDomain: "purple-chat-1913b.firebaseapp.com",
  projectId: "purple-chat-1913b",
  storageBucket: "purple-chat-1913b.appspot.com",
  messagingSenderId: "440212274437",
  appId: "1:440212274437:web:e9746875fcf085388a0b6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
