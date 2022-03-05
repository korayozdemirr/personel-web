// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB2bq63Y7F6NJmFC-2zk7nLiwHpCP2XhXo',
  authDomain: 'web-personel-db44e.firebaseapp.com',
  projectId: 'web-personel-db44e',
  storageBucket: 'web-personel-db44e.appspot.com',
  messagingSenderId: '668097929455',
  appId: '1:668097929455:web:0c5ee11b3adddde13c7b1a',
  measurementId: 'G-C4XZLY45NG',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
export { app, db };