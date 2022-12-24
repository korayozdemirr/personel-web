// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2bq63Y7F6NJmFC-2zk7nLiwHpCP2XhXo",
  authDomain: "web-personel-db44e.firebaseapp.com",
  projectId: "web-personel-db44e",
  storageBucket: "web-personel-db44e.appspot.com",
  messagingSenderId: "668097929455",
  appId: "1:668097929455:web:0c5ee11b3adddde13c7b1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);