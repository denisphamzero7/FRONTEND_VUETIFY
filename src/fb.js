import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2f3zb8TpzYwQsRTqLCon8YbBv86b_gsY",
  authDomain: "dasboardvuetify.firebaseapp.com",
  projectId: "dasboardvuetify",
  storageBucket: "dasboardvuetify.firebasestorage.app",
  messagingSenderId: "113734338718",
  appId: "1:113734338718:web:1fbfb2a03ecec1e25a138f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;