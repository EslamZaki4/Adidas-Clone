import { initializeApp } from "firebase/app";
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
  const app = initializeApp(firebaseConfig);
  // Export firestore database
  // It will be imported into your react app whenever it is needed
  export const db = getFirestore(app);