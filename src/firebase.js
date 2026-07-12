// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace this with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBabR5Y6HEYYKOUV1Gw0rHroxsbWIrVdoc",
  authDomain: "co-op-developer-assessment.firebaseapp.com",
  projectId: "co-op-developer-assessment",
  storageBucket: "co-op-developer-assessment.appspot.com",
  messagingSenderId: "806834382960",
  appId: "1:806834382960:web:d9bce99e8344dd64d72cb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
