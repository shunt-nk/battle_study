// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6uW6F_0qNPmy4hfx_alFaxJtg7htA9wE",
  authDomain: "battle-study.firebaseapp.com",
  projectId: "battle-study",
  storageBucket: "battle-study.firebasestorage.app",
  messagingSenderId: "63063194935",
  appId: "1:63063194935:web:41165b66966adb8349eeb2",
  measurementId: "G-VG38B21CCZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
