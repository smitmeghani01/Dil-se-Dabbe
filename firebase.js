// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { async } from '@firebase/util';
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore, where, query, increment } from "firebase/firestore";
import { format } from 'path';
import { doc, updateDoc } from "firebase/firestore"
import { Database } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuC7ClyvYxA4ww3_-AASReaTlMEN5V4Nc",
    authDomain: "dilsedabbe.firebaseapp.com",
    projectId: "dilsedabbe",
    storageBucket: "dilsedabbe.appspot.com",
    messagingSenderId: "47843294545",
    appId: "1:47843294545:web:6453c4d86a6ad0782d2770",
    measurementId: "G-VWYPCN66W5"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);

