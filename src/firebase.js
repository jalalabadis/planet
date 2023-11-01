// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD8ujiHN-P5rphVqUv6DunxvlBwokcYJbU",
    authDomain: "planet-7e09a.firebaseapp.com",
    databaseURL: "https://planet-7e09a-default-rtdb.firebaseio.com",
    projectId: "planet-7e09a",
    storageBucket: "planet-7e09a.appspot.com",
    messagingSenderId: "73039855930",
    appId: "1:73039855930:web:fff56150bfc11d1eed9003",
    measurementId: "G-SNJ08X5FGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);