import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration (replace with your own)
const firebaseConfig = {
    apiKey: "AIzaSyDU_SwcOt-c12UdOOryKA_4-q2H9h2ZOLQ",
    authDomain: "flyfair-c84d8.firebaseapp.com",
    projectId: "flyfair-c84d8",
    storageBucket: "flyfair-c84d8.firebasestorage.app",
    messagingSenderId: "541344716635",
    appId: "1:541344716635:web:c0cc6e441006f563226c7e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth, initializeApp, getFirestore, getAuth, createUserWithEmailAndPassword, collection, addDoc };