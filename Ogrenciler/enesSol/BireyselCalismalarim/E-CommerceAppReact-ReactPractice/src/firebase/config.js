import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyCJD-koLKnrkRkZ1cZreMCzUwZwq-pZArc",
  authDomain: "nstart-1bd30.firebaseapp.com",
  projectId: "nstart-1bd30",
  storageBucket: "nstart-1bd30.appspot.com",
  messagingSenderId: "411816391537",
  appId: "1:411816391537:web:28b3df327588cf28233cd0",
  measurementId: "G-E4569XQ6ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
const analytics = getAnalytics(app);
