import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyB2bq63Y7F6NJmFC-2zk7nLiwHpCP2XhXo',
  authDomain: 'web-personel-db44e.firebaseapp.com',
  projectId: 'web-personel-db44e',
  storageBucket: 'web-personel-db44e.appspot.com',
  messagingSenderId: '668097929455',
  appId: '1:668097929455:web:0c5ee11b3adddde13c7b1a',
  measurementId: 'G-C4XZLY45NG',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
// Initialize Firebase
