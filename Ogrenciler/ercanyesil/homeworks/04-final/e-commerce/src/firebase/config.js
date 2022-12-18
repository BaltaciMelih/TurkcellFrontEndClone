import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBDgpCxG4EQrGEeYI2QDKwSYC_1BpO6bKc",
  authDomain: "greenstore-a614f.firebaseapp.com",
  projectId: "greenstore-a614f",
  storageBucket: "greenstore-a614f.appspot.com",
  messagingSenderId: "410573786352",
  appId: "1:410573786352:web:a7f8b4ec1ae0502a678635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app