import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDvFveVKDL25FZGDPDtLsw-wmKPrgfD2wE",
  authDomain: "final-project-ba8c0.firebaseapp.com",
  databaseURL:
    "https://final-project-ba8c0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-project-ba8c0",
  storageBucket: "final-project-ba8c0.appspot.com",
  messagingSenderId: "145622010729",
  appId: "1:145622010729:web:057e0bad08846ac1048bf8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;
