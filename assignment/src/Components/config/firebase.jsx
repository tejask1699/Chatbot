import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration (Replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyBAzAdSA2p3EMNgJC7NcfWnQsHnbx-uUuI",
    authDomain: "beyondchat-80a0b.firebaseapp.com",
    projectId: "beyondchat-80a0b",
    storageBucket: "beyondchat-80a0b.firebasestorage.app",
    messagingSenderId: "362448180536",
    appId: "1:362448180536:web:56b73864d64317e9ebddcd",
    measurementId: "G-JXBWT445NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };