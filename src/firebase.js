import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBo06eiZBtH_-Cy89JvEAtWhqP-PGSjOts",
    authDomain: "desktop-app-f84a1.firebaseapp.com",
    projectId: "desktop-app-f84a1",
    storageBucket: "desktop-app-f84a1.appspot.com",
    messagingSenderId: "65072154189",
    appId: "1:65072154189:web:702c1e5b4ef64839f0fe04",
    measurementId: "G-0LJV83W2S1"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


