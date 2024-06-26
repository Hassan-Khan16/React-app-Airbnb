// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2Cx1MoR-pNxrXFSziAUbIJ7gXG4cX_y4",
    authDomain: "react-airbnb-7128b.firebaseapp.com",
    projectId: "react-airbnb-7128b",
    storageBucket: "react-airbnb-7128b.appspot.com",
    messagingSenderId: "250116000673",
    appId: "1:250116000673:web:1134c09948145a43de59e0",
    measurementId: "G-XHNNTNV6FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const cardsCollection = collection(db, "cards")