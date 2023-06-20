// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSECEJ3RppqULxV2LHdGljzxThCmeCPxc",
  authDomain: "tiktok---ebac-ea7d6.firebaseapp.com",
  projectId: "tiktok---ebac-ea7d6",
  storageBucket: "tiktok---ebac-ea7d6.appspot.com",
  messagingSenderId: "961186655776",
  appId: "1:961186655776:web:3f21d9331e659bde15d645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);


export default db;