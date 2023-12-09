// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA71kKq995PisOl_JUM-lOL0i6Ds1ulSLE",
    authDomain: "adidas-82374.firebaseapp.com",
    projectId: "adidas-82374",
    storageBucket: "adidas-82374.appspot.com",
    messagingSenderId: "304897912105",
    appId: "1:304897912105:web:d3ec85ad39acfda70a1b38",
    measurementId: "G-43K598WQNF"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const        = getAnalytics(app);
export const auth = getAuth(app);
export const  provider =new GoogleAuthProvider();

export const database = getFirestore(app);

export default app;