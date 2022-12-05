
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCYCs1tV6gDC4TWiM7A8lbp33Ep0zCoXK0",
    authDomain: "ecommerce-app-mustafa.firebaseapp.com",
    projectId: "ecommerce-app-mustafa",
    storageBucket: "ecommerce-app-mustafa.appspot.com",
    messagingSenderId: "353170437669",
    appId: "1:353170437669:web:a6e300a55c55f9f5ea31cc"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

    export {auth,fs,storage}