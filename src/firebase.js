import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyB6Q69nDrku0rco_JxB8Yn6s9CYSbK45LM",
  authDomain: "snack-time-a089c.firebaseapp.com",
  projectId: "snack-time-a089c",
  storageBucket: "snack-time-a089c.appspot.com",
  messagingSenderId: "555083281791",
  appId: "1:555083281791:web:0a52258a6f8967a7ce564a"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

